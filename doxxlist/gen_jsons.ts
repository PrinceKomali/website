// @ts-ignore
import fs from "bun:fs";

let txts: string[] = fs.readdirSync("txt");
let out_json = {};
for (const file of txts) {
    let data: string = fs.readFileSync("./txt/" + file).toString();
    let lines = data.split("\n").filter(line => line.length > 1);
    let group_name = lines.shift();
    let group_json = {
        title: group_name,
        people: {}
    };
    for(const _line of lines) {
        const [flag, line] = _line.split(/ (.+)/);
        let people = line.split(", ");
        people[0] = people[0].split(": ")[1];
        let code = "";
        if(flag.length === 4) {
            // @ts-ignore
            code = flag.split("").filter(c => c != "\uD83C").map(c => String.fromCharCode(c.codePointAt(0) - 0xDD85)).join(""); // tsc says its fine
        }
        else {
            switch (flag) {
                case "🏴󠁧󠁢󠁳󠁣󠁴󠁿": 
                    code = "gb-sct";
                    break;
                case "🏴󠁧󠁢󠁥󠁮󠁧󠁿":
                    code = "gb-eng";
                    break;
                case "🏴󠁧󠁢󠁷󠁬󠁳󠁿":
                    code = "gb-wls";
                    break;
                default:
                    console.log("Unknown flag " + flag);
                    process.exit();
            }
        }
        group_json.people[code] = people;
    }
    out_json[file.replace(".txt", "")] = group_json;
}
fs.writeFileSync("./src/data.js", "function get_data() { return" + JSON.stringify(out_json) + "}");
console.log("Wrote json to ./src/data.js");