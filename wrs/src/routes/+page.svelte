<script>
    import "../styles/globals.css";
    import User from "./user.svelte";
    import Flag from "./flag.svelte";
    import { onMount } from "svelte";

    let counts = {};
    let users = {};
    let lb = {};
    let game = "botw";
    let selectors = ["All", "Any%", "NMG", "100%", "NMG 100%"];
    let data_cache = { botw: {}, all: {}, totk: {} };

    let get_data = async (mode) => {
        let out = {};
        let api_root =
            // window.location.hostname
            // == "localhost"
            // ? "http://localhost:3000"
            // :
            "https://api.komali.dev";
        if (Object.keys(data_cache[mode]).length > 0) {
            return data_cache[mode];
        }

        let data = await (await fetch(api_root + "/ils?mode=" + mode)).json();
        data_cache[mode] = data;
        // console.log(data_cache)
        return data;
    };

    let load_runs = async (mode) => {
        counts = users = lb = {};
        if (mode == "totk") {
            selectors = ["All", "Any%", "100%"];
        } else selectors = ["All", "Any%", "NMG", "100%", "NMG 100%"];
        let data = await get_data(mode);
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
    };
    $: users = load_runs(game);
    let onload = async () => {
        document.querySelector("#switch_All").checked = true;
        document.querySelector("#switch_mode_BotW").checked = true;
        // await load_runs();
    };
    let comparison = "all";
    function switch_game() {
        game = ["All", "BotW", "TotK"]
            .find((x) => document.querySelector("#switch_mode_" + x).checked)
            .toLowerCase();
    }
    function switch_comparison() {
        comparison = [
            "all",
            "Any%",
            "No Major Glitches",
            "100%",
            "No Major Glitches 100%",
        ].filter((x) =>
            selectors
                .map((y) => y.replace("NMG","No Major Glitches").toLowerCase().replace(/[% ]/g, ""))
                .includes(x.toLowerCase().replace(/[% ]/g, ""))
        )[
            selectors
                .map((x) => x.replace(/[% ]/g, ""))
                .map((x) => document.querySelector("#switch_" + x).checked)
                .indexOf(true)
        ];
    }
    let nth = (n) =>
        n + (window.innerWidth < 838 ? "." :
        (["st", "nd", "rd"][
            (((((n < 0 ? -n : n) + 90) % 100) - 10) % 10) - 1
        ] || "th")); // formatter doesn't like this

    onMount(onload);
</script>

<div class="container">
    <div class="background" />
    <div class="main">
        <!-- <div class="checks">
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
            {/each}
        </div> -->
        <div class="selects_mode">
            {#each ["All", "BotW", "TotK"] as c}
                <input
                    class="labeled"
                    type="radio"
                    name="switch"
                    id="switch_mode_{c.replace(/[% ]/g, '')}"
                    on:click={switch_game}
                />
                <label for="switch_mode_{c.replace(/[% ]/g, '')}">{c}</label>
            {/each}
        </div>
        <div class="selects">
            {#each selectors as c}
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
