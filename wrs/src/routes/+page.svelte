<script>
    import "../styles/globals.css";
    import User from "./user.svelte";
    import Flag from "./flag.svelte";
    import { onMount } from "svelte";

    let counts = {};
    let users = {};
    let lb = {};
    let onload = async () => {
        let data = await (await fetch("https://api.komali.dev/ils")).json();
        lb = data.lb;
        let allowed = Object.keys(lb);
        for (let item of allowed) {
            for (let level of Object.keys(lb[item])) {
                for (let category of Object.keys(lb[item][level])) {
                    for (let run of lb[item][level][category].filter(
                        (x) => x.place == 1
                    )) {
                        for (let runner of run.runners) {
                            if (!users[runner])
                                users[runner] = {
                                    colors: data.players[runner].colors,
                                    location: (
                                        data.players[runner].location || ""
                                    ).split("/")[0],
                                    counts: {
                                        "Any%": 0,
                                        "No Major Glitches": 0,
                                        "100%": 0,
                                        "No Major Glitches 100%": 0,
                                        all: 0,
                                    },
                                };
                            users[runner].counts[category]++;
                            users[runner].counts.all++;
                        }
                    }
                }
            }
        }
        
        document.querySelector("#switch_All").checked = true;
    };
    let comparison = "all";
    function get_selectors() {
            [...document.querySelector(".checks").children]
                .filter((x) => x.tagName == "INPUT" && x.type == "checkbox")
                .map((x) =>
                    Object.keys(lb).find(
                        (y) =>
                            y.replace(/[% ]/g, "") ==
                            x.id.replace("switch_", "")
                    )
                );
        }
    function switch_comparison() {
        comparison = [
            "all",
            "Any%",
            "No Major Glitches",
            "100%",
            "No Major Glitches 100%",
        ][
            ["All", "Any", "NMG", "100", "NMG100"]
                .map((x) => document.querySelector("#switch_" + x).checked)
                .indexOf(true)
        ];
    }
    let nth = (n) =>
        n +
        (["st", "nd", "rd"][
            (((((n < 0 ? -n : n) + 90) % 100) - 10) % 10) - 1
        ] || "th"); // formatter doesn't like this
    let idp = (s) =>
        s
            .replace(" Shrines", "")
            .replace("Divine Beast Vah ", "")
            .replace("Great Plateau Revisit", "Obliterator")
            .replace("Stranded on ", "");
    
    onMount(onload);
</script>

<div class="container">
    <div class="background" />
    <div class="main">
        <div class="checks">
            <input class="labeled" id="switch_all_level" />
            <label for="switch_all_level">All </label>
            <input class="labeled" id="switch_none_level" />
            <label for="switch_none_level">None </label>
            {#each Object.keys(lb) as c, i}
                <input
                    class="labeled"
                    type="checkbox"
                    name="level_switch"
                    id="switch_{c.replace(/[% ]/g, '')}"
                    on:click={switch_comparison}
                />
                <label for="switch_{c.replace(/[% ]/g, '')}"> {idp(c)} </label>
                <!-- {#if (i + 1) % 3 == 0}<br />{/if} -->
            {/each}
        </div>
        <div class="selects">
            {#each ["All", "Any%", "NMG", "100%", "NMG 100%"] as c}
                <input
                    class="labeled"
                    type="radio"
                    name="cat_switch"
                    id="switch_{c.replace(/[% ]/g, '')}"
                    on:click={switch_comparison}
                />
                <label for="switch_{c.replace(/[% ]/g, '')}">{c}</label>
            {/each}
        </div>
        <table>
            <tr>
                <th class="place">#</th><th>Name</th> <th>All</th> <th>Any%</th>
                <th>NMG</th>
                <th>100%</th> <th>NMG 100%</th>
            </tr>
            {#each Object.keys(users).sort((a, b) => users[b].counts[comparison] - users[a].counts[comparison]) as c}
                <tr>
                    <td class="place"
                        >{nth(
                            // there's a better way to do this but don't feel like doing it
                            Object.keys(users)
                                .sort(
                                    (a, b) =>
                                        users[b].counts[comparison] -
                                        users[a].counts[comparison]
                                )
                                .map((x) => users[x].counts[comparison])
                                .indexOf(users[c].counts[comparison]) + 1
                        )}
                    </td>
                    <td>
                        <Flag code={users[c].location} />
                        <User
                            name={c}
                            from={users[c].colors}
                            to={users[c].colors[1]}
                        />
                    </td> <td>{users[c].counts.all}</td>
                    <td>{users[c].counts["Any%"]}</td>
                    <td>{users[c].counts["No Major Glitches"]}</td>
                    <td>{users[c].counts["100%"]}</td>
                    <td>{users[c].counts["No Major Glitches 100%"]}</td>
                </tr>
            {/each}
        </table>
    </div>
</div>

<style lang="scss">
    @import "../styles/main.scss";
</style>
