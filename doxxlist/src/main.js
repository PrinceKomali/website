let group = "sm64";
let select = document.querySelector("select");
window.onload = function () {
    map_resize();
    map_init();
    load_points(group);
    fill_divs(group);
    let data = get_data();
    for(let datum of Object.keys(data)) {
        let opt = document.createElement("option");
        opt.value = datum;
        opt.innerText = datum;
        select.appendChild(opt);
    }
    select.value = group;
}
window.onresize = map_resize;
select.onchange = function () {
    group = select.value;
    load_points(group);
    fill_divs(group);
}
