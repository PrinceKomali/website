let select = document.querySelector("select");
window.onload = _ => {
    let n = num_tasks();
    for(let i = 0; i < n;i++) {
        let opt = document.createElement("option");
        opt.value = "Task " + (i + 1);
        opt.innerText = "Task " + (i + 1);
        select.appendChild(opt);
    }
    select.value = "Task " + n;
    let c = colors();
    for(let k of Object.keys(c)) {
        document.querySelector(".roles").innerHTML += `<div class='role'><div class='circle' style='background-color:rgb(${c[k].join(", ")})'> </div> ${k}</div>`
    }
    load_task(n);
    
}
function load_task(n) {
    // I could use eval but nah
    switch(n) {
        case 1:
            task_1();
            break;
    }
}