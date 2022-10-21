import React from 'react';
import { Grid, Paper } from '@mui/material';

export const LoginForm = () => {

  const paperStyle = {padding: 20, height: "70vh"}
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
         Sign in
      </Paper>
    </Grid>

  )
}
