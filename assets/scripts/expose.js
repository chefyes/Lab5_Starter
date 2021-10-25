// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const jsConfetti = new JSConfetti()
  let horns = document.getElementsByName('horn')[0]
  let horn_image = document.images[0];
  let audio = document.querySelector('.hidden');
  let audio_button = document.getElementsByTagName('button')[0];
  let volume = document.getElementById('volume');
  let sound_image = document.images[1];

  volume.onchange = function() {
    audio.volume = volume.value / 100;
    if (volume.value == 0) {
      sound_image.src = "assets/icons/volume-level-0.svg"
    }
    else if (volume.value >= 1 && volume.value < 33) {
      sound_image.src = "assets/icons/volume-level-1.svg"
    }
    else if (volume.value >= 33 && volume.value < 67) {
      sound_image.src = "assets/icons/volume-level-2.svg"
    }
    else {
      sound_image.src = "assets/icons/volume-level-3.svg"
    }
  };

  horns.addEventListener('change', function() {
    let img_source = "assets/images/" + this.value + ".svg";
    let audio_source = "assets/audio/" + this.value + ".mp3";
    horn_image.src = img_source;
    audio.src = audio_source;
  });

  audio_button.addEventListener('click', function() {
    audio.play();
    if (horns.value == "party-horn") {
      jsConfetti.addConfetti()
    }
  }); 
}