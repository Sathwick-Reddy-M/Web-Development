function playMusic(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0; // Rewind to the start
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") {
    return;
  }
  this.classList.remove("playing");
}

function onClick(key) {
  const audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0; // Rewind to the start
  audio.play();
  key.classList.add("playing");
}

const keys = document.querySelectorAll(".key");

window.addEventListener("keydown", playMusic);
keys.forEach((key) =>
  key.addEventListener("click", function () {
    onClick(key);
  })
);
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
