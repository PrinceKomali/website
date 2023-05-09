<script>
    import "../styles/globals.css";
    import User from "./user.svelte";
    import Flag from "./flag.svelte";
    import { onMount } from "svelte";

    let counts = {};
    let users = {};
    let onload = async () => {
        let data = await (await fetch("https://api.komali.dev/ils")).json();
        let { lb } = data;
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
                                    location:
                                        data.players[runner].location.split(
                                            "/"
                                        )[0],
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
    let c = 0;
    let comparison = "all";
    function switch_comparison() {
        comparison = [
            "Any%",
            "No Major Glitches",
            "100%",
            "No Major Glitches 100%",
            "all",
        ][c];
        c = (c + 1) % 5;
    }
    onMount(onload);
</script>

<div class="container">
    <div class="background" />
    <div class="main">
        <button on:click={switch_comparison}
            >Current comparison: {comparison == "all" ? "All" : comparison}
        </button>
        <table>
            <tr>
                <th>Name</th> <th>All</th> <th>Any%</th> <th>NMG</th>
                <th>100%</th> <th>NMG 100%</th>
            </tr>
            {#each Object.keys(users).sort((a, b) => users[b].counts[comparison] - users[a].counts[comparison]) as c}
                <tr>
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
