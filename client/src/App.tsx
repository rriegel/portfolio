import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button, ButtonGroup } from '@mui/material';
import Home from './routes/Home';
import Projects from './routes/Projects';
import AboutMe from './routes/AboutMe';
import Contact from './routes/Contact';

const buttonGroupStyle = {
  ".MuiButtonGroup-grouped:not(:last-of-type)": {
    borderColor: "#363C48",
  }
};

const buttonStyle = {
  backgroundColor: "#282c34",
  color: 'white',
  padding: '10px 20px',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: "#363C48",
  },
};

export default function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-nav">
          <nav>
            <ButtonGroup sx={buttonGroupStyle} variant="contained" aria-label="navigation buttons">
              <Button sx={buttonStyle} component={Link} to="/">Home</Button>
              <Button sx={buttonStyle} component={Link} to="/projects">Projects</Button>
              <Button sx={buttonStyle} component={Link} to="/about">About Me</Button>
              <Button sx={buttonStyle} component={Link} to="/contact">Contact</Button>
            </ButtonGroup>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
