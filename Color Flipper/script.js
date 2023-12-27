let colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

function hexGenerator() {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += colors[Math.ceil(Math.random() * 16) - 1];
  }
  document.getElementsByTagName("button")[0].innerHTML = hexCode;
  document.body.style.backgroundColor = hexCode;
}
