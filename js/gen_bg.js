function gen_bg() {
    let NUMBER_OF_IMAGES = 13;
    let img_url = `https://komali.dev/background_images/${
        Math.floor(Math.random() * NUMBER_OF_IMAGES) + 1
    }.png`;

    let temp = new Image();
    temp.src = img_url;
    let bg = document.querySelector("#bg_img");
    temp.onload = (_) => {
        bg.src = img_url;
        bg.classList.add("fadein");
    };
}
