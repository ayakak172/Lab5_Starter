// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  hornSelect();
  changeVolume();
  playSound();
}

function hornSelect() {
  const horn = document.getElementById("horn-select");
  const image = document.querySelector("#expose img");
  const audio = document.querySelector("#expose audio");
  horn.addEventListener("change", (event) => {
    image.setAttribute("src", `assets/images/${event.target.value}.svg`);
    image.setAttribute("alt", `${event.target.value} selected`);
    audio.setAttribute("src", `assets/audio/${event.target.value}.mp3`);
  })
}

function changeVolume() {
  const volume = document.getElementById("volume");
  const soundIcon = document.querySelector("#volume-controls img");
  const audio = document.querySelector("#expose audio");
  volume.addEventListener("input", (event) => {
    if (volume.value == 0) {
      soundIcon.setAttribute("src", "assets/icons/volume-level-0.svg");
    } else if (volume.value < 33) {
      soundIcon.setAttribute("src", "assets/icons/volume-level-1.svg");
    } else if (volume.value < 67) {
      soundIcon.setAttribute("src", "assets/icons/volume-level-2.svg");
    } else {
      soundIcon.setAttribute("src", "assets/icons/volume-level-3.svg");
    }
    audio.volume = volume.value / 100;
  })
}

function playSound() {
  const playButton = document.querySelector("#expose button");
  const horn = document.getElementById("horn-select");
  const audio = document.querySelector("#expose audio");
  const jsConfetti = new JSConfetti()
  playButton.addEventListener("click", (event) => {
    if (horn.value == "party-horn") {
      jsConfetti.addConfetti();
    }
    audio.play();
  })
}