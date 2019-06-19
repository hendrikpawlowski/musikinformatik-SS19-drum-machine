let base_track = document.getElementsByClassName("base")[0].getElementsByClassName("sixteenth");
let snare_track = document.getElementsByClassName("snare")[0].getElementsByClassName("sixteenth");
let hihat_track = document.getElementsByClassName("hihat")[0].getElementsByClassName("sixteenth");
let cowbell_track = document.getElementsByClassName("cowbell")[0].getElementsByClassName("sixteenth");
var tempo = 120;
var timeBetweenSixteenths = tempo / 4;


function play() {

  var base_sound = new Howl({
    src: ['./audio/base.wav']
  });

  var snare_sound = new Howl({
    src: ['./audio/snare.wav']
  });

  var hihat_sound = new Howl({
    src: ['./audio/hihat.wav']
  });

  var cowbell_sound = new Howl({
    src: ['./audio/cowbell.wav']
  });

  playSound(base_track, base_sound);
  playSound(snare_track, snare_sound);
  playSound(hihat_track, hihat_sound);
  playSound(cowbell_track, cowbell_sound);
}

async function playSound(track, sound) {

  var current = 0;

  setInterval(function () {

    if (track[current].classList.contains("on")) {
      sound.play();
    }

    current++;
    if (current === track.length) {
      current = 0;
    }
    console.log(current);
  }, 125);
}