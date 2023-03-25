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
5th. BillyWar 0:19.010
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