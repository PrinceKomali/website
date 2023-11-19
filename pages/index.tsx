import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.scss";

// import texture from "background_images/texture_nobg.png";
import texture from "../../../Pictures/wallpapers/wallpaper_tex.png";
import amalgamation_icon from "amalgamation.png";
import src_icon from "src.png";
import il_icon from "ils.png";

import lior from "lior.png";
import puperger from "puper.png";

import Meta from "components/meta";
import Flag from "components/flag";
import Project from "components/project";
import Person from "components/person";
// import TotKCountdown, { start_totk_countdown } from "components/totk";
import ServerStatus from "components/status";

import funcs from "buttons";

export default function Home({}) {
    function l(e) {
        e.preventDefault();
        console.log("A");
    }

    // l({preventDefault:_=>_});
    return (
        <div className={styles.container}>
            <Head>
                <title>Komali's Website</title>
                <link rel="icon" href="favicon.ico" />
                <Meta />
            </Head>
            <div className={styles.background}>
                <div className={styles.background_color}></div>
                <div
                    className={styles.texture}
                    style={{
                        background: `url(${texture.src}) repeat`,
                    }}
                ></div>
            </div>
            <main className={styles.main}>
                {/* <div className={styles.social}>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 496 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                </div> */}
                <h1 className={styles.title}>
                    <span className={styles.big}>Hi!</span> I'm Komali
                </h1>
                <p>
                    Your average nerd, coming to you from Tennessee,{" "}
                    <Flag code="us" />. I'm a freshman Software Engineering major, and I like programming, geography, and most
                    computer/robotics stuff. I did my first Breath of the Wild IL speedrun in March of 2019 and have been running it on and off ever since. I also play other games such as Tears of the Kingdom, Terraria, Skyrim, etc., and routinely enter Super Mario 64 TAS Competitions (though I'm not very good at them). My favorite programming languages are{" "}
                    <span
                        style={{
                            fontWeight: "bold",
                            color: "#ba595e",
                        }}
                    >
                        D
                    </span>{" "}
                    and{" "}
                    <span
                        style={{
                            fontWeight: "bold",
                            color: "#f1e05a",
                        }}
                    >
                        JavaScript
                    </span>
                    . You can find my specs{" "}
                    <a
                        className={styles.link}
                        href={"/specs"}
                        target={"_blank"}
                    >
                        here
                    </a>
                    .
                    {/* <div style={{
                        display: "block",
                        textAlign: "center"
                    }}>
                        
                    </div> */}
                    <hr />
                    <h1 className={styles.subtitle}>Projects</h1>
                    <div>
                        <Project
                            name={"IL Timer"}
                            href={"https://timer.komali.dev"}
                            image={"https://timer.komali.dev/favicon.png"}
                            langs={["Svelte", "SCSS", "JavaScript", "HTML"]}
                            round={true}
                        />
                        <Project
                            name={"Islandle"}
                            href={"https://islandle.komali.dev"}
                            image={
                                "https://islandle.komali.dev/favicons/favicon.png"
                            }
                            langs={["JavaScript", "HTML", "Python"]}
                            round={false}
                        />
                        <Project
                            name={"Worldle Unlimited"}
                            href={"https://worldleunlimited.komali.dev/"}
                            image={
                                "https://worldleunlimited.komali.dev/logo192.png"
                            }
                            langs={["TypeScript", "HTML", "CSS"]}
                            round={false}
                        />
                        <Project
                            name={"Multi-Game TAS Comp"}
                            href={"/mgtc"}
                            image={"/mgtc/icon.png"}
                            langs={["Shell", "HTML", "JavaScript"]}
                            round={true}
                        />
                        <Project
                            name={"Kib"}
                            href={"https://github.com/PrinceKomali/kib"}
                            image={"d.png"}
                            langs={["Makefile", "D"]}
                            round={true}
                        />
                        <Project
                            name={"flags.komali.dev"}
                            href={"https://flags.komali.dev"}
                            image={"ca-qc.png"}
                            langs={["Shell", "JavaScript", "HTML"]}
                            round={true}
                        />
                        <Project
                            name={"Autowiggler"}
                            href={"/autowiggler"}
                            image={"/autowiggler/logo.png"}
                            langs={["Python"]}
                            round={true}
                        />
                        <Project
                            name={"Toaster's Challenge"}
                            href={"/toasterwars"}
                            image={"/toasterwars/toasterscat.jpg"}
                            langs={["HTML", "JavaScript"]}
                            round={true}
                        />
                        <Project
                            name={"Hyrule Bike Challenge"}
                            href={"/hbc"}
                            image={"/hbc/icon.png"}
                            langs={["HTML"]}
                            round={true}
                        />
                        <Project
                            name={"The Amalgamation"}
                            href={
                                "https://github.com/PrinceKomali/amalgamation"
                            }
                            image={amalgamation_icon.src}
                            langs={[
                                "Makefile",
                                "Lua",
                                "Crystal",
                                "Perl",
                                "D",
                                "Python",
                                "Ruby",
                                "LLVM",
                                "Go",
                                "Zig",
                                "Objective-C++",
                                "Haskell",
                                "Fortran",
                                "Objective-C",
                                "C++",
                                "Swift",
                                "JavaScript",
                                "C",
                                "Nim",
                                "Rust",
                                "V",
                                "Haxe"
                            ]} // oops
                            round={true}
                        />
                        <Project
                            name="IL WR Counts"
                            href="wrs"
                            image={il_icon.src}
                            langs={["Svelte", "SCSS", "HTML", "JavaScript"]}
                        />
                        <Project
                            name="Verification"
                            href="https://verification.komali.dev"
                            image={src_icon.src}
                            langs={["JavaScript", "HTML"]}
                        />
                    </div>
                    <hr />
                    <h1 className={styles.subtitle}>Blogs and Such</h1>
                    <p>
                        {"\u2022 "}{" "}
                        <a
                            className={styles.link}
                            href={"/blogs/haskell"}
                            target={"_blank"}
                        >
                            Linking Haskell with C: The Wrong Way
                        </a>
                    </p>
                    <hr />
                    <h1 className={styles.subtitle}>Cool People</h1>
                    <Person
                        name="Peri"
                        href="https://periwinkle.sh"
                        image="https://periwinkle.sh/favicon.png"
                        round={false}
                        color="rgb(117, 88, 162)"
                    />
                    <Person
                        name="Puperger"
                        href="https://puperger.github.io"
                        image={puperger.src}
                        round={true}
                        color="rgb(0, 255, 192)"
                    />
                    <Person
                        name="Lior"
                        href="https://underscore.wtf"
                        image={lior.src}
                        round={true}
                        color="rgb(240, 248, 255)"
                    />
                    <hr />
                    <h1 className={styles.subtitle}>
                        API{" "}
                        <span style={{ fontSize: "0.5em" }}>
                            (may or may not work)
                        </span>
                    </h1>
                    All endpoints are selfhosted at{" "}
                    <a href="https://api.komali.dev">
                        <code className={styles.code}>
                            https://api.komali.dev
                        </code>
                    </a>{" "}
                    from an old Dell on my bookshelf. Don't go crazy with it,
                    alright?
                    <br />
                    <div style={{ marginTop: "1em" }}>
                        Server Status: <ServerStatus />
                    </div>
                    <br />
                    <table className={styles.table}>
                        <tr>
                            <th className={styles.endp}>Endpoint</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>
                                <code className={styles.code}>/hi</code>
                            </td>
                            <td>Returns "hi" as a JSON (test endpoint)</td>
                        </tr>
                        <tr>
                            <td>
                                <code className={styles.code}>/dl</code>
                            </td>
                            <td>
                                Redirects to the raw video for the
                                Youtube/Twitter URL specified with{" "}
                                <code className={styles.code}>
                                    ?url={"{url}"}
                                </code>
                                (Twitch is broken)
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code className={styles.code}>/ils</code>
                            </td>
                            <td>
                                Returns the BotW/Totk IL leaderboard as a JSON,
                                updated hourly. Specify{" "}
                                <code className={styles.code}>
                                    ?mode={"[botw, totk, all]"}
                                </code>{" "}
                                to select game.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code className={styles.code}>/k2l</code>
                            </td>
                            <td>
                                Prints Stella to your terminal (add{" "}
                                <code className={styles.code}>?html=1</code> for
                                an HTML version)
                            </td>
                        </tr>
                    </table>
                    <hr />
                    <h1 className={styles.subtitle}>Random Buttons</h1>
                    <button onClick={() => funcs[0]()}>Mic</button>
                    <button onClick={() => funcs[1]()}>Yes</button>
                    <button onClick={() => funcs[2]()}>Break Website</button>
                    <button onClick={() => funcs[3]()}>Fix Website</button>
                    <button onClick={() => funcs[4]()}>tombo</button>
                    <button onClick={() => funcs[5]()}>Skew Bounce</button>
                    <button onClick={() => funcs[6]()}>
                        Parse HTML (regex method)
                    </button>
                    {/* <hr /> <TotKCountdown /> */}{" "}
                    {/* what do i put here now */}
                </p>
            </main>
        </div>
    );
}
