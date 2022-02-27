
let _h1 = document.createElement("h1"); _h1.style.fontFamily = "monospace"; _h1.style.fontWeight = "bolder"; _h1.classList.add("_timer"); document.querySelector(".App-container").appendChild(_h1);
let _started = false;
let _start = null;
let _int = setInterval(_ => {
    let _f = document.querySelectorAll(".RowL-letter")[0];
    if (!_started) {
        if (!([..._f.classList] + []).includes("letter-")) document.querySelector("._timer").innerText = "0.000";
        if (!!_f.innerText) {
            console.log("START!");
            _start = Date.now();
            _started = true;
        }
    }
    else {
        _t = ((new Date() - _start) / 1000).toFixed(3)
        document.querySelector("._timer").innerText = _t;
        for (i = 0; i < (rows = document.querySelectorAll(".RowL-locked-in")).length; i++) {
            if ([...rows[i].children].map(x => [...x.classList].pop()).every(x => x == 'letter-correct') || !!document.querySelector(".fade.alert.alert-danger")) {
                if (q = document.querySelectorAll(".mt-3")[1]) q.innerHTML = `<b>Time: ${_t}s</b><br><button onclick='_result("${_t}")'>Share Results</button>`
                _start = null
                _f.innerText = '';
                _started = false;
            }
        }
    }
}, 0);

function _result(t) {
    let o = [];
    let acc = 0;
    for (i = 0; i < (rows = document.querySelectorAll(".RowL")).length; i++) {
        if (![...rows[i].classList].includes("RowL-locked-in")) break
        acc++
        o.push([...rows[i].children].map(x => {
            _y = x.classList[1].split("-")[1]
            return _y == "correct" ? '\u{1f7e9}' : _y == "elsewhere" ? '\u{1f7e8}' : '\u2b1b'
        }).join(""));
    }
    _o=`Wordle Unlimited SR ${acc}/6\n${o.join("\n")}\nTotal Time: ${t}s`
    document.querySelector(".fade.alert.alert-success").innerHTML = "<textarea rows=10 cols=24>" + _o + "</textarea>"
}