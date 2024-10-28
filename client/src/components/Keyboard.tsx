import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';

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

  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());

  const isInScale = (note: string) => cMajorScale.includes(note);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    const note = kbToNoteMap[e.key.toUpperCase()];
    if (note && !pressedKeys.has(note)) {
      setPressedKeys((prevKeys) => new Set(prevKeys).add(note));
      // trigger in tone.js
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    const note = kbToNoteMap[e.key.toUpperCase()];
    if (note) {
      setPressedKeys((prevKeys) => {
        const newKeys = new Set(prevKeys);
        newKeys.delete(note);
        return newKeys;
      });
      // turn off in tone.js
    }
  };

  const handleNoteMouseDown = (e: React.MouseEvent<HTMLButtonElement>, note: string) => {
    setIsMouseDown(true);
    if (note && !pressedKeys.has(note)) {
      setPressedKeys((prevKeys) => new Set(prevKeys).add(note));
      // trigger in tone.js
    }
  };

  const handleNoteMouseUp = (e: React.MouseEvent<HTMLButtonElement>, note: string) => {
    setIsMouseDown(false);
    if (note && pressedKeys.has(note)) {
      setPressedKeys((prevKeys) => {
        const newKeys = new Set(prevKeys);
        newKeys.delete(note);
        return newKeys;
      });
      // turn off in tone.js
    }
  };

  const handleNoteMouseEnter = (e: React.MouseEvent<HTMLButtonElement>, note: string) => {
    if (isMouseDown) {
      if (note && !pressedKeys.has(note)) {
        setPressedKeys((prevKeys) => new Set(prevKeys).add(note));
        // trigger in tone.js
      }
    }
  };

  const handleNoteMouseLeave = (e: React.MouseEvent<HTMLButtonElement>, note: string) => {
    if (note && pressedKeys.has(note)) {
      setPressedKeys((prevKeys) => {
        const newKeys = new Set(prevKeys);
        newKeys.delete(note);
        return newKeys;
      });
      // turn off in tone.js
    }
  };

  return (
    <Box display="flex" alignItems="flex-end" justifyContent="center" mt={4}>
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
            bgcolor: pressedKeys.has(note) ? '#9D7ACA' : isInScale(note) ? 'white' : 'black',
            color: pressedKeys.has(note) ? 'white' : isSharp ? 'black' : 'white',
            border: isInScale(note) ? '2px solid black' : '1px solid gray',
            borderRadius: '4px',
            marginX: isSharp ? '-20px' : '1px',
            zIndex: isSharp ? 10 : 1,
            top: isSharp ? -60 : undefined,
            '&:hover': {
              color: pressedKeys.has(note) ? 'white' : isSharp ? 'white' : 'black',
            }
          }}
        >
          {note}
        </Button>
      ))}
    </Box>
  );
};

export default Keyboard;
