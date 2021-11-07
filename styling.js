let NUMBER_OF_IMAGES = 13;

window.onload = function () {
    document.body.style.background = `url(/background_images/${(Math.floor(Math.random()*NUMBER_OF_IMAGES) + 1)}.png) no-repeat`;
    document.body.style.backgroundSize = "cover";
    let css = document.createElement("style");
    let _css = document.createTextNode(`@font-face {font-family: Calamity;src: url(https://komali.dev/CALAMITY-BOLD.TTF);} body{color:#eeeeee;font-weight:bold;font-family: Calamity;text-shadow: 2px 2px rgba(0,0,0,.7);} .sliding-background { z-index: -100; top: 0; left: 0; margin: 0; position: fixed; overflow: hidden; background: url("/background_images/texture.png") repeat; height: 7086px; width: 5940px; animation: slide 1000s linear infinite; opacity: .75; } @keyframes slide { 0% { transform: translate3d(0, 0, 0); } 100% { transform: translate3d(-1980px, -2362px, 0); } }`);
    css.appendChild(_css);
    document.body.appendChild(css);
    document.body.innerHTML = `<div class="container"><div class="sliding-background"></div></div>` + document.body.innerHTML;
}
