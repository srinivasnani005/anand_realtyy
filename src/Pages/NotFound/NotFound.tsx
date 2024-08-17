import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function NotFound() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: 4,
        backgroundColor: '#073F8C',
        color: 'white',
        borderRadius: 1,
        boxShadow: 3,
      }}
    >
      <ErrorOutlineIcon
        sx={{ fontSize: 70, color: 'red', mb: 2 ,mt:-5}}
      />
      <Typography variant="h4" color="inherit" gutterBottom sx={{ fontWeight: 700 }}>
        Oops! 404
      </Typography>
      <Typography variant="body1" color="inherit" gutterBottom>
        Page not found
      </Typography>
      {/* <Typography variant="caption" color="inherit" paragraph>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </Typography> */}
      <Button
        variant="contained"
        color="secondary"
        component={Link}
        to="/"
        sx={{
          marginTop: 2,
          padding: '10px 20px',
          borderRadius: 2,
          '&:hover': {
            backgroundColor: '#0551a3', 
            transform: 'scale(1.05)',
          },
          transition: 'background-color 0.3s, transform 0.3s',
        }}
      >
        Go to Home
      </Button>
    </Box>
  );
}

export default NotFound;
