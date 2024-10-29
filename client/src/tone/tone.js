import * as Tone from "tone";

const synth = new Tone.PolySynth(Tone.Synth).toDestination();

async function onStart() {
  await Tone.start();
};

function addNote(note) {
  const now = Tone.now();
  let octave = "4";
  synth.triggerAttack(note+octave+"", now);
};

function removeNote(note) {
  const now = Tone.now();
  let octave = "4";
  synth.triggerRelease(note+octave, now);
};

export { onStart, addNote, removeNote };