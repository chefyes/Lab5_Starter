// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var synth = window.speechSynthesis;
  var voice_button = document.getElementsByTagName('button')[0];
  var voice_select = document.getElementById('voice-select');
  var speech_text = document.getElementById('text-to-speak');
  let speak = document.querySelector('#explore button');
  var voices = [];

  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = () => populateVoiceList();
  }

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);

      voice_select.append(option);
    }
  }

  speak.addEventListener('click', ()=>{
    let textArea = document.getElementById('text-to-speak');
    let image = document.querySelector("#explore img");

    let utter = new SpeechSynthesisUtterance(textArea.value);
    let selectedVoice = voice_select.selectedOptions[0].getAttribute('data-name');

    for(let i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedVoice) {
        utter.voice = voices[i];
      }
    }
    synth.speak(utter);
    if(synth.speaking) {
      image.src = "assets/images/smiling-open.png"
    } 
    utter.onend = ()=>{image.src = "assets/images/smiling.png"};
  });
}