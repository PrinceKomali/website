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
select.onchange = function () {
    load_task(parseInt(select.value.split(" ").pop()))
}
function load_task(n) {
    // I could use eval but nah
    switch(n) {
        case 1:
            task_1();
            break;
        case 2:
            task_2();
            break;
        case 3:
            task_3();
            break;
        case 4:
            task_4();
            break;
        case 5:
            task_5();
            break;
        case 6:
            task_6();
            break;
        case 7:
            task_7();
            break;
	case 8:
	    task_8();
	    break;
        case 9:
            task_9();
            break;
    }
}

// end srcjs/index.js
// start srcjs/num_tasks.js
function num_tasks() { return 9; }

// end srcjs/num_tasks.js
// start srcjs/people.js
function get_people() {
    return [
        { name: "ERGC | Xander", roles: ["SMG", "SM64"] },
        { name: "Adeal", roles: ["SM64DS", "SM64"] },
        { name: "Chunk", roles: ["BfBB"] },
        { name: "Burpman", roles: ["Trackmania"] },
        { name: "Arkes", roles: ["Trackmania"] },
        { name: "Arthur - GT", roles: ["MKWii"] },
        { name: "ATG", roles: [] },
        { name: "averge11", roles: ["SMB1/2J", "Red Ball"] },
        { name: "benjae", roles: ["Trackmania", "Minecraft"] },
        { name: "BikerBones", roles: ["SM64DS", "BfBB", "SM64"] },
        { name: "BillyWAR", roles: ["SMG", "SM64"] },
        { name: "Booshi", roles: ["MKWii"] },
        { name: "Brokami", roles: ["SM64"] },
        { name: "Carl-bot", roles: ["carl-bot"] },
        { name: "Citrinitas", roles: ["MKWii"] },
        { name: "cookievm", roles: ["MKWii", "SMG", "Minecraft"] },
        { name: "Crackhex", roles: ["SM64"] },
        { name: "d3rpybi11z", roles: [] },
        { name: "darthfrongo", roles: ["BfBB"] },
        { name: "DavidYogi", roles: ["BfBB"] },
        { name: "DwainiumB", roles: ["MKWii"] },
        { name: "Eribetra", roles: ["SM64"] },
        { name: "Experge25A", roles: ["SM64"] },
        { name: "FallBackITA27", roles: ["MKWii"] },
        { name: "Gaberboo", roles: ["MKWii"] },
        { name: "Gaminator", roles: ["Red Ball"] },
        { name: "GlitchGod", roles: ["SM64"] },
        { name: "glug27", roles: [] },
        { name: "Gryzak", roles: ["SMB1/2J", "SM64"] },
        { name: "HGFRINK27", roles: [] },
        { name: "hoogachakka", roles: ["SM64DS"] },
        { name: "Idonthaveagun", roles: [] },
        { name: "JRTRCT", roles: [] },
        { name: "Jsap", roles: ["Trackmania"] },
        { name: "KaiMK", roles: ["MKWii"] },
        { name: "Kim", roles: ["Trackmania"] },
        { name: "Komali", roles: ["SM64"] },
        { name: "LAze", roles: [] },
        { name: "leader", roles: ["MKWii", "Trackmania", "Red Ball"] },
        { name: "LirWm", roles: ["SM64"] },
        { name: "Lud", roles: ["Minecraft"] },
        { name: "maB_", roles: ["Trackmania"] },
        { name: "Malleo", roles: ["MKWii"] },
        { name: "Maximiliano", roles: ["MKWii"] },
        { name: "Memphote1246", roles: [] },
        { name: "Meowximum", roles: ["SM64"] },
        { name: "Miku", roles: ["Trackmania"] },
        { name: "mine_pvpkill", roles: ["MKWii", "Minecraft"] },
        { name: "Minty", roles: ["SM64"] },
        { name: "Mr. Frosty", roles: ["Red Ball"] },
        { name: "Noah-willy", roles: ["MKWii"] },
        { name: "Noci27", roles: ["SM64"] },
        { name: "NOKKY", roles: ["MKWii"] },
        { name: "OliverSR", roles: ["Minecraft"] },
        { name: "MCPfannkuchenYT", roles: ["Minecraft"] },
        { name: "Pearce", roles: [] },
        { name: "Poguin", roles: ["Red Ball"] },
        { name: "Rewan Demontay", roles: [] },
        { name: "Rogue", roles: ["MKWii"] },
        { name: "sear", roles: ["MKWii", "SMB1/2J", "SM64"] },
        { name: "ShadoXFM", roles: ["SM64"] },
        { name: "Shweetz", roles: ["Trackmania"] },
        { name: "Skypeerer", roles: ["MKWii", "BfBB", "SMG"] },
        { name: "Sonk", roles: [] },
        { name: "Splooze", roles: [] },
        { name: "Stuntlover", roles: ["Trackmania"] },
        { name: "threadd", roles: ["Trackmania"] },
        { name: "UsernamesAreHard", roles: [] },
        { name: "vabold", roles: ["MKWii"] },
        { name: "Wade7", roles: ["SM64"] },
        { name: "warmCabin", roles: [] },
        { name: "xLeLucaus", roles: [] },
        { name: "xnikmkw", roles: ["MKWii"] },
        { name: "Yoshi", roles: ["MKWii", "SMB1/2J"] },
        { name: "Zyon", roles: ["SM64"] },
        { name: "小貓與蜜糖", roles: [] },
        { name: "Mizumaririn", roles: ["SMB1/2J", "SM64"] },
        { name: "!Hibyehello", roles: ["MKWii"] },
        { name: "108Pi", roles: ["SMB1/2J"] },
        { name: "??????", roles: ["MKWii"] },
        { name: "Alexpalix1", roles: ["SM64"] },
        { name: "AlmostTWD98»", roles: ["MKWii", "SM64"] },
        { name: "Alpha97", roles: ["SM64"] },
        { name: "ancient", roles: ["MKWii"] },
        { name: "ashggg", roles: [] },
        { name: "Aston", roles: ["Minecraft"] },
        { name: "AStrongGuy", roles: ["SM64"] },
        { name: "Aylx", roles: ["MKWii"] },
        { name: "Battery", roles: ["SM64"] },
        { name: "BirdBanana", roles: ["Red Ball", "SM64"] },
        { name: "Blazethe6", roles: [] },
        { name: "bobbybob", roles: ["SM64DS"] },
        { name: "Broxzier", roles: [] },
        { name: "bruhmoment", roles: ["SMB1/2J"] },
        { name: "Cabi", roles: ["SM64DS", "MKWii", "SM64"] },
        { name: "CHARL1E", roles: ["MKWii"] },
        { name: "chbld", roles: ["SMB1/2J"] },
        { name: "Chocolatemilk", roles: [] },
        { name: "chriss", roles: ["MKWii"] },
        { name: "combo_pig38 alt", roles: [] },
        { name: "Cookie Eater", roles: ["Red Ball"] },
        { name: "Coolestkid555", roles: [] },
        { name: "CrashKenny", roles: [] },
        { name: "CrizpyCheese", roles: ["Trackmania"] },
        { name: "cryptanalyst", roles: [] },
        { name: "César", roles: ["MKWii"] },
        { name: "DanPark/DeRockProject", roles: ["SMG", "SM64"] },
        { name: "Dark-Crystal", roles: ["SM64"] },
        { name: "DarkNight3141 (Superdavo0001)", roles: ["SM64"] },
        { name: "DashQC", roles: ["MKWii"] },
        { name: "deleted", roles: [] },
        { name: "DelphiX", roles: ["SMB1/2J"] },
        { name: "Dyllon Stejakoski", roles: ["SM64"] },
        { name: "Ejay B", roles: ["MKWii"] },
        { name: "emoyosh", roles: [] },
        { name: "ErGinger", roles: [] },
        { name: "Euler's Number", roles: [] },
        { name: "exopta", roles: [] },
        { name: "faizthemfsurprise", roles: [] },
        { name: "FazDag", roles: ["SM64"] },
        { name: "FeijoadaMolhada", roles: ["SM64"] },
        { name: "fella8", roles: ["SMB1/2J"] },
        { name: "fernandothehorse", roles: [] },
        { name: "monion", roles: ["MKWii"] },
        { name: "FireBreather", roles: ["SM64"] },
        { name: "flurry", roles: ["MKWii"] },
        { name: "Frame", roles: ["SM64"] },
        { name: "FriendsWithFun", roles: ["MKWii"] },
        { name: "galoomba", roles: ["SM64"] },
        { name: "Hl M0M", roles: [] },
        { name: "Iam0", roles: [] },
        { name: "Ianwubby", roles: [] },
        { name: "jcplay15", roles: [] },
        { name: "Jeffitus", roles: ["SMB1/2J"] },
        { name: "Johnelway76", roles: ["SM64"] },
        { name: "Jthespedcuber", roles: [] },
        { name: "Kannolotl", roles: ["Minecraft", "SM64"] },
        { name: "kierio04", roles: ["MKWii", "SMB1/2J", "SM64"] },
        { name: "[TAS] - λρ◆NJA", roles: ["MKWii"] },
        { name: "kristian", roles: [] },
        { name: "Ktas", roles: [] },
        { name: "LaseyApow", roles: ["SM64"] },
        { name: "Leon_green", roles: ["MKWii", "Minecraft"] },
        { name: "LeonGamer_real", roles: ["SM64"] },
        { name: "K1ngGr33n", roles: ["SM64"] },
        { name: "LetsGoAway", roles: ["SM64"] },
        { name: "lordmagecar", roles: [] },
        { name: "LoResEvil", roles: [] },
        { name: "LRFLEW", roles: ["SM64"] },
        { name: "LSLees_", roles: ["BfBB"] },
        { name: "Lukalyc", roles: [] },
        { name: "M4rkgmd", roles: ["MKWii"] },
        { name: "Madghostek", roles: ["SM64"] },
        { name: "MaG_NITud3", roles: ["Minecraft"] },
        { name: "mcw4v3-x", roles: [] },
        { name: "MGMLeo", roles: [] },
        { name: "mkwLuke", roles: ["MKWii"] },
        { name: "mnmcat", roles: [] },
        { name: "MonsterDruide1", roles: [] },
        { name: "Mr.Wolf2007yrs", roles: [] },
        { name: "Nerdician", roles: ["SM64"] },
        { name: "novego", roles: ["Red Ball"] },
        { name: "nshade_", roles: [] },
        { name: "Okopatie", roles: [] },
        { name: "p_yoshi", roles: ["SM64DS"] },
        { name: "param_r06", roles: [] },
        { name: "Patinho", roles: [] },
        { name: "PCK", roles: [] },
        { name: "PurdyKillsYou", roles: [] },
        { name: "PurpleJuiceBox", roles: ["Red Ball", "SM64"] },
        { name: "Pyraminxstars", roles: ["MKWii"] },
        { name: "queenbea", roles: ["Red Ball"] },
        { name: "Rayman Omega Player", roles: [] },
        { name: "Razor", roles: [] },
        { name: "Really_Tall", roles: ["SM64DS"] },
        { name: "reiner", roles: ["MKWii"] },
        { name: "RepressedButton", roles: [] },
        { name: "RMED24", roles: ["MKWii"] },
        { name: "RoBoBoB", roles: [] },
        { name: "RS", roles: ["MKWii"] },
        { name: "RSW", roles: ["SM64"] },
        { name: "RSw", roles: ["SM64"] },
        { name: "ruadath", roles: [] },
        { name: "Rxser", roles: [] },
        { name: "Ryzonno", roles: ["SM64"] },
        { name: "SadEgg", roles: ["MKWii", "SMG", "Minecraft"] },
        { name: "SageKitten", roles: ["Red Ball"] },
        { name: "Scribble", roles: ["Minecraft"] },
        { name: "Shadow64", roles: [] },
        { name: "shatterdpixel", roles: [] },
        { name: "slither", roles: ["SMB1/2J", "SM64"] },
        { name: "Smiley", roles: ["BfBB"] },
        { name: "Sniperlol", roles: ["MKWii"] },
        { name: "Snowookis", roles: [] },
        { name: "Soulbest", roles: ["Minecraft"] },
        { name: "Spear960", roles: ["MKWii"] },
        { name: "Speedrun", roles: [] },
        { name: "Sqidzilla", roles: [] },
        { name: "Sreekar", roles: ["MKWii"] },
        { name: "Starline", roles: ["Red Ball"] },
        { name: "Superemcow", roles: [] },
        { name: "SuperM789", roles: ["SM64"] },
        { name: "Tets", roles: [] },
        { name: "ThatsSlick", roles: ["MKWii"] },
        { name: "The Tactical TASer", roles: ["MKWii"] },
        { name: "TheGreenPig321", roles: ["MKWii", "Minecraft"] },
        { name: "TheSecondTry (luigidasonic)", roles: ["SM64"] },
        { name: "this is police", roles: ["MKWii"] },
        { name: "Tillerson", roles: ["Minecraft"] },
        { name: "tjk", roles: ["SM64"] },
        { name: "Tomothy", roles: ["MKWii"] },
        { name: "Tonjiru", roles: [] },
        { name: "Tonkao87", roles: ["MKWii"] },
        { name: "ToogsX", roles: ["SMG"] },
        { name: "tormi", roles: ["MKWii"] },
        { name: "Unease", roles: ["Minecraft"] },
        { name: "usernameispassword", roles: ["SMG"] },
        { name: "Vbhnkl", roles: ["SM64"] },
        { name: "Vexxter", roles: [] },
        { name: "VTMagno", roles: ["SM64DS"] },
        { name: "Windows X", roles: ["SMB1/2J", "SM64"] },
        { name: "Wizardo", roles: ["BfBB"] },
        { name: "WowYouro", roles: ["Red Ball"] },
        { name: "YellowSkarmory", roles: [] },
        { name: "Yentl", roles: ["MKWii"] },
        { name: "yesno", roles: [] },
        { name: "Zappg", roles: ["MKWii"] },
        { name: "zcarp7220", roles: [] },
        { name: "Zerolin (nathan10nathan)", roles: ["SM64"] },
        { name: "Spacewhale", roles: ["MKWii"] },
        { name: "thomas", roles: ["MKWii"] },
        { name: "Jellopuff", roles: ["MKWii"] },
        { name: "CampbellMop", roles: ["MKWii"] },
        { name: "DashQC", roles: ["MKWii"] },
        { name: "Marth", roles: ["MKWii"] },
        { name: "G-Force", roles: ["MKWii"] },
        { name: "brooke", roles: ["MKWii"] },
        { name: "AlmostTWD98", roles: ["MKWii"] },
        { name: "FalB", roles: ["MKWii"] },
        { name: "GaelLazerYT", roles: ["MKWii"] },
        { name: "Colt", roles: ["MKWii"] },
        { name: "aaron", roles: ["MKWii"] },
        { name: "Firefanged", roles: ["MKWii"] },
        { name: "Sparky", roles: ["MKWii"] },
        { name: "Fire05", roles: ["MKWii"] },
        { name: "marvus", roles: ["MKWii"] },
        { name: "CCB", roles: ["MKWii"] },
        { name: "Hibyehello", roles: ["MKWii"] },
        { name: "DELETE_CLUB", roles: ["Trackmania"] },
        { name: "maB-TM", roles: ["Trackmania"] },
        { name: "JaV", roles: ["Trackmania"] },
        { name: "Hordas", roles: ["Trackmania"] },
        { name: "Skycrafter", roles: ["Trackmania"] },
        { name: "Luka", roles: ["Trackmania"] },
        { name: "MufatTMF", roles: ["Trackmania"] },
        { name: "LittleD3m0", roles: ["Trackmania"] },
        { name: "ResistTM", roles: ["Trackmania"] },
        { name: "Adrien", roles: ["Trackmania"] },
        { name: "Bluely", roles: ["Red Ball", "SM64", "SM64DS", "BfBB"] },
        { name: "roblox8192", roles: ["Red Ball", "SM64"] },
        { name: "domrrred", roles: ["Red Ball"] },
        { name: "Insanejetman", roles: ["Red Ball"] },
        { name: "Taco Pinky", roles: ["Red Ball"] },
        { name: "icosahedron", roles: ["Red Ball"] },
        { name: "Vortex", roles: ["Trackmania"] },
        { name: "MPCGoD69", roles: ["Red Ball"] },
        { name: "Sqidzilla", roles: ["Red Ball", "SM64DS"] },
        { name: "Connor.P", roles: ["Red Ball"] },
        { name: "Quotatta", roles: ["BfBB"] },
        { name: "SkicoNow", roles: ["SM64DS"] },
        { name: "relievedliberty", roles: ["SM64DS"] },
        { name: "Zejoant", roles: ["SMB1/2J"] },
        { name: "AntimonySM51", roles: ["SMB1/2J"] },
        { name: "periwinkle", roles: ["SMB1/2J"] },
        { name: "SeraphmIII", roles: ["SMB1/2J"] },
        { name: "WolfAeterni", roles: ["SMB1/2J"] },
        { name: "RawEggEnjoyer", roles: ["Trackmania"] },
        { name: "OgYardel", roles: ["SMB1/2J", "Red Ball"] },
        { name: "GuanlongX", roles: ["SMB1/2J"] },
        { name: "Mr.TASer", roles: ["SMB1/2J"] },
        { name: "UwUme", roles: ["SMB1/2J"] },
        { name: "LucasWiese6", roles: ["SMB1/2J"] },
        { name: "Fritzafella", roles: ["SM64"] },
        { name: "SR", roles: ["SM64"] },
        { name: "Rush57", roles: ["SM64"] },
        { name: "wRadion", roles: ["SM64"] },
        { name: "icecream17", roles: ["SM64"] },


    ];
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
// start srcjs/task2.js
function task_2() {
    let task_game = "Red Ball";
    let task_description = `<b>Task 11</b>:

In Level 7, do all of the following in order from the savestate provided:
    
- Activate the red button
- Touch <code>jumpPlatform1</code>
- Touch star
- Touch <code>movePlatform1</code>
    
<b>Savestate</b>: <code>d16e1d39e23w5q5w7q4w7q8e6q2a13n19</code>
    
Invincibility is required. <br>Soft resetting is not allowed. <br>5 seconds will be subtracted from the end time (touching <code>movePlatform1</code>) to offset the length of the savestate.
<br>
<img class="task_img" src="/mgtc/imgs/task2_0.png">
`;
    let results = 
`1st. Starline 0:09.387
2nd. roblox8192 0:09.452
3rd. Mizumaririn 0:09.516
4th. domrrred 0:09.742
5th. InsaneJetman 0:09.806
6th. Booshi 0:09.871
6th. BirdBanana 0:09.871
6th. Taco Pinky 0:09.871
9th. Frame 0:09.903
9th. queenbea 0:09.903
11th. FeijoadaMolhada 0:09.968
12th. Cookie Eater 0:10.000
13th. Poguin 0:10.032
14th. Chunk 0:10.129
15th. Gaminator 0:10.161
15th. Mr. Frosty 0:10.161
17th. BillyWAR 0:10.290
18th. icosahedron 0:10.387
19th. 108Pi 0:10.452
20th. DashQC 0:10.484
21st. slither 0:10.516
21st. this is police 0:10.516
23rd. Soulbest 0:10.548
24th. fella8 0:10.581
24th. Vortex 0:10.581
26th. Razor 0:10.839
27th. LRFLEW 0:10.903
28th. MPCGoD69 0:10.968
29th. SageKitten 0:11.000
30th. Sqidzilla 0:11.032
31st. kierio04 0:11.194
31st. Smiley 0:11.194
31st. Zappg 0:11.194
34th. Connor.P 0:11.839
35th. Komali 0:12.452
36th. Zyon 0:12.645
37th. Windows X 0:13.032
38th. Noci27 0:13.097
39th. KaiMK 0:13.548`

    let score_after_task = 
`1st. Booshi 70.8
2nd. Mizumaririn 61.9
3rd. Starline 57.6
4th. DashQC 55.8
5th. FeijoadaMolhada 53.5
6th. Spacewhale 50.0
7th. kierio04 47.9
8th. thomas 47.3
9th. roblox8192 46.2
10th. Chunk 45.0
11th. CampbellMop 44.9
12th. Jellopuff 42.5
13th. domrrred 39.7
14th. InsaneJetman 36.9
15th. flurry 34.7
16th. BirdBanana 34.4
16th. Taco Pinky 34.4
18th. BillyWAR 33.4
19th. Pyraminxstars 33.0
20th. Zappg 32.7
21st. KaiMK 32.6
22nd. CHARL1E 31.5
23rd. fella8 30.2
24th. Marth 30.0
25th. Soulbest 28.6
26th. Frame 28.1
26th. queenbea 28.1
28th. Mr. Frosty 27.6
29th. Tomothy 27.4
30th. Razor 26.5
31st. this is police 25.9
32nd. 108Pi 25.2
33rd. César 25.1
34th. Cookie Eater 23.3
35th. LRFLEW 22.8
36th. Firefanged 22.2
37th. Poguin 22.0
38th. Sparky 21.4
39th. Rogue 20.6
40th. marvus 19.8
40th. Gaminator 19.8
42nd. Noci27 19.3
43rd. Aylx 18.5
44th. Fire05 17.8
45th. icosahedron 17.0
46th. M4rkgmd 16.7
47th. Komali 16.3
48th. Skypeerer 16.1
49th. slither 14.8
50th. aaron 14.2
51st. FalB 13.8
52nd. Windows X 13.6
53rd. tormi 13.3
54th. Hibyehello 12.9
54th. Vortex 12.9
56th. YG 12.2
57th. qwertzuioppel 11.8
58th. MPCGoD69 10.9
59th. Meowximum 10.8
60th. Yentl 10.5
61st. SageKitten 10.4
62nd. Gaberboo 10.2
63rd. Sqidzilla 10.0
64th. G-Force 9.9
65th. ERGC | Xander 9.6
66th. Smiley 9.5
67th. brooke 9.3
68th. bruhmoment 8.7
69th. Connor.P 8.3
70th. leader 8.1
71st. Zyon 7.5
72nd. GaelLazerYT 7.3
73rd. Colt 7.0
74th. Eribetra 6.8
75th. Lud 6.3`;

document.querySelector(".name").innerText = "Task 2 (" + task_game + ")";
document.querySelector(".desc").innerHTML = task_description.replace(/\n/g,"<br>");
document.querySelector(".results").innerHTML = prettify_users(results);
document.querySelector(".score").innerHTML = prettify_users(score_after_task);

}
// end srcjs/task2.js
// start srcjs/task3.js
function task_3() {
    let task_game = "Battle for Bikini Bottom";
    let task_description = `<b>Objectives</b>:
- Collect the purple shiny
- Drown at the top of the waterfall
<b>Rules</b>:
- Do not cruise boost

<b>Conditions</b>:
- Hand is enabled
- Start by Mr. Krabs
- Start as spongebob
- 6 health
- Both powers unlocked
<img class="task_img" src="/mgtc/imgs/task3_0.png">
`;
    let results = 
`1st. Chunk 0:14.330
2nd. RawEggEnjoyer 0:14.550
3rd. Smiley 0:15.200
4th. FeijoadaMolhada 0:17.500
5th. BillyWAR 0:19.010
6th. DultzyWaltzy 0:31.320
7th. Starline 0:31.550
8th. Booshi 0:32.080
9th. LRFLEW 0:32.700
10th. Eribetra 0:30.650
11th. Mizumaririn 0:40.000

DQ. Quotatta 9:99.999 [Can't be timed]`

    let score_after_task = 
`1st. Chunk 95.0
2nd. Booshi 82.8
3rd. FeijoadaMolhada 77.3
4th. Starline 71.5
5th. Mizumaririn 69.3
6th. DashQC 55.8
7th. BillyWAR 53.0
8th. Spacewhale 50.0
9th. kierio04 47.9
10th. thomas 47.3
11th. roblox8192 46.2
12th. CampbellMop 44.9
13th. Jellopuff 42.5
14th. domrrred 39.7
15th. Smiley 39.3
16th. RawEggEnjoyer 38.2
17th. InsaneJetman 36.9
18th. flurry 34.7
19th. BirdBanana 34.4
19th. Taco Pinky 34.4
21st. LRFLEW 33.1
22nd. Pyraminxstars 33.0
23rd. Zappg 32.7
24th. KaiMK 32.6
25th. CHARL1E 31.5
26th. fella8 30.2
27th. Marth 30.0
28th. Soulbest 28.6
29th. Frame 28.1
29th. queenbea 28.1
31st. Mr. Frosty 27.6
32nd. Tomothy 27.4
33rd. Razor 26.5
34th. this is police 25.9
35th. 108Pi 25.2
36th. César 25.1
37th. Cookie Eater 23.3
38th. Firefanged 22.2
39th. Poguin 22.0
40th. Sparky 21.4
41st. Rogue 20.6
42nd. marvus 19.8
42nd. Gaminator 19.8
44th. Noci27 19.3
45th. Aylx 18.5
46th. Fire05 17.8
47th. icosahedron 17.0
48th. M4rkgmd 16.7
49th. DultzyWaltzy 16.4
50th. Komali 16.3
51st. Skypeerer 16.1
52nd. Eribetra 15.5
53rd. slither 14.8
54th. aaron 14.2
55th. FalB 13.8
56th. Windows X 13.6
57th. tormi 13.3
58th. Hibyehello 12.9
58th. Vortex 12.9
60th. YG 12.2
61st. qwertzuioppel 11.8
62nd. MPCGoD69 10.9
63rd. Meowximum 10.8
64th. Yentl 10.5
65th. SageKitten 10.4
66th. Gaberboo 10.2
67th. Sqidzilla 10.0
68th. G-Force 9.9
69th. ERGC | Xander 9.6
70th. brooke 9.3
71st. bruhmoment 8.7
72nd. Connor.P 8.3
73rd. leader 8.1
74th. Zyon 7.5
75th. GaelLazerYT 7.3
76th. Colt 7.0
77th. Lud 6.3`;

document.querySelector(".name").innerText = "Task 3 (" + task_game + ")";
document.querySelector(".desc").innerHTML = task_description.replace(/\n/g,"<br>");
document.querySelector(".results").innerHTML = prettify_users(results);
document.querySelector(".score").innerHTML = prettify_users(score_after_task);

}
// end srcjs/task3.js
// start srcjs/task4.js
function task_4() {
    let task_game = "Super Mario 64 DS";
    let task_description = `<b>Task 3</b>:
In Shifting Sand Land, start by entering the warp from the cannon to the lake, end by collecting the red coin star.
The map shows you where the warp takes you and what star you must collect.

Timing starts on the first non white frame after the warp, and ends on the frame the character <b>touches the ground</b> after collecting the star.

You may <b>NOT</b> use the Wing Cap.
You are <b>NOT</b> allowed to relocate objects by cancelling Yoshi's eating action with a bounce
You are <b>NOT</b> allowed to use the warp after time starts

<img class="task_img" src="/mgtc/imgs/task4_0.png">
`;
    let results = 
`1st. Really_Tall 0:10.410
2nd. Adeal 0:11.650
3rd. Mizumaririn 0:11.950
4th. SkicoNow 0:12.220
5th. FeijoadaMolhada 0:12.690
6th. p_yoshi 0:13.320
7th. relievedliberty 0:13.360
8th. BillyWAR 0:13.420
8th. VTMagno 0:13.420
10th. LRFLEW 0:14.530
11th. Starline 0:15.390
12th. ERGC | Xander 0:15.490
13th. Komali 0:15.760
14th. Noci27 0:17.570
15th. Eribetra 0:18.160
16th. CaliUwU 0:18.800
17th. kierio04 0:19.770
18th. Bluely 0:24.620`

    let score_after_task = 
`1st. Mizumaririn 105.3
2nd. FeijoadaMolhada 104.2
3rd. Chunk 95.0
4th. Starline 85.2
5th. Booshi 82.8
6th. BillyWAR 71.6
7th. DashQC 55.8
8th. kierio04 55.5
9th. Spacewhale 50.0
9th. Really_Tall 50.0
11th. LRFLEW 48.2
12th. thomas 47.3
13th. roblox8192 46.2
14th. CampbellMop 44.9
15th. Jellopuff 42.5
16th. Adeal 42.3
17th. domrrred 39.7
18th. Smiley 39.3
19th. RawEggEnjoyer 38.2
20th. InsaneJetman 36.9
21st. flurry 34.7
22nd. BirdBanana 34.4
22nd. Taco Pinky 34.4
24th. Pyraminxstars 33.0
25th. Zappg 32.7
26th. KaiMK 32.6
27th. CHARL1E 31.5
28th. SkicoNow 31.0
29th. fella8 30.2
30th. Marth 30.0
31st. Noci27 29.6
32nd. Soulbest 28.6
33rd. Frame 28.1
33rd. queenbea 28.1
35th. Komali 27.6
35th. Mr. Frosty 27.6
37th. Tomothy 27.4
38th. Razor 26.5
39th. this is police 25.9
40th. 108Pi 25.2
41st. César 25.1
42nd. Eribetra 24.9
43rd. p_yoshi 23.6
44th. Cookie Eater 23.3
45th. Firefanged 22.2
46th. Poguin 22.0
46th. ERGC | Xander 22.0
48th. Sparky 21.4
49th. relievedliberty 20.8
50th. Rogue 20.6
51st. marvus 19.8
51st. Gaminator 19.8
53rd. VTMagno 18.6
54th. Aylx 18.5
55th. Fire05 17.8
56th. icosahedron 17.0
57th. M4rkgmd 16.7
58th. DultzyWaltzy 16.4
59th. Skypeerer 16.1
60th. slither 14.8
61st. aaron 14.2
62nd. FalB 13.8
63rd. Windows X 13.6
64th. tormi 13.3
65th. Hibyehello 12.9
65th. Vortex 12.9
67th. YG 12.2
68th. qwertzuioppel 11.8
69th. MPCGoD69 10.9
70th. Meowximum 10.8
71st. Yentl 10.5
72nd. SageKitten 10.4
73rd. Gaberboo 10.2
74th. Sqidzilla 10.0
75th. G-Force 9.9
76th. brooke 9.3
77th. bruhmoment 8.7
78th. CaliUwU 8.5
79th. Connor.P 8.3
80th. leader 8.1
81st. Zyon 7.5
82nd. GaelLazerYT 7.3
83rd. Colt 7.0
84th. Bluely 6.8
85th. Lud 6.3 `;

document.querySelector(".name").innerText = "Task 4 (" + task_game + ")";
document.querySelector(".desc").innerHTML = task_description.replace(/\n/g,"<br>");
document.querySelector(".results").innerHTML = prettify_users(results);
document.querySelector(".score").innerHTML = prettify_users(score_after_task);

}
// end srcjs/task4.js
// start srcjs/task5.js
function task_5() {
    let task_game = "Trackmania";
    let task_description = `Finish the linked map as quickly as possible.

Your TAS does not need to beat the world record.
The replay must be valid.
You are <b>NOT</b> allowed to cooperate with another player.
You are only allowed to play with a stadium car. No environment mixes. 

<img class="task_img" src="/mgtc/imgs/task5_0.png">
`;
    let results = 
`1st. CrizpyCheese 00:14.200
2nd. JaV 00:15.500
3rd. Hordas 00:24.080
4th. DELETE_CLUB 00:24.280
5th. Arkes 00:24.400
6th. Mizumaririn 00:24.480
7th. Skycrafter 00:24.500
8th. maB-TM 00:24.560
9th. Luka 00:24.630
10th. MufatTMF 00:24.640
11th. Vortex 00:24.660
12th. LittleD3m0 00:24.910
13th. Starline 00:25.110
14th. ResistTM 00:25.310
15th. BillyWAR 00:25.850
16th. FeijoadaMolhada 00:26.130
17th. LRFLEW 00:26.440
18th. Chunk 00:26.490
19th. Noci27 00:28.910
20th. LeonGamer1707 00:33.570

DQ. Adrien 9:99.999 [Run could not be played back]`

    let score_after_task = 
`1st. Mizumaririn 130.4
2nd. FeijoadaMolhada 114.0
3rd. Chunk 103.2
4th. Starline 97.9
5th. Booshi 82.8
6th. BillyWAR 82.3
7th. LRFLEW 57.2
8th. DashQC 55.8
9th. kierio04 55.5
10th. Spacewhale 50.0
10th. Really_Tall 50.0
10th. CrizpyCheese 50.0
13th. thomas 47.3
14th. roblox8192 46.2
15th. CampbellMop 44.9
16th. JaV 43.0
17th. Jellopuff 42.5
18th. Adeal 42.3
19th. domrrred 39.7
20th. Smiley 39.3
21st. RawEggEnjoyer 38.2
22nd. Hordas 37.2
23rd. Noci27 37.1
24th. InsaneJetman 36.9
25th. flurry 34.7
26th. BirdBanana 34.4
26th. Taco Pinky 34.4
28th. Pyraminxstars 33.0
29th. Zappg 32.7
30th. KaiMK 32.6
31st. DELETE_CLUB 32.4
32nd. CHARL1E 31.5
33rd. SkicoNow 31.0
34th. fella8 30.2
35th. Marth 30.0
36th. Soulbest 28.6
37th. Arkes 28.4
38th. Frame 28.1
38th. queenbea 28.1
40th. Vortex 28.0
41st. Komali 27.6
41st. Mr. Frosty 27.6
43rd. Tomothy 27.4
44th. Razor 26.5
45th. this is police 25.9
46th. 108Pi 25.2
47th. César 25.1
48th. Eribetra 24.9
49th. p_yoshi 23.6
50th. Cookie Eater 23.3
51st. Skycrafter 22.4
52nd. Firefanged 22.2
53rd. Poguin 22.0
53rd. ERGC | Xander 22.0
55th. Sparky 21.4
56th. relievedliberty 20.8
57th. Rogue 20.6
58th. maB-TM 20.1
59th. marvus 19.8
59th. Gaminator 19.8
61st. VTMagno 18.6
62nd. Aylx 18.5
63rd. Luka 18.2
64th. Fire05 17.8
65th. icosahedron 17.0
66th. M4rkgmd 16.7
67th. MufatTMF 16.5
68th. DultzyWaltzy 16.4
69th. Skypeerer 16.1
70th. slither 14.8
71st. aaron 14.2
72nd. LittleD3mo 13.8
72nd. FalB 13.8
74th. Windows X 13.6
75th. tormi 13.3
76th. Hibyehello 12.9
77th. YG 12.2
78th. qwertzuioppel 11.8
79th. ResistTM 11.7
80th. MPCGoD69 10.9
81st. Meowximum 10.8
82nd. Yentl 10.5
83rd. SageKitten 10.4
84th. Gaberboo 10.2
85th. Sqidzilla 10.0
86th. G-Force 9.9
87th. brooke 9.3
88th. bruhmoment 8.7
89th. CaliUwU 8.5
90th. Connor.P 8.3
91st. leader 8.1
92nd. Zyon 7.5
93rd. GaelLazerYT 7.3
94th. Colt 7.0
95th. Bluely 6.8
96th. LeonGame_real 6.7
97th. Lud 6.3 `;

document.querySelector(".name").innerText = "Task 5 (" + task_game + ")";
document.querySelector(".desc").innerHTML = task_description.replace(/\n/g,"<br>");
document.querySelector(".results").innerHTML = prettify_users(results);
document.querySelector(".score").innerHTML = prettify_users(score_after_task);

}
// end srcjs/task5.js
// start srcjs/task6.js
function task_6() {
    let task_game = "Super Mario Bros 1/2J";
    let task_description = `<b>Task 30</b>
Collect all power-ups, 1-ups, and all coins in level 6-1. 

There are:
- <b>2</b> powerups
- <b>1</b> 1-up
- <b>15</b> coins
- <b>2</b> multi-coin blocks, which only have to be hit once
All hidden coin blocks must be hit. 
Timing begins the first frame 400 appears at the start of the level. Timing ends the first frame the timer hits 000 after counting down after mario grabs the flagpole.`;
    let results = 
`1st. Zejoant 00:34.227
2nd. AntimonySM51 00:34.260
3rd. FeijoadaMolhada 00:34.460
4th. periwinkle 00:34.477
5th. SeraphmIII 00:34.493
6th. fella8 00:34.543
6th. slither 00:34.543
8th. WolfAeterni 00:34.726
9th. Mizumaririn 00:34.743
10th. chbld 00:34.893
11th. kierio04 00:35.109
12th. Starline 00:35.492
13th. DanPark/DeRockProject 00:35.741
13th. GuanlongX 00:35.741
15th. Mr.TASer 00:36.074
16th. BillyWAR 00:36.107
17th. LucasWiese6 00:36.939
18th. Smiley 00:37.039
19th. UwUme 00:37.722
20th. MeowSticks 00:37.738
21st. OgYardel 00:38.636
22nd. LRFLEW 00:38.836
23rd. Noci27 00:38.986
24th. Komali 00:39.119

DQ. Sqidzilla 9:99.999 [Missed coin]
DQ. Buphead 9:99.999 [Missed 2 coins and powerups]
`

    let score_after_task = 
`1st. FeijoadaMolhada 153.0
2nd. Mizumaririn 151.3
3rd. Starline 114.2
4th. Chunk 103.2
5th. BillyWAR 94.5
6th. Booshi 82.8
7th. kierio04 73.1
8th. LRFLEW 65.1
9th. fella8 58.0
10th. DashQC 55.8
11th. Spacewhale 50.0
11th. Really_Tall 50.0
11th. CrizpyCheese 50.0
11th. Zejoant 50.0
15th. Smiley 49.9
16th. thomas 47.3
17th. roblox8192 46.2
18th. CampbellMop 44.9
19th. Noci27 44.3
20th. AntimonySM51 44.1
21st. JaV 43.0
22nd. slither 42.6
23rd. Jellopuff 42.5
24th. Adeal 42.3
25th. domrrred 39.7
26th. RawEggEnjoyer 38.2
27th. Hordas 37.2
28th. InsaneJetman 36.9
29th. flurry 34.7
29th. periwinkle 34.7
31st. BirdBanana 34.4
31st. Taco Pinky 34.4
33rd. Komali 34.2
34th. Pyraminxstars 33.0
35th. Zappg 32.7
36th. KaiMK 32.6
37th. DELETE_CLUB 32.4
38th. CHARL1E 31.5
39th. SkicoNow 31.0
39th. SeraphmIII 31.0
41st. Marth 30.0
42nd. Soulbest 28.6
43rd. Arkes 28.4
44th. Frame 28.1
44th. queenbea 28.1
46th. Vortex 28.0
47th. Mr. Frosty 27.6
48th. Tomothy 27.4
49th. Razor 26.5
50th. this is police 25.9
51st. 108Pi 25.2
52nd. César 25.1
53rd. Eribetra 24.9
54th. p_yoshi 23.6
55th. Cookie Eater 23.3
56th. WolfAeterni 22.8
57th. Skycrafter 22.4
58th. Firefanged 22.2
59th. Poguin 22.0
59th. ERGC | Xander 22.0
61st. Sparky 21.4
62nd. relievedliberty 20.8
63rd. Rogue 20.6
64th. maB-TM 20.1
65th. marvus 19.8
65th. Gaminator 19.8
67th. chbld 19.1
68th. VTMagno 18.6
69th. Aylx 18.5
70th. Luka 18.2
71st. Fire05 17.8
72nd. icosahedron 17.0
73rd. M4rkgmd 16.7
74th. MufatTMF 16.5
75th. DultzyWaltzy 16.4
76th. Skypeerer 16.1
77th. DanPark/DeRockProject 15.1
77th. GuanlongX 15.1
79th. aaron 14.2
80th. LittleD3mo 13.8
80th. FalB 13.8
82nd. Windows X 13.6
83rd. tormi 13.3
84th. Mr.TASer 13.1
85th. Hibyehello 12.9
86th. YG 12.2
87th. qwertzuioppel 11.8
88th. ResistTM 11.7
89th. LucasW 11.4
90th. MPCGoD69 10.9
91st. Meowximum 10.8
92nd. Yentl 10.5
93rd. SageKitten 10.4
94th. Gaberboo 10.2
95th. Sqidzilla 10.0
96th. G-Force 9.9
96th. UwUme 9.9
98th. brooke 9.3
99th. MeowSticks 9.2
100th. bruhmoment 8.7
101st. CaliUwU 8.5
101st. OgYardel 8.5
103rd. Connor.P 8.3
104th. leader 8.1
105th. Zyon 7.5
106th. GaelLazerYT 7.3
107th. Colt 7.0
108th. Bluely 6.8
109th. LeonGamer1707 6.7
110th. Lud 6.3`;

document.querySelector(".name").innerText = "Task 6 (" + task_game + ")";
document.querySelector(".desc").innerHTML = task_description.replace(/\n/g,"<br>");
document.querySelector(".results").innerHTML = prettify_users(results);
document.querySelector(".score").innerHTML = prettify_users(score_after_task);

}

// end srcjs/task6.js
// start srcjs/task7.js
function task_7() {
    let task_game = "Super Mario 64";
    let task_description = `<b>Task 30</b>
In Tiny-Huge Island (tiny island), start by warping to the cork box bridge. Collect the yellow coin near the beach, then finish by collecting the star "Five Itty Bitty Secrets", which has already been spawned.

You may <b>NOT</b> BLJ.
You may <b>NOT</b> re-enter the warp.
You may <b>NOT</b> exit the course, or warp to the large island.

Timing starts on the first frame Mario is able to move, and ends when you see Mario celebrate after collecting the star.
You must use the mandatory savestate provided.

<img class="task_img" src="/mgtc/imgs/task7_0.png">`;
    let results = 
`1st. FeijoadaMolhada 00:08.500
2nd. DanPark/DeRockProject 00:08.700
3rd. Marbler 00:09.133
4th. ERGC | Xander 00:09.300
4th. galoomba 00:09.300
6th. tjk 00:09.433
7th. Brokami 00:09.533
8th. SR 00:09.600
8th. RSw 00:09.600
8th. Frame 00:09.600
11th. Wizardo 00:09.633
12th. Crackhex 00:09.667
13th. Fritzafella 00:09.800
13th. Noci27 00:09.800
15th. FireBreather 00:09.833
16th. Rush57 00:09.900
17th. Minty 00:09.967
18th. slither 00:10.100
19th. Meowximum 00:10.333
20th. wRadion 00:10.600
20th. Mizumaririn 00:10.600
22nd. BillyWAR 00:10.700
23rd. Adeal 00:10.800
24th. kierio04 00:10.833
25th. LRFLEW 00:10.967
26th. Komali 00:11.000
27th. elbertito 00:11.100
28th. Starline 00:11.367
29th. Zyon 00:11.633
30th. icecream17 00:12.500
31st. Inktest 00:12.533
32nd. K1ngGr33n 00:14.067
33rd. Vendo 00:15.100
34th. Windows X 00:15.600
35th. Gryzak 00:15.667
36th. lazycaps 00:16.000
37th. AlmostTWD98» 00:20.200
38th. Npenplz 00:23.267

DQ. NovaGazer3 9:99.999 [Mario was BLJing]
DQ. summunkid 9:99.999 [Submitted after deadline]
`

    let score_after_task = 
`1st. FeijoadaMolhada 204.7
2nd. Mizumaririn 169.2
3rd. Starline 127.5
4th. BillyWAR 110.8
5th. Chunk 103.2
6th. kierio04 88.4
7th. Booshi 82.8
8th. LRFLEW 79.6
9th. Noci27 68.4
10th. DanPark/DeRockProject 63.9
11th. slither 61.9
12th. ERGC | Xander 61.5
13th. fella8 60.7
14th. Frame 57.7
15th. DashQC 55.8
16th. Adeal 55.5
17th. Smiley 52.3
18th. Spacewhale 50.0
18th. Really_Tall 50.0
18th. CrizpyCheese 50.0
18th. Zejoant 50.0
22nd. Komali 48.3
23rd. thomas 47.3
24th. roblox8192 46.2
25th. AntimonySM51 45.0
26th. CampbellMop 44.9
27th. JaV 43.0
28th. Jellopuff 42.5
29th. domrrred 39.7
30th. RawEggEnjoyer 38.2
31st. Hordas 37.2
32nd. InsaneJetman 36.9
33rd. periwinkle 36.8
34th. flurry 34.7
35th. BirdBanana 34.4
35th. Taco Pinky 34.4
37th. SeraphmIII 33.5
38th. Pyraminxstars 33.0
39th. Zappg 32.7
40th. KaiMK 32.6
41st. DELETE_CLUB 32.4
42nd. CHARL1E 31.5
43rd. SkicoNow 31.0
44th. Marth 30.0
45th. Soulbest 28.6
46th. Arkes 28.4
47th. queenbea 28.1
48th. Vortex 28.0
49th. Mr. Frosty 27.6
50th. Tomothy 27.4
51st. Meowximum 26.6
52nd. Razor 26.5
53rd. this is police 25.9
54th. WolfAeterni 25.7
55th. 108Pi 25.2
56th. César 25.1
57th. Eribetra 24.9
58th. p_yoshi 23.6
59th. Cookie Eater 23.3
60th. Skycrafter 22.4
61st. Firefanged 22.2
62nd. Poguin 22.0
63rd. chbld 21.9
64th. Windows X 21.5
65th. Sparky 21.4
66th. relievedliberty 20.8
67th. Rogue 20.6
68th. maB-TM 20.1
69th. marvus 19.8
69th. Gaminator 19.8
71st. VTMagno 18.6
72nd. Aylx 18.5
73rd. Luka 18.2
74th. Fire05 17.8
75th. GuanlongX 17.7
76th. icosahedron 17.0
77th. M4rkgmd 16.7
78th. MufatTMF 16.5
79th. DultzyWaltzy 16.4
80th. Skypeerer 16.1
81st. Mr.TASer 15.6
82nd. K1ngGr33n 15.5
83rd. wRadion 15.1
84th. aaron 14.2
85th. Zyon 14.0
86th. LittleD3mo 13.8
86th. LucasW 13.8
86th. FalB 13.8
89th. tormi 13.3
90th. Hibyehello 12.9
91st. UwUme 12.3
92nd. YG 12.2
93rd. qwertzuioppel 11.8
94th. ResistTM 11.7
95th. MeowSticks 11.6
96th. elbertito 11.0
97th. OgYardel 10.9
97th. MPCGoD69 10.9
99th. Yentl 10.5
100th. SageKitten 10.4
101st. Gaberboo 10.2
102nd. Sqidzilla 10.0
103rd. G-Force 9.9
104th. icecream17 9.6
105th. brooke 9.3
106th. Inktest 9.2
107th. bruhmoment 8.7
108th. CaliUwU 8.5
109th. Vendo 8.3
109th. Connor.P 8.3
111th. leader 8.1
112th. Gryzak 7.5
113th. GaelLazerYT 7.3
114th. lazycaps 7.1
115th. Colt 7.0
116th. Bluely 6.8
116th. AlmostTWD98 6.8
118th. Npenplz 6.4
119th. Lud 6.3 `;

document.querySelector(".name").innerText = "Task 7 (" + task_game + ")";
document.querySelector(".desc").innerHTML = task_description.replace(/\n/g,"<br>");
document.querySelector(".results").innerHTML = prettify_users(results);
document.querySelector(".score").innerHTML = prettify_users(score_after_task);

}

// end srcjs/task7.js
// start srcjs/task8.js
function task_8() {
    let task_game = "Super Mario Galaxy";
    let task_description = `<b>Task 2</b>
In <b>Gold Leaf Galaxy</b>, start by launching from the dandelion, spin into at least 4 of the 7 custom placed leaf bushes on the tower, and finish by grabbing the vine.

The spring to get up to the tower has been removed
The Bee Mushroom has been moved, you are allowed to collect it (but it is not required)
Spinning into a bush can be determined visually by blue sparks flying out (and entering hitlag)
You must spin into at least 4 different bushes

Timing starts precisely when <code>Memory.Player.LastJumpType == 0xD</code> and ends when <code>Memory.Mario.StateB & 0x40 == 0M/code>

<img class="task_img" src="/mgtc/imgs/task8_0.png">`;
    let results = 
`1st. dendonodon 00:15.470
2nd. PurpleSun 00:15.820
2nd. ERGC | Xander 00:15.820
4th. usernameispassword 00:16.350
5th. FeijoadaMolhada 00:16.570
6th. BillyWAR 00:18.320
7th. Mizumaririn 00:19.350
8th. ToogsX 00:23.470
9th. LRFLEW 00:26.070
10th. RSw 00:28.230

DQ. Qr1pt1k 9:99.999 [Did not complete the task]
`

    let score_after_task = 
`1st. FeijoadaMolhada 222.9
2nd. Mizumaririn 181.9
3rd. Starline 127.5
4th. BillyWAR 125.9
5th. Chunk 103.2
6th. ERGC | Xander 98.7
7th. LRFLEW 88.6
8th. kierio04 88.4
9th. Booshi 82.8
10th. Noci27 68.4
11th. DanPark/DeRockProject 63.9
12th. slither 61.9
13th. fella8 60.7
14th. Frame 57.7
15th. DashQC 55.8
16th. Adeal 55.5
17th. Smiley 52.3
18th. Spacewhale 50.0
18th. Really_Tall 50.0
18th. CrizpyCheese 50.0
18th. Zejoant 50.0
18th. dendonodon 50.0
23rd. Komali 48.3
24th. thomas 47.3
25th. roblox8192 46.2
26th. AntimonySM51 45.0
27th. CampbellMop 44.9
28th. JaV 43.0
29th. Jellopuff 42.5
30th. domrrred 39.7
31st. RawEggEnjoyer 38.2
32nd. Hordas 37.2
32nd. PurpleSun 37.2
34th. InsaneJetman 36.9
35th. periwinkle 36.8
36th. flurry 34.7
37th. BirdBanana 34.4
37th. Taco Pinky 34.4
39th. SeraphmIII 33.5
40th. Pyraminxstars 33.0
41st. Zappg 32.7
42nd. KaiMK 32.6
43rd. DELETE_CLUB 32.4
44th. CHARL1E 31.5
45th. SkicoNow 31.0
46th. Marth 30.0
47th. Soulbest 28.6
48th. Arkes 28.4
49th. queenbea 28.1
50th. Vortex 28.0
51st. Mr. Frosty 27.6
52nd. Tomothy 27.4
53rd. Meowximum 26.6
54th. Razor 26.5
55th. this is police 25.9
56th. WolfAeterni 25.7
57th. 108Pi 25.2
58th. César 25.1
59th. Eribetra 24.9
60th. p_yoshi 23.6
61st. Cookie Eater 23.3
62nd. Skycrafter 22.4
62nd. usernameispassword 22.4
64th. Firefanged 22.2
65th. Poguin 22.0
66th. chbld 21.9
67th. Windows X 21.5
68th. Sparky 21.4
69th. relievedliberty 20.8
70th. Rogue 20.6
71st. maB-TM 20.1
72nd. marvus 19.8
72nd. Gaminator 19.8
74th. VTMagno 18.6
75th. Aylx 18.5
76th. Luka 18.2
77th. Fire05 17.8
78th. GuanlongX 17.7
79th. icosahedron 17.0
80th. M4rkgmd 16.7
81st. MufatTMF 16.5
82nd. DultzyWaltzy 16.4
83rd. Skypeerer 16.1
84th. Mr.TASer 15.6
85th. K1ngGr33n 15.5
86th. wRadion 15.1
87th. aaron 14.2
88th. Zyon 14.0
89th. LittleD3mo 13.8
89th. LucasW 13.8
89th. FalB 13.8
92nd. tormi 13.3
93rd. Hibyehello 12.9
94th. UwUme 12.3
95th. YG 12.2
96th. qwertzuioppel 11.8
97th. ResistTM 11.7
98th. MeowSticks 11.6
99th. elbertito 11.0
100th. OgYardel 10.9
100th. MPCGoD69 10.9
102nd. ToogsX 10.7
103rd. Yentl 10.5
104th. SageKitten 10.4
105th. Gaberboo 10.2
106th. Sqidzilla 10.0
107th. G-Force 9.9
108th. icecream17 9.6
109th. brooke 9.3
110th. Inktest 9.2
111th. bruhmoment 8.7
112th. CaliUwU 8.5
113th. Vendo 8.3
113th. Connor.P 8.3
115th. leader 8.1
116th. Gryzak 7.5
117th. GaelLazerYT 7.3
118th. lazycaps 7.1
119th. Colt 7.0
120th. Bluely 6.8
120th. AlmostTWD98 6.8
122nd. Npenplz 6.4
123rd. Lud 6.3`;

document.querySelector(".name").innerText = "Task 8 (" + task_game + ")";
document.querySelector(".desc").innerHTML = task_description.replace(/\n/g,"<br>");
document.querySelector(".results").innerHTML = prettify_users(results);
document.querySelector(".score").innerHTML = prettify_users(score_after_task);

}

// end srcjs/task8.js
// start srcjs/task9.js
function task_9() {
    let task_game = "Minecraft";
    let task_description = `<b>TASk 4.5 - Selfie%</b>
Take one or more ingame screenshot(s) in double F5 mode of 3 subjects:
1. Of yourself wearing a fancy hat (Wearing a helmet with an armor trim or colored leather cap)
2. Of yourself, while riding an entity
3. Of yourself, being within 4 blocks distance to a hostile enemy. The enemy has to have aggro on you; passive endermen don't count. The entire face of the enemy must be visible in the photo.

Time starts after loading into the world and ends when the chat message appears, when you take your last screenshot via F2

<img class="task_img" src="/mgtc/imgs/task9_0.png">`;
    let results = 
`1st. AndrefPL 00:32.290
2nd. DefaultBTW 00:52.490
3rd. speedycube64 00:54.580
4th. Mark Lukas 00:58.360
5th. MaG_NITud3 01:00.100
6th. Komali 01:01.070
7th. pooooooooooooop 01:03.330
8th. LRFLEW 01:06.140
9th. Soulbest 01:07.260
10th. FeijoadaMolhada 01:10.500
11th. BillyWAR 01:16.340
12th. Evanlin96069 01:17.520
13th. Luna70 01:22.170
14th. the_a_person 01:27.390
15th. Julia_1439 01:43.270
16th. Scribble 05:48.500

DQ. krill 9:99.999 [Didn't take a screenshot with a mob that is <b>4</b> blocks away]
DQ. normal_zombie 9:99.999 [Spawned mobs in disallowed locations]
DQ. tonjiru_rta 9:99.999 [Spawned items in locations that are impossible]
DQ. fogipl 9:99.999 [Spawned mobs with armor which is impossible in easy difficulty]`

    let score_after_task = 
`1st. FeijoadaMolhada 236.4
2nd. Mizumaririn 181.9
3rd. BillyWAR 138.1
4th. Starline 127.5
5th. LRFLEW 105.5
6th. Chunk 103.2
7th. ERGC | Xander 98.7
8th. kierio04 88.4
9th. Booshi 82.8
10th. Noci27 68.4
11th. DanPark 63.9
12th. Komali 63.4
13th. slither 61.9
14th. fella8 60.7
15th. Frame 57.7
16th. DashQC 55.8
17th. Adeal 55.5
18th. Smiley 52.3
19th. Spacewhale 50.0
19th. Really_Tall 50.0
19th. CrizpyCheese 50.0
19th. Zejoant 50.0
19th. dendonodon 50.0
19th. andrefpl 50.0
25th. thomas 47.3
26th. roblox8192 46.2
27th. AntimonySM51 45.0
28th. CampbellMop 44.9
29th. Soulbest 43.7
30th. JaV 43.0
31st. Jellopuff 42.5
32nd. defaultbtw 41.4
33rd. domrrred 39.7
34th. RawEggEnjoyer 38.2
35th. Hordas 37.2
35th. PurpleSun 37.2
37th. InsaneJetman 36.9
38th. periwinkle 36.8
39th. flurry 34.7
39th. speedycube64 34.7
41st. BirdBanana 34.4
41st. Taco Pinky 34.4
43rd. SeraphmIII 33.5
44th. Pyraminxstars 33.0
45th. Zappg 32.7
46th. KaiMK 32.6
47th. DELETE_CLUB 32.4
48th. CHARL1E 31.5
49th. SkicoNow 31.0
50th. Marth 30.0
51st. marklukas 29.3
52nd. Arkes 28.4
53rd. queenbea 28.1
54th. Vortex 28.0
55th. Mr. Frosty 27.6
56th. Tomothy 27.4
57th. Meowximum 26.6
58th. Razor 26.5
59th. this is police 25.9
60th. WolfAeterni 25.7
61st. 108Pi 25.2
62nd. César 25.1
62nd. magnitud3 25.1
64th. Eribetra 24.9
65th. p_yoshi 23.6
66th. Cookie Eater 23.3
67th. Skycrafter 22.4
67th. usernameispassword 22.4
69th. Firefanged 22.2
70th. Poguin 22.0
71st. chbld 21.9
72nd. Windows X 21.5
73rd. Sparky 21.4
74th. relievedliberty 20.8
75th. Rogue 20.6
76th. maB-TM 20.1
77th. marvus 19.8
77th. Gaminator 19.8
79th. pooooooooooooop 19.1
80th. VTMagno 18.6
81st. Aylx 18.5
82nd. Luka 18.2
83rd. Fire05 17.8
84th. GuanlongX 17.7
85th. icosahedron 17.0
86th. M4rkgmd 16.7
87th. MufatTMF 16.5
88th. DultzyWaltzy 16.4
89th. Skypeerer 16.1
90th. Mr.TASer 15.6
91st. K1ngGr33n 15.5
92nd. wRadion 15.1
93rd. aaron 14.2
94th. Zyon 14.0
95th. LittleD3mo 13.8
95th. LucasW 13.8
95th. FalB 13.8
98th. tormi 13.3
99th. Hibyehello 12.9
100th. UwUme 12.3
101st. YG 12.2
102nd. qwertzuioppel 11.8
103rd. ResistTM 11.7
104th. MeowSticks 11.6
105th. elbertito 11.0
105th. evanlin96069 11.0
107th. OgYardel 10.9
107th. MPCGoD69 10.9
109th. ToogsX 10.7
110th. Yentl 10.5
111th. SageKitten 10.4
112th. Gaberboo 10.2
113th. Sqidzilla 10.0
114th. G-Force 9.9
114th. luna 9.9
116th. icecream17 9.6
117th. brooke 9.3
118th. Inktest 9.2
119th. the_a_person 8.8
120th. bruhmoment 8.7
121st. CaliUwU 8.5
122nd. Vendo 8.3
122nd. Connor.P 8.3
124th. leader 8.1
125th. julia_bwah 7.8
126th. Gryzak 7.5
127th. GaelLazerYT 7.3
128th. lazycaps 7.1
129th. Colt 7.0
130th. Scribble 6.9
131st. Bluely 6.8
131st. AlmostTWD98 6.8
133rd. Npenplz 6.4
134th. Lud 6.3`;

document.querySelector(".name").innerText = "Task 9 (" + task_game + ")";
document.querySelector(".desc").innerHTML = task_description.replace(/\n/g,"<br>");
document.querySelector(".results").innerHTML = prettify_users(results);
document.querySelector(".score").innerHTML = prettify_users(score_after_task);

}

// end srcjs/task9.js
