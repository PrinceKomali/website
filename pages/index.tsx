import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.scss";

import texture from "background_images/texture_nobg.png";
import amalgamation_icon from "amalgamation.png";

import Meta from "components/meta";
import Flag from "components/flag";
import Project from "components/project";
import Person from "components/person";
import TotKCountdown, { start_totk_countdown } from "components/totk";

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
                <h1 className={styles.title}>
                    <span className={styles.big}>Hi!</span> I'm Komali
                </h1>
                <p>
                    Your average nerd, coming to you from Tennessee,{" "}
                    <Flag code="us" />. I like programming, geography, and most
                    computer/robotics stuff, and have been speedrunning Breath
                    of the Wild for about 4 years. I also like other games like
                    Super Mario 64, Terraria, and other Zelda games, and my
                    favorite languages are{" "}
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
                    <hr className={styles.hr} />
                    <h1 className={styles.subtitle}>Projects</h1>
                    <div>
                        <Project
                            name={"IL Timer"}
                            href={"BotW-IL-Timer"}
                            image={"timer.png"}
                            langs={["HTML", "JavaScript"]}
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
                            ]} // oops
                            round={true}
                        />
                    </div>
                    <hr className={styles.hr} />
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
                    <hr className={styles.hr} />
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
                        image="puper.png"
                        round={true}
                        color="rgb(0, 255, 192)"
                    />
                    <Person
                        name="Lior"
                        href="https://underscore.wtf"
                        image="lior.png"
                        round={true}
                        color="rgb(240, 248, 255)"
                    />
                    <hr className={styles.hr} />
                    <TotKCountdown />
                </p>
            </main>
        </div>
    );
}
