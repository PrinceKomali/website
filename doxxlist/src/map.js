let map;
function map_init() {
    map = L.map("map").setView([20, -20], 3);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    return map;
}
function map_resize() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    let map_el = document.querySelector(".map");
    map_el.style.width = vw + "px";
    map_el.style.height = (vh*2/3) + "px";
}
function load_points(group) {
    let data = get_data()[group];
    document.querySelector("h1").innerText = data.title
    map.eachLayer(l => {
        if(l instanceof L.Marker) map.removeLayer(l);
    })
    for(c of Object.keys(data.people)) country_popup(c, group)
}