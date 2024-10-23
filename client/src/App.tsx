import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Button, ButtonGroup } from '@mui/material';
import Home from './routes/Home';
import Projects from './routes/Projects';
import AboutMe from './routes/AboutMe';
import Contact from './routes/Contact';

export default function App() {
  return (
    <Router>
      <div className="App">
        <nav className="App-header">
          <ButtonGroup variant="contained" aria-label="navigation buttons">
            <Button component={Link} to="/">Home</Button>
            <Button component={Link} to="/projects">Projects</Button>
            <Button component={Link} to="/about">About Me</Button>
            <Button component={Link} to="/contact">Contact</Button>
          </ButtonGroup>
        </nav>

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
