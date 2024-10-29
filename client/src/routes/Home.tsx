import React from 'react';
import logo from '../logo.svg';
import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import '../App.css';
import Keyboard from '../components/Keyboard';
import { onStart } from '../tone/tone.js';

export default function Home() {
  return (
    <div className="App">
      <Typography className="App-header" variant="h2" gutterBottom>Ryan Riegel Portfolio</Typography>
      <Button 
        onClick={() => onStart()}
        sx={{
          minWidth: 0,
          width: 60,
          height: 60,
          bgcolor: 'white',
          color: 'black',
          borderRadius: '4px'
        }}
      />
      <Keyboard />
    </div>
  );
};
