// 16 * 16 grid
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

// hover effect
let divs = document.querySelectorAll(".container div");
divs.forEach((div) => {
  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "black";
    setTimeout(() => {
      div.style.backgroundColor = "";
    }, 500);
  });
});
