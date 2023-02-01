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