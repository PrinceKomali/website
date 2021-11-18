// THIS WHOLE SCRIPT IS TAKEN FROM ANOTHER PROJECT
// it is just slightly modified

let path = "/home/documents/komalibot"
let usr = "komali@konstrictor"

let cursor = "_"

let tree = `

                 <i>START</i>
                   |
                  / \\
                /    \\
              /       \\
            /          \\
         <i>Path 1</i>       <i>Path 2</i>
          / \\          / \\
        /    \\       /    \\
      <b>X</b>       \\     <b>X</b>      \\
             / \\            \\
           /    \\          / \\
         /       \\        /   \\
       /          \\      /     \\
      <b>X</b>           <b>X</b>     <b>X</b>       <b>X</b>
`
let setting = ``
let _stdout = `

A friend of mine, <span class="c1">toasterwars327</span>, follows the belief of <span class="c2">"It's not stupid if it works"</span>. Therefore, I have set him a challenge for him to solve in a language of my choice, to hopefully prove him wrong via computer science

The challenge:
Create a text based choose-your-own adventure incorporating the following elements:

- <span class="c2"> At least 6 outcomes</span>
- <span class="c2"> At least 1 timed interval (e.g. a simple turn based system) </span>
- <span class="c2"> Random events </span>
- <span class="c2"> At least 2 variables being set that come up again in the program </span>

The storyline should follow a path similar to this:
${tree.replace(/ /g, "&nbsp;")}

Now for the language:

A while ago I was messing around in the language <span class="exs">Elixir</span>, the language in which Discord is written in. However, Elixir itself builds on top of another language...

The language I am choosing is <b><a href="https://www.erlang.org/downloads">Erlang</a></b>
File extensions are <span class="c1">.erl</span>
The script must be able to be ran/compiled for Windows

Best of luck!
`.replace(/\n/g,"<br>")





window.onload = () => {
  let spinny = ["/", "-", "\\", "|"]
  var i = 0;
  let _i = setInterval(()=>{
    i++;
    if(i>=50) {
      clearInterval(_i);
      document.getElementById("container").innerText = ""
      load();
    }
    else document.getElementById("container").innerText = spinny[Math.floor(i/10)%4]
    
  },10);
  function load() {
    document.getElementsByClassName("cursor")[0].innerText = cursor;
    document.getElementsByClassName("cursor")[0].style.backgroundColor = "white";
    document.getElementsByClassName("cursor2")[0].style.backgroundColor = "white";
    document.getElementsByClassName("usr")[0].innerText= usr

document.getElementById("colon").innerText=":"    
    setTimeout(()=>{
      document.getElementsByClassName("path")[0].innerText = path
      setTimeout(()=>{
        document.getElementsByClassName("money")[0].innerText = "$"
        setTimeout(()=>{
          let kw = "bash";
          let arg = "toaster.sh";
          let j = kw.length + arg.length;
          let c = 0;
          let _j = setInterval(()=>{
            if (c == j - 1) {
              clearInterval(_j);
              setTimeout(()=>{
                document.getElementsByClassName("cursor")[0].innerText = "\n" + cursor
                setTimeout(()=>{
                  _stdout = _stdout.split("\n");

                  setTimeout(()=>{
                    document.getElementsByClassName("cursor")[0].innerText = "\n" + cursor
                    document.getElementsByClassName("arg")[0].innerText += setting
                  let lineIndex = 0;
                  let _index = setInterval(()=>{
                    if (lineIndex == _stdout.length) {
                      clearInterval(_index);
                      let code = document.getElementsByTagName("code")[0];
                      let splitCode = code.innerHTML.split("<span");

                      
                      splitCode[splitCode.length - 2] += `<span class="usr_total"><span class="usr">${usr}</span><span id="colon">:</span></span><span class="path">${path}</span><span class="money">\$</span><code></code>`
                      splitCode[splitCode.length - 1] = splitCode[splitCode.length - 1].replace("<br>" + cursor, cursor); 
                      splitCode = splitCode.join("<span");
                      code.innerHTML = splitCode;
                      setTimeout(()=>{
                        round_two();
                      },1000)
                    }
                    else document.getElementsByClassName("arg")[0].innerHTML += _stdout[lineIndex] + "\n";
                    lineIndex++;
                    window.scrollTo(0,document.body.scrollHeight);
                  }, 33.333333)
                },600)

                },300);
              },150);
            }
            if (c < kw.length) document.getElementsByClassName("kw")[0].innerText += kw[c];
            else document.getElementsByClassName("arg")[0].innerText += arg[c - kw.length];
            c++;
          },10)
        },200)
      },50);
    },50);
  }
}


function round_two() {
  console.log(document.getElementsByTagName("code")[1].innerHTML)
  document.getElementsByClassName("cursor")[0].innerHTML = "";
  document.getElementsByClassName("cursor2")[0].innerHTML = cursor;
  let i2 = 0;
let code2 = `node status.js`
c2 = "";
  let _q = setInterval(()=>{
    
    if(i2 == code2.length) {
      setTimeout(()=>{
        document.getElementsByTagName("code")[1].innerHTML += "<br>";
        setTimeout(()=>{
        document.getElementsByTagName("code")[1].innerHTML += `{ <span class="js_str">'completed'</span>: <span class="js_bool"> false</span>, <span class="js_str">'code'</span>: <span class="js_str">''</span> }`;
          setTimeout(()=>{
            document.getElementsByTagName("code")[1].innerHTML += `<br><span class="usr_total"><span class="usr">${usr}</span><span id="colon">:</span></span><span class="path">${path}</span><span class="money">\$</span>`;
          },50)
        }, 300)
      },150)
      clearInterval(_q);
    }
    if(i2 == 0) c2 += `<span class="code"><span class="kw"> `
    else if(code2[i2 - 1] == " ") c2 += "</span> "
    else c2 += code2[i2 - 1];
    document.getElementsByTagName("code")[1].innerHTML = c2;
    i2++;
  },10);
}
