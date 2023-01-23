// start srcjs/data.js
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
// end srcjs/data.js
// start srcjs/index.js
let select = document.querySelector("select");
window.onload = _ => {
    let n = num_tasks();
    for(let i = 0; i < n;i++) {
        let opt = document.createElement("option");
        opt.value = "Task " + (i + 1);
        opt.innerText = "Task " + (i + 1);
        select.appendChild(opt);
    }
    select.value = "Task " + n;
    let c = colors();
    for(let k of Object.keys(c)) {
        document.querySelector(".roles").innerHTML += `<div class='role'><div class='circle' style='background-color:rgb(${c[k].join(", ")})'> </div> ${k}</div>`
    }
    load_task(n);
    
}
function load_task(n) {
    // I could use eval but nah
    switch(n) {
        case 1:
            task_1();
            break;
    }
}
// end srcjs/index.js
// start srcjs/num_tasks.js
function num_tasks() { return 1; }

// end srcjs/num_tasks.js
// start srcjs/people.js
function get_people() {
    return [{
            "name": "ERGC | Xander",
            "roles": [
                "SMG",
                "SM64"
            ]
        },
        {
            "name": "Adeal",
            "roles": [
                "SM64DS",
                "SM64"
            ]
        },
        {
            "name": "Chunk",
            "roles": [ "BfBB" ]
        },
        {
            "name": "Burpman",
            "roles": [ "Trackmania" ]
        },
        {
            "name": "Arkes",
            "roles": [ "Trackmania" ]
        },
        {
            "name": "Arthur - GT",
            "roles": [ "MKWii" ]
        },
        {
            "name": "ATG",
            "roles": []
        },
        {
            "name": "averge11",
            "roles": [
                "SMB1/2J",
                "Red Ball"
            ]
        },
        {
            "name": "benjae",
            "roles": [
                "Trackmania",
                "Minecraft"
            ]
        },
        {
            "name": "BikerBones",
            "roles": [
                "SM64DS",
                "BfBB",
                "SM64"
            ]
        },
        {
            "name": "BillyWAR",
            "roles": [
                "SMG",
                "SM64"
            ]
        },
        {
            "name": "Booshi",
            "roles": [ "MKWii" ]
        },
        {
            "name": "Brokami",
            "roles": [ "SM64" ]
        },
        {
            "name": "Carl-bot",
            "roles": [
                "carl-bot"
            ]
        },
        {
            "name": "Citrinitas",
            "roles": [ "MKWii" ]
        },
        {
            "name": "cookievm",
            "roles": [
                "MKWii",
                "SMG",
                "Minecraft"
            ]
        },
        {
            "name": "Crackhex",
            "roles": [ "SM64" ]
        },
        {
            "name": "d3rpybi11z",
            "roles": []
        },
        {
            "name": "darthfrongo",
            "roles": [ "BfBB" ]
        },
        {
            "name": "DavidYogi",
            "roles": [ "BfBB" ]
        },
        {
            "name": "DwainiumB",
            "roles": [ "MKWii" ]
        },
        {
            "name": "Eribetra",
            "roles": [ "SM64" ]
        },
        {
            "name": "Experge25A",
            "roles": [ "SM64" ]
        },
        {
            "name": "FallBackITA27",
            "roles": [ "MKWii" ]
        },
        {
            "name": "Gaberboo",
            "roles": [ "MKWii" ]
        },
        {
            "name": "Gaminator",
            "roles": [
                "Red Ball"
            ]
        },
        {
            "name": "GlitchGod",
            "roles": [ "SM64" ]
        },
        {
            "name": "glug27",
            "roles": []
        },
        {
            "name": "Gryzak",
            "roles": [
                "SMB1/2J",
                "SM64"
            ]
        },
        {
            "name": "HGFRINK27",
            "roles": []
        },
        {
            "name": "hoogachakka",
            "roles": [ "SM64DS" ]
        },
        {
            "name": "Idonthaveagun",
            "roles": []
        },
        {
            "name": "JRTRCT",
            "roles": []
        },
        {
            "name": "Jsap",
            "roles": [ "Trackmania" ]
        },
        {
            "name": "KaiMK",
            "roles": [ "MKWii" ]
        },
        {
            "name": "Kim",
            "roles": [ "Trackmania" ]
        },
        {
            "name": "Komali",
            "roles": [ "SM64" ]
        },
        {
            "name": "LAze",
            "roles": []
        },
        {
            "name": "leader",
            "roles": [
                "MKWii",
                "Trackmania",
                "Red Ball"
            ]
        },
        {
            "name": "LirWm",
            "roles": [ "SM64" ]
        },
        {
            "name": "Lud",
            "roles": [ "Minecraft" ]
        },
        {
            "name": "maB_",
            "roles": [ "Trackmania" ]
        },
        {
            "name": "Malleo",
            "roles": [ "MKWii" ]
        },
        {
            "name": "Maximiliano",
            "roles": [ "MKWii" ]
        },
        {
            "name": "Memphote1246",
            "roles": []
        },
        {
            "name": "Meowximum",
            "roles": [ "SM64" ]
        },
        {
            "name": "Miku",
            "roles": [ "Trackmania" ]
        },
        {
            "name": "mine_pvpkill",
            "roles": [
                "MKWii",
                "Minecraft"
            ]
        },
        {
            "name": "Minty",
            "roles": [ "SM64" ]
        },
        {
            "name": "Mr. Frosty",
            "roles": [
                "Red Ball"
            ]
        },
        {
            "name": "Noah-willy",
            "roles": [
                "SM64DS",
                "MKWii",
                "BfBB",
                "SMG",
                "SMB1/2J",
                "Trackmania",
                "Red Ball",
                "Minecraft",
                "SM64"
            ]
        },
        {
            "name": "Noci27",
            "roles": [ "SM64" ]
        },
        {
            "name": "NOKKY",
            "roles": [ "MKWii" ]
        },
        {
            "name": "OliverSR",
            "roles": [ "Minecraft" ]
        },
        {
            "name": "MCPfannkuchenYT",
            "roles": [ "Minecraft" ]
        },
        {
            "name": "Pearce",
            "roles": []
        },
        {
            "name": "Poguin",
            "roles": [
                "Red Ball"
            ]
        },
        {
            "name": "Rewan Demontay",
            "roles": []
        },
        {
            "name": "Rogue",
            "roles": [ "MKWii" ]
        },
        {
            "name": "sear",
            "roles": [
                "MKWii",
                "SMB1/2J",
                "SM64"
            ]
        },
        {
            "name": "ShadoXFM",
            "roles": [ "SM64" ]
        },
        {
            "name": "Shweetz",
            "roles": [ "Trackmania" ]
        },
        {
            "name": "Skypeerer",
            "roles": [
                "MKWii",
                "BfBB",
                "SMG"
            ]
        },
        {
            "name": "Sonk",
            "roles": []
        },
        {
            "name": "Spacewhale",
            "roles": []
        },
        {
            "name": "Splooze",
            "roles": []
        },
        {
            "name": "Stuntlover",
            "roles": [ "Trackmania" ]
        },
        {
            "name": "threadd",
            "roles": [ "Trackmania" ]
        },
        {
            "name": "UsernamesAreHard",
            "roles": []
        },
        {
            "name": "UwUme",
            "roles": []
        },
        {
            "name": "vabold",
            "roles": [ "MKWii" ]
        },
        {
            "name": "Wade7",
            "roles": [ "SM64" ]
        },
        {
            "name": "warmCabin",
            "roles": []
        },
        {
            "name": "xLeLucaus",
            "roles": []
        },
        {
            "name": "xnikmkw",
            "roles": [ "MKWii" ]
        },
        {
            "name": "Yoshi",
            "roles": [
                "MKWii",
                "SMB1/2J"
            ]
        },
        {
            "name": "Zyon",
            "roles": [ "SM64" ]
        },
        {
            "name": "小貓與蜜糖",
            "roles": []
        },
        {
            "name": "Mizumaririn",
            "roles": [
                "SMB1/2J",
                "SM64"
            ]
        },
        {
            "name": "!Hibyehello",
            "roles": [ "MKWii" ]
        },
        {
            "name": "108Pi",
            "roles": [
                "SMB1/2J"
            ]
        },
        {
            "name": "??????",
            "roles": [ "MKWii" ]
        },
        {
            "name": "Alexpalix1",
            "roles": [ "SM64" ]
        },
        {
            "name": "AlmostTWD98»",
            "roles": [ "MKWii" ]
        },
        {
            "name": "Alpha97",
            "roles": [ "SM64" ]
        },
        {
            "name": "ancient",
            "roles": [ "MKWii" ]
        },
        {
            "name": "ashggg",
            "roles": []
        },
        {
            "name": "Aston",
            "roles": [ "Minecraft" ]
        },
        {
            "name": "AStrongGuy",
            "roles": [ "SM64" ]
        },
        {
            "name": "Aylx",
            "roles": [ "MKWii" ]
        },
        {
            "name": "Battery",
            "roles": [ "SM64" ]
        },
        {
            "name": "BirdBanana",
            "roles": [
                "Red Ball",
                "SM64"
            ]
        },
        {
            "name": "Blazethe6",
            "roles": []
        },
        {
            "name": "bobbybob",
            "roles": [ "SM64DS" ]
        },
        {
            "name": "Broxzier",
            "roles": []
        },
        {
            "name": "bruhmoment",
            "roles": [
                "SMB1/2J"
            ]
        },
        {
            "name": "Cabi",
            "roles": [
                "SM64DS",
                "MKWii",
                "SM64"
            ]
        },
        {
            "name": "CHARL1E",
            "roles": [ "MKWii" ]
        },
        {
            "name": "chbld",
            "roles": [
                "SMB1/2J"
            ]
        },
        {
            "name": "Chocolatemilk",
            "roles": []
        },
        {
            "name": "chriss",
            "roles": [ "MKWii" ]
        },
        {
            "name": "combo_pig38 alt",
            "roles": []
        },
        {
            "name": "Cookie Eater",
            "roles": [
                "Red Ball"
            ]
        },
        {
            "name": "Coolestkid555",
            "roles": []
        },
        {
            "name": "CrashKenny",
            "roles": []
        },
        {
            "name": "CrizpyCheese",
            "roles": [ "Trackmania" ]
        },
        {
            "name": "cryptanalyst",
            "roles": []
        },
        {
            "name": "César",
            "roles": [ "MKWii" ]
        },
        {
            "name": "DanPark/DeRockProject",
            "roles": [
                "SMG",
                "SM64"
            ]
        },
        {
            "name": "Dark-Crystal",
            "roles": [ "SM64" ]
        },
        {
            "name": "DarkNight3141 (Superdavo0001)",
            "roles": [ "SM64" ]
        },
        {
            "name": "DashQC",
            "roles": [ "MKWii" ]
        },
        {
            "name": "deleted",
            "roles": []
        },
        {
            "name": "DelphiX",
            "roles": [
                "SMB1/2J"
            ]
        },
        {
            "name": "Dyllon Stejakoski",
            "roles": [ "SM64" ]
        },
        {
            "name": "Ejay B",
            "roles": [ "MKWii" ]
        },
        {
            "name": "emoyosh",
            "roles": []
        },
        {
            "name": "ErGinger",
            "roles": []
        },
        {
            "name": "Euler's Number",
            "roles": []
        },
        {
            "name": "exopta",
            "roles": []
        },
        {
            "name": "faizthemfsurprise",
            "roles": []
        },
        {
            "name": "FazDag",
            "roles": [ "SM64" ]
        },
        {
            "name": "FeijoadaMolhada",
            "roles": [ "SM64" ]
        },
        {
            "name": "fella8",
            "roles": [
                "SMB1/2J"
            ]
        },
        {
            "name": "fernandothehorse",
            "roles": []
        },
        {
            "name": "monion",
            "roles": [ "MKWii" ]
        },
        {
            "name": "FireBreather",
            "roles": [ "SM64" ]
        },
        {
            "name": "flurry",
            "roles": [ "MKWii" ]
        },
        {
            "name": "Frame",
            "roles": [ "SM64" ]
        },
        {
            "name": "FriendsWithFun",
            "roles": [ "MKWii" ]
        },
        {
            "name": "galoomba",
            "roles": [ "SM64" ]
        },
        {
            "name": "Hl M0M",
            "roles": []
        },
        {
            "name": "Iam0",
            "roles": []
        },
        {
            "name": "Ianwubby",
            "roles": []
        },
        {
            "name": "jcplay15",
            "roles": []
        },
        {
            "name": "Jeffitus",
            "roles": [
                "SMB1/2J"
            ]
        },
        {
            "name": "Johnelway76",
            "roles": [ "SM64" ]
        },
        {
            "name": "Jthespedcuber",
            "roles": []
        },
        {
            "name": "Kannolotl",
            "roles": [
                "Minecraft",
                "SM64"
            ]
        },
        {
            "name": "kierio04",
            "roles": [
                "MKWii",
                "SMB1/2J",
                "SM64"
            ]
        },
        {
            "name": "[TAS] - λρ◆NJA",
            "roles": [ "MKWii" ]
        },
        {
            "name": "kristian",
            "roles": []
        },
        {
            "name": "Ktas",
            "roles": []
        },
        {
            "name": "LaseyApow",
            "roles": [ "SM64" ]
        },
        {
            "name": "Leon_green",
            "roles": [
                "MKWii",
                "Minecraft"
            ]
        },
        {
            "name": "LeonGamer_real",
            "roles": [ "SM64" ]
        },
        {
            "name": "LetsGoAway",
            "roles": [ "SM64" ]
        },
        {
            "name": "lordmagecar",
            "roles": []
        },
        {
            "name": "LoResEvil",
            "roles": []
        },
        {
            "name": "LRFLEW",
            "roles": [ "SM64" ]
        },
        {
            "name": "LSLees_",
            "roles": [ "BfBB" ]
        },
        {
            "name": "Lukalyc",
            "roles": []
        },
        {
            "name": "M4rkgmd",
            "roles": [ "MKWii" ]
        },
        {
            "name": "Madghostek",
            "roles": [ "SM64" ]
        },
        {
            "name": "MaG_NITud3",
            "roles": [ "Minecraft" ]
        },
        {
            "name": "mcw4v3-x",
            "roles": []
        },
        {
            "name": "MGMLeo",
            "roles": []
        },
        {
            "name": "mkwLuke",
            "roles": [ "MKWii" ]
        },
        {
            "name": "mnmcat",
            "roles": []
        },
        {
            "name": "MonsterDruide1",
            "roles": []
        },
        {
            "name": "Mr.Wolf2007yrs",
            "roles": []
        },
        {
            "name": "Nerdician",
            "roles": [ "SM64" ]
        },
        {
            "name": "novego",
            "roles": [
                "Red Ball"
            ]
        },
        {
            "name": "nshade_",
            "roles": []
        },
        {
            "name": "Okopatie",
            "roles": []
        },
        {
            "name": "p_yoshi",
            "roles": [ "SM64DS" ]
        },
        {
            "name": "param_r06",
            "roles": []
        },
        {
            "name": "Patinho",
            "roles": []
        },
        {
            "name": "PCK",
            "roles": []
        },
        {
            "name": "PurdyKillsYou",
            "roles": []
        },
        {
            "name": "PurpleJuiceBox",
            "roles": [
                "Red Ball",
                "SM64"
            ]
        },
        {
            "name": "Pyraminxstars",
            "roles": [ "MKWii" ]
        },
        {
            "name": "queenbea",
            "roles": [
                "Red Ball"
            ]
        },
        {
            "name": "Rayman Omega Player",
            "roles": []
        },
        {
            "name": "Razor",
            "roles": []
        },
        {
            "name": "Really_Tall",
            "roles": [ "SM64DS" ]
        },
        {
            "name": "reiner",
            "roles": [ "MKWii" ]
        },
        {
            "name": "RepressedButton",
            "roles": []
        },
        {
            "name": "RMED24",
            "roles": [ "MKWii" ]
        },
        {
            "name": "RoBoBoB",
            "roles": []
        },
        {
            "name": "RS",
            "roles": [ "MKWii" ]
        },
        {
            "name": "RSW",
            "roles": [ "SM64" ]
        },
        {
            "name": "ruadath",
            "roles": []
        },
        {
            "name": "Rxser",
            "roles": []
        },
        {
            "name": "Ryzonno",
            "roles": [ "SM64" ]
        },
        {
            "name": "SadEgg",
            "roles": [
                "MKWii",
                "SMG",
                "Minecraft"
            ]
        },
        {
            "name": "SageKitten",
            "roles": [
                "Red Ball"
            ]
        },
        {
            "name": "Scribble",
            "roles": [ "Minecraft" ]
        },
        {
            "name": "Shadow64",
            "roles": []
        },
        {
            "name": "shatterdpixel",
            "roles": []
        },
        {
            "name": "slither",
            "roles": [
                "SMB1/2J",
                "SM64"
            ]
        },
        {
            "name": "Smiley",
            "roles": [ "BfBB" ]
        },
        {
            "name": "Sniperlol",
            "roles": [ "MKWii" ]
        },
        {
            "name": "Snowookis",
            "roles": []
        },
        {
            "name": "Soulbest",
            "roles": [ "Minecraft" ]
        },
        {
            "name": "Spear960",
            "roles": [ "MKWii" ]
        },
        {
            "name": "Speedrun",
            "roles": []
        },
        {
            "name": "Sqidzilla",
            "roles": []
        },
        {
            "name": "Sreekar",
            "roles": [ "MKWii" ]
        },
        {
            "name": "Starline",
            "roles": [
                "Red Ball"
            ]
        },
        {
            "name": "Superemcow",
            "roles": []
        },
        {
            "name": "SuperM789",
            "roles": [ "SM64" ]
        },
        {
            "name": "Tets",
            "roles": []
        },
        {
            "name": "ThatsSlick",
            "roles": [ "MKWii" ]
        },
        {
            "name": "The Tactical TASer",
            "roles": [ "MKWii" ]
        },
        {
            "name": "TheGreenPig321",
            "roles": [
                "MKWii",
                "Minecraft"
            ]
        },
        {
            "name": "TheSecondTry (luigidasonic)",
            "roles": [ "SM64" ]
        },
        {
            "name": "this is police",
            "roles": [ "MKWii" ]
        },
        {
            "name": "Tillerson",
            "roles": [ "Minecraft" ]
        },
        {
            "name": "tjk",
            "roles": [ "SM64" ]
        },
        {
            "name": "Tomothy",
            "roles": [ "MKWii" ]
        },
        {
            "name": "Tonjiru",
            "roles": []
        },
        {
            "name": "Tonkao87",
            "roles": [ "MKWii" ]
        },
        {
            "name": "Toogs",
            "roles": [ "SMG" ]
        },
        {
            "name": "tormi",
            "roles": [ "MKWii" ]
        },
        {
            "name": "Unease",
            "roles": [ "Minecraft" ]
        },
        {
            "name": "usernameispassword",
            "roles": [ "SMG" ]
        },
        {
            "name": "Vbhnkl",
            "roles": [ "SM64" ]
        },
        {
            "name": "Vexxter",
            "roles": []
        },
        {
            "name": "VTMagno",
            "roles": [ "SM64DS" ]
        },
        {
            "name": "Windows X",
            "roles": [
                "SMB1/2J",
                "SM64"
            ]
        },
        {
            "name": "Wizardo",
            "roles": [ "BfBB" ]
        },
        {
            "name": "WowYouro",
            "roles": [
                "Red Ball"
            ]
        },
        {
            "name": "YellowSkarmory",
            "roles": []
        },
        {
            "name": "Yentl",
            "roles": [ "MKWii" ]
        },
        {
            "name": "yesno",
            "roles": []
        },
        {
            "name": "Zappg",
            "roles": [ "MKWii" ]
        },
        {
            "name": "zcarp7220",
            "roles": []
        },
        {
            "name": "Zerolin (nathan10nathan)",
            "roles": [ "SM64" ]
        },
        {
            "name": "Beluga",
            "roles": [
                "SM64DS",
                "MKWii",
                "BfBB",
                "SMG",
                "SMB1/2J",
                "Trackmania",
                "Red Ball",
                "Minecraft",
                "SM64"
            ]
        },
        {
            name: "Spacewhale",
            roles: [ "MKWii" ]
        },
        {
            name: "thomas",
            roles: ["MKWii"]
        },
        {
            name: "Jellopuff",
            roles: ["MKWii"]
        },
        {
            name: "CampbellMop",
            roles: ["MKWii"]
        },
        {
            name: "DashQC",
            roles: ["MKWii"]
        },
        {
            name: "Marth",
            roles: ["MKWii"]
        }
    ]

}
// end srcjs/people.js
// start srcjs/task1.js
function task_1() {
    let task_game = "Mario Kart Wii";
    let task_description = `On Moo Moo Meadows, using <b>ANY</b> character or vehicle, and <b>NO</b> mushrooms, complete lap <b>ONE</b> as fast as possible.

    - You may <b>NOT</b> perform any tricks in the lap
    - You may <b>NOT</b> touch the boost pad on the boost ramp
    <i>TIP: If you touch the boost pad; flames will come out of your vehicle, speed streaks will appear on the screen, and your max speed will increase to 100</i>
    
    This is a solo task, so you may <b>NOT</b> collaborate with anyone else.`;
    let results = 
`1st. Spacewhale 0:26.269
2nd. thomas 0:26.282
3rd. CampbellMop 0:26.316
4th. Jellopuff 0:26.321
5th. DashQC 0:26.326
6th. kierio04 0:26.328
7th. Booshi 0:26.340
8th. flurry 0:26.359
9th. Pyraminxstars 0:26.379
10th. CHARL1E 0:26.414
11th. Marth 0:26.496
12th. FeijoadaMolhada 0:26.501
13th. Tomothy 0:26.525
14th. KaiMK 0:26.528
15th. César 0:26.535
16th. Chunk 0:26.552
17th. Zappg 0:26.564
18th. Firefanged 0:26.585
19th. Sparky 0:26.621
20th. Rogue 0:26.636
21st. marvus 0:26.685
22nd. Mizumaririn 0:26.747
23rd. Aylx 0:26.761
24th. Fire05 0:26.777
25th. fella8 0:26.778
26th. M4rkgmd 0:26.832
27th. Skypeerer 0:26.838
28th. BillyWAR 0:26.855
29th. Soulbest 0:26.898
30th. Razor 0:26.910
31st. aaron 0:26.949
32nd. FalB 0:26.986
33rd. tormi 0:26.999
34th. Hibyehello 0:27.049
35th. Noci27 0:27.357
36th. YG 0:27.366
37th. qwertzuioppel 0:27.400
38th. LRFLEW 0:27.496
39th. this is police 0:27.502
40th. Meowximum 0:27.505
41st. Yentl 0:27.513
42nd. Gaberboo 0:27.564
43rd. G-Force 0:27.602
44th. ERGC | Xander 0:27.628
45th. brooke 0:27.690
46th. 108Pi 0:27.774
47th. bruhmoment 0:28.249
48th. Komali 0:28.291
49th. leader 0:28.405
50th. Mr. Frosty 0:28.606
51st. Starline 0:28.704
52nd. GaelLazerYT 0:28.790
53rd. Colt 0:29.561
54th. Eribetra 0:30.242
55th. Windows X 0:30.391
56th. Lud 0:30.753

DQ. Vexxter 0:25.299 [Used mushrooms]
DQ. AlmostTWD98 0:25.421 [Used mushrooms]
DQ. GlitchGod 0:25.881 [Used mushrooms]
DQ. fdfadfsfasdad 0:26.658 [Submitted after the deadline]
DQ. Chal 0:27.557 [Submitted after the deadline]
DQ. CCB 0:29.044 [Submitted after the deadline]
DQ. Wade7 0:32.984 [Submitted after the deadline]
DQ. Noah-willy 0:37.769 [Used mushrooms]
DQ. SuperM789 0:39.160 [Didn't submit an actual RKG]
DQ. ThatsSlick 1:59.749 [Submitted after the deadline]`

    let score_after_task = 
`1st. Spacewhale 50.0
2nd. thomas 47.3
3rd. CampbellMop 44.9
4th. Jellopuff 42.5
5th. DashQC 40.4
6th. kierio04 38.3
7th. Booshi 36.4
8th. flurry 34.7
9th. Pyraminxstars 33.0
10th. CHARL1E 31.5
11th. Marth 30.0
12th. FeijoadaMolhada 28.7
13th. Tomothy 27.4
14th. KaiMK 26.2
15th. César 25.1
16th. Chunk 24.1
17th. Zappg 23.1
18th. Firefanged 22.2
19th. Sparky 21.4
20th. Rogue 20.6
21st. marvus 19.8
22nd. Mizumaririn 19.1
23rd. Aylx 18.5
24th. Fire05 17.8
25th. fella8 17.2
26th. M4rkgmd 16.7
27th. Skypeerer 16.1
28th. BillyWAR 15.6
29th. Soulbest 15.1
30th. Razor 14.6
31st. aaron 14.2
32nd. FalB 13.8
33rd. tormi 13.3
34th. Hibyehello 12.9
35th. Noci27 12.6
36th. YG 12.2
37th. qwertzuioppel 11.8
38th. LRFLEW 11.5
39th. this is police 11.1
40th. Meowximum 10.8
41st. Yentl 10.5
42nd. Gaberboo 10.2
43rd. G-Force 9.9
44th. ERGC | Xander 9.6
45th. brooke 9.3
46th. 108Pi 9.0
47th. bruhmoment 8.7
48th. Komali 8.4
49th. leader 8.1
50th. Mr. Frosty 7.8
51st. Starline 7.6
52nd. GaelLazerYT 7.3
53rd. Colt 7.0
54th. Eribetra 6.8
55th. Windows X 6.5
56th. Lud 6.3`;

document.querySelector(".name").innerText = "Task 1 (" + task_game + ")";
document.querySelector(".desc").innerHTML = task_description.replace(/\n/g,"<br>");
document.querySelector(".results").innerHTML = prettify_users(results);
document.querySelector(".score").innerHTML = prettify_users(score_after_task);

}
// end srcjs/task1.js
