// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  loadVoices();
  speak();
}

function loadVoices() {
  window.addEventListener("load", (event) => {
    const voiceSelect = document.getElementById("voice-select");
    const synth = window.speechSynthesis;
    setTimeout(() => {
      const voices = synth.getVoices();
      for (let i = 0; i < voices.length; i++) {
        const option = document.createElement("option");
        option.textContent = `${voices[i].name} (${voices[i].lang})`;
        option.setAttribute("name", voices[i].name);
        voiceSelect.append(option);
      }
    }, 100);
  })
}

function speak() {
  const pressButton = document.querySelector("#explore button");
  const inputText = document.getElementById("text-to-speak");
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  const face = document.querySelector("#explore img");
  pressButton.addEventListener("click", (event) => {
    let utter = new SpeechSynthesisUtterance(inputText.value);
    let voiceIndex = voiceSelect.selectedOptions.length - 1;
    let voiceName = voiceSelect.selectedOptions[voiceIndex].getAttribute("name");
    const voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === voiceName) {
        utter.voice = voices[i];
        break;
      }
    }
    utter.onstart = () => {
      face.setAttribute("src", "assets/images/smiling-open.png");
      face.setAttribute("alt", "Smiling open face");
    };
    utter.onend = () => {
      face.setAttribute("src", "assets/images/smiling.png");
      face.setAttribute("alt", "Smiling face");
    };
    synth.speak(utter);
  })
}