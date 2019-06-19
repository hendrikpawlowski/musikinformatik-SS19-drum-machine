let base_track = document.getElementsByClassName("base")[0].getElementsByClassName("sixteenth");
let snare_track = document.getElementsByClassName("snare")[0].getElementsByClassName("sixteenth");
let hihat_track = document.getElementsByClassName("hihat")[0].getElementsByClassName("sixteenth");
let cowbell_track = document.getElementsByClassName("cowbell")[0].getElementsByClassName("sixteenth");
var tempo = 120;


function play() {

  console.log("play gestartet");

  var base_sound = new Tone.Player('./audio/base.wav').toMaster();

  let index = 0;

  Tone.Transport.scheduleRepeat(repeat, '16n');
  Tone.Transport.bpm.value = tempo;
  Tone.Transport.start();

  // function repeat() {
  //   console.log(index);
  //   let currentStep = index % 16;


  //   if (base_track[currentStep].classList.contains('on')) {
  //     base_sound.start();
  //   }
  //   index++;
  // }
  console.log(base_track.length);

  new Tone.Loop(repeat, '16n').start(0);

  function repeat() {
    if (index === 16) index = 0;

    if (base_track[index].classList.contains('on')) { 
      base_sound.start();
    }

    index++;
  }
}