import React from 'react';
import logo from '../logo.svg';
import Typography from '@mui/material/Typography';
import '../App.css';
import Keyboard from '../components/Keyboard';

export default function Home() {
  return (
    <div className="App">
      <Typography className="App-header" variant="h2" gutterBottom>Ryan Riegel Portfolio</Typography>
      <Keyboard />
    </div>
  );
};
