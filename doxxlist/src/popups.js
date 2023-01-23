function flag_url(code) {
    return `https://flags.komali.dev/svg/${code}.svg`
}
function country_popup(code, group) {
    let country = get_countries()[code];
    let people = get_data()[group].people;
    let marker = L.marker(country.pos).addTo(map);
    marker.bindPopup(`
<div class="country">
    <h1><img class="flag" src="${flag_url(code)}">${country.name} (${people[code].length})</h1>
    <div class="people">${people[code].join("<br>")}</div>
</div>`
    )
    // .openPopup();
}
function fill_divs(group) {
    let people = Object.entries(get_data()[group].people);
    let countries = get_countries();
    let divs = [...document.querySelectorAll(".col")];
    let chunks = [[],[],[]];
    let s = people.length / 3;
    while(people.length > s*2) chunks[0].push(people.shift());
    while(people.length > s) chunks[1].push(people.shift());
    chunks[2] = [...people];
    chunks.map((c,i) => divs[i].innerHTML = c.map(x=>`<img class="flag" src="${flag_url(x[0])}"><b>${countries[x[0]].name}</b>: ${x[1].join(", ")}`).join("<br>"))
}