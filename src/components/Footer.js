import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Switch, FormControlLabel } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { useThemeContext } from '../themeContext.js';

const Footer = () => {
  const [isVulnerable, setIsVulnerable] = useState(false);
  const { setColor } = useThemeContext();
  const history = useNavigate();

  const navigateToHome = () => {
    history('/');
  };

  const handleToggleChange = (event) => {
    setIsVulnerable(event.target.checked);
    setColor(event.target.checked ? 'red' : 'green');
  };

  return (
    <AppBar position="fixed" style={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={navigateToHome}>
          <HomeIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Vulnerable Application
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={isVulnerable}
              onChange={handleToggleChange}
              name="vulnerability"
              color="default"
            />
          }
          label={isVulnerable ? 'Vulnerability On' : 'Vulnerability Off'}
          labelPlacement="start"
          style={{ width: '200px', textAlign: 'center' }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
