import * as Tone from "tone";

let synth;
let chorus;
let freeverb;
let phaser;
let tremelo;

async function onStart() {
  await Tone.start();

  // synth = new Tone.PolySynth(Tone.Synth).toDestination();

  chorus = new Tone.Chorus().toDestination();
  freeverb = new Tone.Freeverb().toDestination();
  // synth = new Tone.PolySynth(Tone.Synth).connect(chorus);
  freeverb.dampening = 1000;
  synth = new Tone.PolySynth(Tone.Synth).connect(chorus);
};

function turnOnChorus() {
  chorus.start();
}

function turnOffChorus() {
  chorus.stop();
  synth.disconnect(chorus);
}

function turnOnFreeverb() {
  synth.connect(freeverb);
}

function turnOffFreeverb() {
  synth.disconnect(freeverb);
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

export { onStart, addNote, removeNote };