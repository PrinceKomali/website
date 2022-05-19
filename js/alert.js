function rmw(id) {
  w = document.querySelector(".warn_id_" + id);
  w.innerHTML = w.outerHTML = '';
}

function WindowsAlert(m = "Hello, World") {
  let id = Math.random().toString(36).split(".")[1];
  let warn = document.createElement("div");
  warn.classList.add("warn");
  warn.classList.add("warn_id_" + id);
  
  let header = document.createElement("div");
  header.classList.add("warn_header");
  let path = document.createElement("span");
  path.classList.add("path");
  path.innerHTML = "C:\\Windows\\System32"
  let _x = document.createElement("span");
  _x.classList.add("x");
  _x.innerText = String.fromCodePoint(0x2573);
  header.appendChild(path);
  header.innerHTML += " ";
  header.appendChild(_x);
  
  let triangle = new Image();
  triangle.src = 'error.png';
  let inner = document.createElement("div");
  inner.classList.add("warn_inner")
  inner.innerText = m;
  
  let footer = document.createElement("div");
  footer.classList.add("warn_footer");
  let button = document.createElement("button");
  button.innerText = "Ok";
  
  _x.onclick = _ => rmw(id);
  button.onclick = _x.onclick;
  
  warn.appendChild(header);
  warn.appendChild(triangle);
  warn.appendChild(inner);
  warn.appendChild(footer);
  warn.appendChild(button);
  document.body.appendChild(warn);
  if(dragElement)[...document.querySelectorAll(".warn")].map(dragElement);
  return id
}
