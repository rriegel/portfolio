import * as Tone from "tone";

let synth;

async function onStart() {
  await Tone.start();

  synth = new Tone.PolySynth(Tone.Synth).toDestination();
};

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