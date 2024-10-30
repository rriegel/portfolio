import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { addNote, removeNote } from '../tone/tone.js';

// Define all notes in an octave
const notes = [
  { note: 'C', isSharp: false },
  { note: 'C#', isSharp: true },
  { note: 'D', isSharp: false },
  { note: 'D#', isSharp: true },
  { note: 'E', isSharp: false },
  { note: 'F', isSharp: false },
  { note: 'F#', isSharp: true },
  { note: 'G', isSharp: false },
  { note: 'G#', isSharp: true },
  { note: 'A', isSharp: false },
  { note: 'A#', isSharp: true },
  { note: 'B', isSharp: false },
];

const kbToNoteMap: { [key: string]: string } = {
  "C": "C",
  "F": "C#",
  "V": "D",
  "G": "D#",
  "B": "E",
  "N": "F",
  "J": "F#",
  "M": "G",
  "K": "G#",
  ",": "A",
  "<": "A",
  "L": "A#",
  ".": "B",
  ">": "B"
};

const Keyboard = () => {
  const cMajorScale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

  const [isMouseDown, setIsMouseDown] = useState(false);

  const activeNotes: Record<string, boolean> = {};

  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());

  const isInScale = (note: string) => cMajorScale.includes(note);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    const note = kbToNoteMap[e.key.toUpperCase()];
    if (note && !activeNotes[note]) {
      activeNotes[note] = true;
      setPressedKeys((prevKeys) => new Set(prevKeys).add(note));
      addNote(note);
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    const note = kbToNoteMap[e.key.toUpperCase()];
    if (note) {
      activeNotes[note] = false;
      setPressedKeys((prevKeys) => {
        const newKeys = new Set(prevKeys);
        newKeys.delete(note);
        return newKeys;
      });
      removeNote(note);
    }
  };

  const handleNoteMouseDown = (e: React.MouseEvent<HTMLButtonElement>, note: string) => {
    setIsMouseDown(true);
    if (note && !pressedKeys.has(note)) {
      activeNotes[note] = true;
      setPressedKeys((prevKeys) => new Set(prevKeys).add(note));
      addNote(note);
    }
  };

  const handleNoteMouseUp = (e: React.MouseEvent<HTMLButtonElement>, note: string) => {
    setIsMouseDown(false);
    if (note && pressedKeys.has(note)) {
      activeNotes[note] = false;
      setPressedKeys((prevKeys) => {
        const newKeys = new Set(prevKeys);
        newKeys.delete(note);
        return newKeys;
      });
      removeNote(note);
    }
  };

  const handleNoteMouseEnter = (e: React.MouseEvent<HTMLButtonElement>, note: string) => {
    if (isMouseDown) {
      if (note && !pressedKeys.has(note)) {
        activeNotes[note] = true;
        setPressedKeys((prevKeys) => new Set(prevKeys).add(note));
        addNote(note);
      }
    }
  };

  const handleNoteMouseLeave = (e: React.MouseEvent<HTMLButtonElement>, note: string) => {
    if (note && pressedKeys.has(note)) {
      activeNotes[note] = false;
      setPressedKeys((prevKeys) => {
        const newKeys = new Set(prevKeys);
        newKeys.delete(note);
        return newKeys;
      });
      removeNote(note);
    }
  };

  return (
    <Box 
      alignContent="center"
      justifyContent="center"
      sx={{
        margin: "auto",
        height: "270px",
        width: "500px",
        padding: 2,
        bgcolor: '#DDDBDA',
        borderRadius: '16px',
      }}>
      <Box display="flex" alignItems="flex-end" justifyContent="center" >
        {notes.map(({ note, isSharp }) => (
          <Button
            key={note}
            variant="contained"
            onMouseDown={(e) => handleNoteMouseDown(e, note)}
            onMouseUp={(e) => handleNoteMouseUp(e, note)}
            onMouseEnter={(e) => handleNoteMouseEnter(e, note)}
            onMouseLeave={(e) => handleNoteMouseLeave(e, note)}
            disableRipple
            sx={{
              minWidth: 0,
              width: isSharp ? 40 : 60,
              height: isSharp ? 120 : 180,
              bgcolor: pressedKeys.has(note) ? '#9D7ACA' : isInScale(note) ? '#FFFFFF' : 'black',
              color: pressedKeys.has(note) ? '#FFFFFF' : isSharp ? 'black' : '#FFFFFF',
              borderRadius: '16px',
              marginX: isSharp ? '-20px' : '1px',
              zIndex: isSharp ? 10 : 1,
              top: isSharp ? -60 : undefined,
              '&:hover': {
                color: pressedKeys.has(note) ? '#FFFFFF' : isSharp ? '#FFFFFF' : 'black',
              }
            }}
          >
            {note}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Keyboard;
