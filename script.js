let container = document.querySelector(".container");

for (let i = 1; i <= 16; i++) {
  for (let j = 1; j <= 16; j++) {
    let num = document.createElement("p");
    num.innerHTML = "row " + i.toString() + ", col " + j.toString();
    let div = document.createElement("div");
    div.appendChild(num);
    container.appendChild(div);
  }
}
