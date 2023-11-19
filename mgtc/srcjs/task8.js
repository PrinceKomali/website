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
