import React from 'react';
import logo from '../logo.svg';
import Typography from '@mui/material/Typography';
import '../App.css';

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Typography variant="h2" gutterBottom>Ryan Riegel Portfolio</Typography>
    </div>
  );
};
