import React from 'react';
import logo from '../logo.svg';
import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import '../App.css';
import Keyboard from '../components/Keyboard';
import { onStart, turnOnEffect, turnOffEffect } from '../tone/tone.js';

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
      <Box>
        <Button 
          onClick={() => turnOnEffect("chorus")}
          sx={{
            minWidth: 0,
            width: 60,
            height: 60,
            bgcolor: 'white',
            color: 'black',
            borderRadius: '4px'
          }}
        />
        <Button 
          onClick={() => turnOffEffect("chorus")}
          sx={{
            minWidth: 0,
            width: 60,
            height: 60,
            bgcolor: 'white',
            color: 'black',
            borderRadius: '4px'
          }}
        />
      </Box>
      <Box>
        <Button 
          onClick={() => turnOnEffect("phaser")}
          sx={{
            minWidth: 0,
            width: 60,
            height: 60,
            bgcolor: 'white',
            color: 'black',
            borderRadius: '4px'
          }}
        />
        <Button 
          onClick={() => turnOffEffect("phaser")}
          sx={{
            minWidth: 0,
            width: 60,
            height: 60,
            bgcolor: 'white',
            color: 'black',
            borderRadius: '4px'
          }}
        />
      </Box>
      <Box>
        <Button 
          onClick={() => turnOnEffect("tremelo")}
          sx={{
            minWidth: 0,
            width: 60,
            height: 60,
            bgcolor: 'white',
            color: 'black',
            borderRadius: '4px'
          }}
        />
        <Button 
          onClick={() => turnOffEffect("tremelo")}
          sx={{
            minWidth: 0,
            width: 60,
            height: 60,
            bgcolor: 'white',
            color: 'black',
            borderRadius: '4px'
          }}
        />
      </Box>
      <Box>
        <Button 
          onClick={() => turnOnEffect("freeverb")}
          sx={{
            minWidth: 0,
            width: 60,
            height: 60,
            bgcolor: 'white',
            color: 'black',
            borderRadius: '4px'
          }}
        />
        <Button 
          onClick={() => turnOffEffect("freeverb")}
          sx={{
            minWidth: 0,
            width: 60,
            height: 60,
            bgcolor: 'white',
            color: 'black',
            borderRadius: '4px'
          }}
        />
      </Box>
      <Keyboard />
    </div>
  );
};
