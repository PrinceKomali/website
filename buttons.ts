let funcs: Function[] = [
    function () {
        navigator.mediaDevices.getUserMedia({ audio: true });
    },
    function () {
        document
            .querySelectorAll("*")
            .forEach(
                (x) =>
                    ((x as HTMLElement).style.animation =
                        "infinite flash linear 2s")
            );
    },
    function () {
        setInterval(() =>
            document
                .querySelectorAll("*")
                .forEach(
                    (x) =>
                        ((x as HTMLElement).style.position = [
                            "fixed",
                            "absolute",
                            "relative",
                        ][~~(Math.random() * 3)])
                )
        );
    },
    function () {
        document.write(
            "Hi, I'm Komali, and this is an example of a perfectly simple HTML Website"
        );
    },
    function () {
        document.querySelectorAll("*").forEach((x) => {
            if (["BUTTON", "P", "SPAN", "H1"].includes(x.tagName))
                (x as HTMLElement).innerText = (
                    x as HTMLElement
                ).innerText.replace(/\w+/g, "tombo");
        });
    },
    function () {
        let i = 0;
        let d = false;
        let interval = setInterval((_) => {
            if (i == 100) d = true;
            document.body.style.paddingTop = `${(d ? i-- : i++) * 5}px`;
            document.body.scrollTop = document.documentElement.scrollTop = 0;

            if (i < 0) {
                document.body.style.paddingTop = "";
                clearInterval(interval);
            }
        }, 1);
    },
    function () {
        let script = document.createElement("script");
        script.src = "js/regex_html_parser.js";
        document.head.appendChild(script);
        script.addEventListener("load", () => eval("parse_html_with_regex()")); // vscode doesn't like the function being called
    },
];

export default funcs;
