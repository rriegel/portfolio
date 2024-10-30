import * as Tone from "tone";

let destination;
let synth;
let chorus;
let freeverb;
let phaser;
let tremelo;

const activeFx = [];

function connect() {
  synth.disconnect();
  let lastToConnect = destination;

  for (let i = activeFx.length - 1; i >= 0; i --) {
    let fxHasStartMethod = activeFx[i].hasOwnProperty('start');

    if (i === activeFx.length - 1) {
      if (fxHasStartMethod) {
        activeFx[i].toDestination().start();
      } else {
        activeFx[i].toDestination();
      }
    } else {
      if (fxHasStartMethod) {
        activeFx[i].connect(activeFx[i+1]).start();
      } else {
        activeFx[i].connect(activeFx[i+1]);
      }
    }
    
    if (i === 0) lastToConnect = activeFx[i];
  }
  synth.connect(lastToConnect);
};

async function onStart() {
  if (synth) return;
  
  await Tone.start();

  chorus = new Tone.Chorus().start();
  freeverb = new Tone.Freeverb();
  freeverb.dampening = 200;
  phaser = new Tone.Phaser();
  tremelo = new Tone.Tremolo();

  synth = new Tone.PolySynth(Tone.Synth);
  destination = Tone.getDestination();
  connect();
};

function getCurrentEffect(effect) {
  let currEffect;
  switch(effect) {
    case "chorus":
      currEffect = chorus;
      break;
    case "freeverb":
      currEffect = freeverb;
      break;
    case "phaser":
      currEffect = phaser;
      break;
    case "tremelo":
      currEffect = tremelo;
      break;
  }
  return currEffect;
}

function turnOnEffect(effect) {
  if (!synth) return;

  let currEffect = getCurrentEffect(effect);
  if (activeFx.includes(currEffect)) return;

  activeFx.push(currEffect);
  connect();
}


function turnOffEffect(effect) {
  if (!synth) return;

  let currEffect = getCurrentEffect(effect);
  if (!activeFx.includes(currEffect)) return;

  let i = activeFx.indexOf(currEffect);
  activeFx.splice(i, 1);
  currEffect.disconnect();
  connect();
}

function addNote(note) {
  if (!synth) return;

  const now = Tone.now();
  let octave = "4";
  synth.triggerAttack(note+octave+"", now);  
};

function removeNote(note) {
  if (!synth) return;

  const now = Tone.now();
  let octave = "4";
  synth.triggerRelease(note+octave, now);
};

export { onStart, turnOnEffect, turnOffEffect, addNote, removeNote };