import React, { useState, useEffect } from 'react';
import { useThemeContext } from '../themeContext';
import { Table, TableBody, TableCell, TableRow, Paper, Typography, Grid, IconButton } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

const BankUserDetails = () => {
  const [userData, setUserData] = useState(null);
  const { color } = useThemeContext();
  const baseUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    fetchData();
  }, [color]);

  const fetchData = async () => {
    try {
      const vulnerable = color === 'red';
      const response = await fetch(`${baseUrl}/user?vulnerable=${vulnerable}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <Paper style={{ padding: '20px', margin: '20px' }}>
      <Grid container alignItems="center" justifyContent="space-between">
        {userData && (
          <Grid item>
            <Typography variant="h5">
              {userData.firstName} {userData.lastName}
            </Typography>
          </Grid>
        )}
        <Grid item>
          <IconButton color="primary" onClick={fetchData}>
            <RefreshIcon />
          </IconButton>
        </Grid>
      </Grid>
      {userData && (
        <Table style={{ marginTop: '20px' }}>
          <TableBody>
            {Object.entries(userData).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell component="th" scope="row" style={{ fontWeight: 'bold' }}>
                  {key}
                </TableCell>
                <TableCell>{String(value)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Paper>
  );
};

export default BankUserDetails;
