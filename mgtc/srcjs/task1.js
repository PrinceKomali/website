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