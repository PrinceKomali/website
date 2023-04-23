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
96th. LeonGamer1707 6.7
97th. Lud 6.3 `;

document.querySelector(".name").innerText = "Task 5 (" + task_game + ")";
document.querySelector(".desc").innerHTML = task_description.replace(/\n/g,"<br>");
document.querySelector(".results").innerHTML = prettify_users(results);
document.querySelector(".score").innerHTML = prettify_users(score_after_task);

}