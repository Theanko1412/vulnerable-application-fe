import React, { useState, useEffect } from 'react';
import { useThemeContext } from '../themeContext'; // Adjust the path as necessary
import { Button, Paper, Typography, Grid, TextField, List, ListItem, Alert } from '@mui/material';
import googleLogo from '../googleLogo.png';

const GoogleSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [inputError, setInputError] = useState(false);
  const { color } = useThemeContext();
  const baseUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    fetchSearchResults();
    if (inputError) setInputError(false);
  }, [color]);

  const handleSearchChange = (event) => {
    if (inputError) setInputError(false);
    setSearchTerm(event.target.value);
  };

  const validateInput = (input) => {
    const regex = new RegExp("^[a-zA-Z0-9]+$");
    return regex.test(input);
  };

  const submitSearch = async () => {
    if (color !== 'red' && !validateInput(searchTerm)) {
      setInputError(true);
      return;
    }

    const vulnerable = color === 'red';
    try {
      await fetch(`${baseUrl}/google?vulnerable=${vulnerable}`, {
        method: 'POST',
        body: searchTerm,
      });
      fetchSearchResults();
    } catch (error) {
      console.error('Error submitting search:', error);
    }
  };

  const fetchSearchResults = async () => {
    const vulnerable = color === 'red';
    try {
      const response = await fetch(`${baseUrl}/google?vulnerable=${vulnerable}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <Paper style={{ padding: '20px', margin: '20px' }}>
      <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2}>
        <Grid item>
          <img src={googleLogo} alt="Google Logo" style={{ maxWidth: '100%', height: 'auto' }} />
        </Grid>
        <Grid item>
          <Grid container alignItems="center" justifyContent="center" spacing={2}>
            <Grid item xs={8}>
              <TextField 
                fullWidth 
                label="Google Search" 
                variant="outlined" 
                value={searchTerm} 
                onChange={handleSearchChange} 
                error={inputError}
              />
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" color="primary" onClick={submitSearch}>
                Search
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {inputError && (
        <Alert severity="error" style={{ marginTop: '10px' }}>
          Invalid input. Only alphanumeric characters are allowed.
        </Alert>
      )}
      {searchResults.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h6">Previous Searches:</Typography>
          <List>
            {searchResults.map((result) => (
              <ListItem key={result.id}>
                <Typography variant="body1" dangerouslySetInnerHTML={{ __html: result.searchText }} />
              </ListItem>
            ))}
          </List>
        </div>
      )}
    </Paper>
  );
};

export default GoogleSearch;
