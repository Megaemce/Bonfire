What would you create by blending 17 layers of gradients and [Perlin noises](https://en.wikipedia.org/wiki/Perlin_noise) with [background-blend-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode), [mix-blend-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode) and 4 animations?

-   You'd craft a render-intensive CSS-only bonfire.

Sit down and enjoy the fire.

### Limitation

This solution will not properly on Safari and most of the mobile browsers due to [mix-blend-mode being not supported on SVG elements](https://caniuse.com/mdn-css_properties_mix-blend-mode_svg_elements).
