#!/usr/bin/env node
 //Setup
 const throwError = (e) => {
    console.log("> " + e);
    process.exit()
};
const fs = require("fs");
const flags = ["-e", "-s", "-o", "-script", "-indx"];
if (!process.argv[2]) throwError("No second argument provided");
process.argv.shift();
process.argv.shift();
//Transpiler stuff
let scriptToRun = "";
let hasFile = false;
let _script = false;
let _e = false;
let _g = false;
let _s = false;
let _o = false;
let _i = "";
for (let i in process.argv) {
    let arg = process.argv[i];
    if (arg.startsWith("-") && !flags.includes(arg)) throwError(`\x1b[1mCommandLineError: \x1b[31mUnknown argument: \x1b[1;33m${arg}\x1b[0m`);
    if (arg == "-e") {
        if (process.argv.length - 1 == i) throwError("\x1b[1mCommandLineError: \x1b[31mPlease provide another argument for \x1b[1;33m-e\x1b[0m");
        _e = true;
        continue;
    }
    if (arg == "-s") {
        _s = true;
        continue;
    }
    if (arg == "-g") {
        _g = true;
        continue;
    }
    if (arg == "-script") {
        _script = true;
        continue;
    }
    if (arg == "-o") {
        _o = true;
        continue;
    }
    if (_e) {
        if (arg.startsWith("-")) throwError("Please provide another argument for -e");
        scriptToRun = arg;
        _e = false;
        continue;
    }
    if (!arg.startsWith("-")) {
        hasFile = true;
        if (!fs.existsSync(arg)) throwError("File " + arg + " does not exist!");
        scriptToRun = fs.readFileSync(arg).toString();
    }
}
//Actual transpilation
let randomStr = _ => (Math.random() + 1).toString(36).substring(7);
const uca = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split``.map(x => "\"" + x + "\"");
const lca = uca.map(x => x.toLowerCase());
const validCapitals = ["J", "F", "V", "P", "I", "E", "D", "R", "L", "K", "Q", "U", "A"];
let scriptToInterpret = _s ? '"use strict";\n' : "";
let _hasrand = false;
let _vardef = false;
let _fndef = false;
let _rpt = false;
let _isInString = false;
let _ifdef = false;
let _else = false;
let _print = false;
let _isString = false;
let _fnRun = false;
let _rpt_i = false;
let _floor = false;
let _split = false;
let _join = false;
let _srpt = false;
let _fill = false;
let _forv = randomStr();
let rptd = "";
for (let i in [...scriptToRun]) {
    if (_g) console.log(scriptToInterpret)
    let char = scriptToRun[i];
    let previousChar = i == 0 ? "" : scriptToRun[i - 1];
    // if (char == ":" && previousChar != "\\") char = "\n"; //Why did i add that
    if (char.toLowerCase() != char.toUpperCase() && char == char.toUpperCase() && !validCapitals.includes(char) && !_isString) throwError("Invalid Captital " + char + " at position " + i);
    if (char == "V") {
        scriptToInterpret += "var ";
        _vardef = true;
        continue;
    }
    if (char == "I" && !_isString) {
        scriptToInterpret += "if (";
        _ifdef = true;
        continue;
    }
    if (char == "{" && !_isString) {
        scriptToInterpret += "for(window.__g_index_" + _forv + " = 0; window.__g_index_" + _forv + "< ";
        _rpt = true;
        continue;
    }
    if (!_isString && char == "E") {
        scriptToInterpret += "else {";
        _else = true;
        continue;
    }
    if (char == "F" && !_isString) {
        scriptToInterpret += "function ";
        _fndef = true;
        continue;
    }
    if (char == "P" && !_isString) {
        scriptToInterpret += ";console.log(";
        _print = true;
        continue;
    }
    if (char == "r" && previousChar == "." && (!_isString || _isInString)) {
        scriptToInterpret = scriptToInterpret.slice(0, -1) + ".repeat(";
        _srpt = true;
        continue;
    }
    if (char == "x" && previousChar == "." && (!_isString || _isInString)) {
        scriptToInterpret = scriptToInterpret.slice(0, -1) + ".split(";
        _split = true;
        continue;
    }
    if (char == "i" && previousChar == "/" && (!_isString || _isInString)) {
        if (!_i && _s) return throwError(`\x1b[1mCommandLineError: \x1b[31mYou must specify an input with \x1b[1;33m-i\x1b[31m in order to use \x1b[1;33m/i\x1b[31m with \x1b[1;33m-s\x1b[0m`);
        scriptToInterpret = scriptToInterpret.slice(0, -1);
        if ((_i.startsWith("[") && endsWith("]")) || !isNaN(_i)) {
            scriptToInterpret += _i;
        } else {
            scriptToInterpret += `"${_i}"`;
        }
        continue;
    }
    if (char == "a" && previousChar == "/" && (!_isString || _isInString)) {
        scriptToInterpret = scriptToInterpret.slice(0, -1);
        scriptToInterpret += "[" + lca.toString() + "]";
        continue;
    }
    if (char == "A" && previousChar == "/" && (!_isString || _isInString)) {
        scriptToInterpret = scriptToInterpret.slice(0, -1);
        scriptToInterpret += "[" + uca.toString() + "]";
        continue;
    }
    if (char == "c" && previousChar == "." && (!_isString || _isInString)) {
        scriptToInterpret = scriptToInterpret.slice(0, -1);
        scriptToInterpret += '["constructor"]';
        continue;
    }
    if (char == "t" && previousChar == "." && (!_isString || _isInString)) {
        scriptToInterpret = scriptToInterpret.slice(0, -1);
        scriptToInterpret += '["constructor"].toString().split(" ")[1].split("(")[0]';
        continue;
    }
    if (char == "s" && previousChar == "." && (!_isString || _isInString)) {
        scriptToInterpret = scriptToInterpret.slice(0, -1);
        scriptToInterpret += ".toString()";
        continue;
    }
    if (char == "l" && previousChar == "." && (!_isString || _isInString)) {
        scriptToInterpret = scriptToInterpret.slice(0, -1);
        scriptToInterpret += ".length";
        continue;
    }
    if (char == "f" && previousChar == "." && (!_isString || _isInString)) {
        scriptToInterpret = scriptToInterpret.slice(0, -1);
        _fill = true;
        scriptToInterpret += ".fill(";
        continue;
    }
    if (char == '"' && !_isString) {
        scriptToInterpret += "`";
        _isString = true;
        continue;
    }
    if (char == '"' && _isString) {
        scriptToInterpret += "`";
        _isString = false;
        continue;
    }
    if (_isString) {
        if (char == "(") {
            _isInString = true;
            scriptToInterpret += "${";
            continue;
        }
        if (char == ")") {
            _floor = false;
            _fnRun = false;
            scriptToInterpret += "}";
            _isInString = false;
            continue;
        }
    }
    if (char == "L" && (!_isString || _isInString)) {
        scriptToInterpret += "Math.floor(";
        _floor = true;
        continue;
    }
    if (char == "J" && (!_isString || _isInString)) {
        scriptToInterpret += ".join(";
        _join = true;
        continue;
    }
    if ((!_isString || _isInString) && char == "^") {
        _fnRun = true;
        continue;
    }
    if ((!_isString || _isInString) && char == "K") {
        scriptToInterpret += "*1000";
        continue;
    }
    if ((!_isString || _isInString) && char == "D") {
        scriptToInterpret += "Date.now()";
        continue;
    }
    if ((!_isString || _isInString) && char == "&") {
        scriptToInterpret += "return ";
        continue;
    }
    if ((!_isString || _isInString) && char == "R") {
        scriptToInterpret += "Math.random()";
        continue;
    }
    if ((!_isString || _isInString) && char == "A") {
        scriptToInterpret += "Array";
        continue;
    }
    if (_print && !_isString && char == ";") {
        if (!(_split || _srpt || _fill || _isInString || _floor || _join)) {
            scriptToInterpret += ");\n";
            _print = false;
            continue;
        }
    }
    if (_floor) {
        if (char == ";") {
            scriptToInterpret += ")";
            _floor = false;
            continue;
        }
    }
    if (_split) {
        if (char == ";") {
            scriptToInterpret += ")";
            _srpt = false;
            continue;
        }
    }
    if (_srpt) {
        if (char == ";") {
            scriptToInterpret += ")";
            _srpt = false;
            continue;
        }
    }
    if (_join) {
        if (char == ";") {
            scriptToInterpret += ")";
            _join = false;
            continue;
        }
    }
    if (_fill) {
        if (char == ";") {
            scriptToInterpret += ")";
            _fill = false;
            continue;
        }
    }
    if (_fnRun) {
        if (char == ";") {
            scriptToInterpret += "()" + (_isInString ? "" : ";");
            _fnRun = false;
            continue;
        }
        scriptToInterpret += char;
        continue;
    }
    if (_else) {
        if (!_isString && char == "}") {
            scriptToInterpret += "}\n";
            _else = false;
            continue;
        }
        if (!_isString && char == ";") {
            scriptToInterpret += ";\n";
            continue;
        }
        scriptToInterpret += char;
        continue;
    }
    if (_ifdef) {
        if (char == "|") {
            scriptToInterpret += ") {\n";
            continue;
        }
        if (!_isString && char == "}") {
            scriptToInterpret += "}\n";
            _ifdef = false;
            continue;
        }
        if (!_isString && char == ";") {
            scriptToInterpret += ";\n";
            continue;
        }
        scriptToInterpret += char;
        continue;
    }
    if (_rpt) {
        if (char == ",") {
            for (let j = +i + 1; j < scriptToRun.length; j++) {
                if (scriptToRun[j] == "|") break;
                rptd += scriptToRun[j];
                if (j == scriptToRun.length - 1) throwError("Syntax Error: Expected | near position " + i);
            }
            _rpt_i = true;
            rptd = ";" + rptd + "++;";
            continue;
        }
        if (char == "|") {
            scriptToInterpret += "; window.__g_index_" + _forv + "++) {\n";
            _rpt_i = false;
            continue;
        }
        if (!_isString && char == "}") {
            scriptToInterpret += rptd + "}\n";
            _rpt = false;
            _forv = randomStr();
            continue;
        }
        if (!_isString && char == ";") {
            scriptToInterpret += ";";
            continue;
        }
        if (!_rpt_i) scriptToInterpret += char;
        continue;
    }
    if (_fndef) {
        if (char == "|") {
            scriptToInterpret += "() {\n";
            continue;
        }
        if (!_isString && char == ";" && previousChar == ";") {
            scriptToInterpret += "}\n";
            _fndef = false;
            continue;
        }
        if (!_isString && char == ";") {
            scriptToInterpret += ";";
            continue;
        }
        scriptToInterpret += char;
        continue;
    }
    if (_vardef) {
        if (char == "|") {
            scriptToInterpret += " = ";
            continue;
        }
        if (char == ";" && !_isString) {
            let defined = false;
            for (j = i; j > 0; j--) {
                if (scriptToRun[j] == "|") defined = true;
            }
            if (!defined) scriptToInterpret += " = 0";
            _vardef = false;
            scriptToInterpret += ";";
            continue;
        }
        scriptToInterpret += char;
        continue;
    }
    if (char == "@") {
        if (previousChar == "@") {
            scriptToInterpret += "`" + scriptToRun + "`";
        }
        continue;
    }
    scriptToInterpret += char;
    continue;
}
if (_script) console.log(`Script: \x1b[35m${scriptToRun}\n\x1b[0mTranspiled: \x1b[36m${scriptToInterpret.trim()}\x1b[0m\n`);
try {
    fs.writeFileSync(__dirname + "/__temp.js", scriptToInterpret);
    require(__dirname + "/__temp.js");
    fs.unlinkSync(__dirname + "/__temp.js");
} catch (e) {
    fs.unlinkSync(__dirname + "/__temp.js");
    throwError(`\x1b[1m${e.toString().split(":")[0]} (Post Processing): \x1b[31m${e.toString().split(":")[1]}\x1b[0m\n> Generated code: ${e.stack.split("\n")[1]}\n\x1b[33m\x1b[1m                  ${e.stack.split("\n")[2]}\x1b[0m`);
}
