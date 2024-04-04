function startSound() {
    const fireSound = document.getElementById("fireSound");
    const start = document.getElementById("start");
    const fire = document.getElementById("fire");

    fire.classList.add("on");
    start.style.display = "none";

    fireSound.play();
}

let lastClickTime = 0;
document.addEventListener("click", function (event) {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastClickTime;
    if (tapLength < 500 && tapLength > 0) {
        toggleFullScreen();
        event.preventDefault();
    }
    lastClickTime = currentTime;
});

// Toggle fullscreen mode
function toggleFullScreen() {
    const element = document.documentElement;
    const isFullScreen =
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement;
    if (!isFullScreen) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}
