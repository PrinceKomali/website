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
77th. DanPark 15.1
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
