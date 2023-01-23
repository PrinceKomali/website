function colors() {
    return {
        "Red Ball": [255,58,58],
        "SMB1/2J": [220, 96, 32], // original is [200, 76, 12]
        "BfBB": [240, 179, 68],
        "SM64DS": [83, 192, 121],
        "SM64": [140, 255, 246],
        "MKWii": [47, 183, 225],
        "Trackmania": [103, 118, 243],
        "SMG": [194, 57, 273], // original is [174, 37, 253]
        "Minecraft": [201, 70, 124]
    }
}
function prettify_users(str) {
    // this script is a frankenstein of like 5 other scripts that
    // weren't meant to be put together so that's why it looks bad
    let a = str.split(/DQ/);
    let score = a.shift();
    let cl = colors();
    let dq = a[0] ?  "DQ" + a.join("DQ"): "";
    let p = get_people();
    for(let i in p) p[i].roles = p[i].roles.filter(x=>!!cl[x])
    let people_in_score = score.split("\n").filter(x=>x.trim().length > 1).map(x=>x.split(/\d\d?..\. /)[1].split(/ [\d:\.]+$/)[0]);
    for(let user of p) {
        let n = user.roles.length > 0 ? user.name.split("").map((c,i)=>
            `<span style="color:rgb(${cl[user.roles[i%user.roles.length]].join(",")});">${c}</span>`
        ).join("") : user.name
        n = "<span class='user'>" + n + "</span>"
        if(people_in_score.includes(user.name)) people_in_score[people_in_score.indexOf(user.name)] = n
    }
    for(let i in people_in_score) if(!people_in_score[i].startsWith("<span")) people_in_score[i] = `<span class='user'>${people_in_score[i]}</span>`
    let people_in_dq = null;
    if(dq.length > 0) {
        people_in_dq = dq.split("\n").filter(x=>x.trim().length > 1).map(x=>x.split(/^DQ[\.:] /)[1].split(/ [\d:\.]+ .*$/)[0]);
            for(let user of p) {
                let n = user.roles.length > 0 ? user.name.split("").map((c,i)=>
                    `<span style="color:rgb(${cl[user.roles[i%user.roles.length]].join(",")});">${c}</span>`
                ).join("") : user.name
            n = "<span class='user'>" + n + "</span>"
            if(people_in_dq.includes(user.name)) people_in_dq[people_in_dq.indexOf(user.name)] = n
        }
    }
    for(let i in people_in_dq) if(!people_in_dq[i].startsWith("<span")) people_in_dq[i] = `<span class='user'>${people_in_dq[i]}</span>`
    return people_in_score.map((x,i)=>`${score.split("\n")[i].split(" ")[0]} ${x} ${score.split("\n")[i].split(" ").at(-1)}`).join("<br>")
        + (people_in_dq ? "<br><br>" + people_in_dq.map((x,i)=>`<span style="color:#f00">DQ</span>: ${x} ${dq.split("\n")[i].match(/[\d:\.]+ \[.*\]$/)[0]}`).join("<br>") : "");
}