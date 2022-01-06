const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".container");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNo()];
  }

  color.textContent = hexColor;
  //   btn.style.color = hexColor + "ff";
  //   console.log(btn.style.color);
  document.body.style.backgroundColor = hexColor;
  var css = "#btn:hover{ color: " + hexColor + "}";
  var style = document.createElement("style");

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  document.getElementsByTagName("head")[0].appendChild(style);
});
// document.getElementsByTagName("btn").style.background="blue";

function getRandomNo() {
  return Math.floor(Math.random() * hex.length);
}
