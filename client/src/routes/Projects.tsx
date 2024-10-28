import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../App.css';

export default function Projects() {
  return (
    <div className="App">
      <Box>
        <Typography variant="h3">Work Projects</Typography>
        <Typography variant="body1" gutterBottom>High Industries - TypeScript | .NET/C# | Entity Framework | SQL Server | Azure</Typography>
        <Typography variant="body1" gutterBottom>Armstrong Ceilings - JavaScript | AEM | Java | Spring | MySQL | Jenkins</Typography>
        <Typography variant="body1" gutterBottom>Performance Golf - React | JavaScript | Wordpress | PHP | MySQL | AWS</Typography>
      </Box>
      <Box>
        <Typography variant="h3">Personal Projects</Typography>
      </Box>
    </div>
  );
}
