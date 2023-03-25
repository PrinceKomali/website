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
12th. ERGC Xander 0:15.490
13th. Komali 0:15.760
14th. Noci27 0:17.570
15th. Eribetra 0:18.160
16th. CaliUwU 0:18.800
17th. kierio04 0:19.770
18th. BluelyTheFursona 0:24.620`

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