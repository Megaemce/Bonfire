import perlin4D from "./perlin.js";

// Adjust these parameters as needed
const bufferWidth = 500;
const bufferHeight = 500;
const x1 = 0; // Example values for x1, y1, x2, y2
const y1 = 0;
const x2 = 100;
const y2 = 100;
const tileSize = 1; // Adjust the size of each tile

// Function to generate SVG noise pattern
function generateSVGNoise(bufferWidth, bufferHeight, x1, y1, x2, y2, tileSize) {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.getElementById("noise");
    svg.innerHTML = "";

    for (let x = 0; x < bufferWidth; x += tileSize) {
        for (let y = 0; y < bufferHeight; y += tileSize) {
            const s = x / bufferWidth;
            const t = y / bufferHeight;
            const dx = x2 - x1;
            const dy = y2 - y1;

            const nx = x1 + (Math.cos(s * 2 * Math.PI) * dx) / (2 * Math.PI);
            const ny = y1 + (Math.cos(t * 2 * Math.PI) * dy) / (2 * Math.PI);
            const nz = x1 + (Math.sin(s * 2 * Math.PI) * dx) / (2 * Math.PI);
            const nw = y1 + (Math.sin(t * 2 * Math.PI) * dy) / (2 * Math.PI);

            const noiseValue = perlin4D(nx, ny, nz, nw); // Get 4D Perlin noise value
            const color = getColorFromNoise(noiseValue); // Get color based on noise value

            const rect = document.createElementNS(svgNS, "rect");
            rect.setAttribute("x", x);
            rect.setAttribute("y", y);
            rect.setAttribute("width", tileSize);
            rect.setAttribute("height", tileSize);
            rect.setAttribute("fill", color);
            svg.appendChild(rect);
        }
    }
}

// Function to map noise value to color
function getColorFromNoise(noiseValue) {
    const shade = Math.floor(noiseValue * 255);
    return `rgb(${shade},${shade},${shade})`;
}

// Generate SVG noise pattern
generateSVGNoise(bufferWidth, bufferHeight, x1, y1, x2, y2, tileSize);
