import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Card, CardContent, CardActions } from '@mui/material';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';

const Selector: React.FC = () => {
  const navigate = useNavigate();
  const [showButtons, setShowButtons] = useState(false);
  //gradient background
  const [backgroundColor, setBackgroundColor] = useState('linear-gradient(45deg, #073F8C 30%, #FFC652 90%)');

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to('.selector-background', {
      opacity: 1,
      scale: 1.5,
      duration: 0.75,
      ease: 'power2.out',
      onComplete: () => {
        gsap.to('.selector-background', {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.in',
          onComplete: () => {
            setBackgroundColor('#073F8C'); 
            setShowButtons(true); 
          }
        });
      }
    });

    if (showButtons) {
      gsap.fromTo('.selector-card', 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.3, ease: 'power2.out' }
      );
    }
  }, [showButtons]);

  const handleButtonClick = () => {
    navigate('/dashboard');
  };

  return (
    <Box sx={{
      position: 'relative',
      height: '100vh',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      backgroundColor: backgroundColor, 
      backdropFilter: 'blur(10px)' 
    }}>
      <Box className="selector-background" sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#FFC652', // Initial color
        zIndex: -1,
        opacity: 0
      }} />

      {/* Page Content */}
      <Box sx={{
        zIndex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        gap: '20px',
        flexWrap: 'wrap'
      }}>
        {showButtons && (
          <>
            {/* Home Seeker Card */}
            <Card className="selector-card" sx={{
              width: "25%",
              backgroundColor: '#073F8C',
              color: 'white',
              textAlign: 'center',
              boxShadow: 3,
              backdropFilter: 'blur(10px)',
              padding: '15px',
              borderRadius: '8px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)'
              },
              '&:active': {
                transform: 'translateY(0px)',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
              }
            }}>
              <CardContent>
                <Typography variant="h6" component="div" sx={{ mb: 2, fontWeight: '600', textAlign: 'center' }}>
                  𝐼𝒻 𝓎𝑜𝓇𝑒 𝒶 Home Seeker
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'justify' }}>
                  Whose problem is finding a GOOD HOME at a GOOD LOCATION, at a GOOD PRICE, with a GOOD DEVELOPER.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button size="small" variant="contained" color="primary" onClick={handleButtonClick}>
                  Find Your Home
                </Button>
              </CardActions>
            </Card>

            {/* Developer/Builder Card */}
            <Card className="selector-card" sx={{
              width: "25%",
              backgroundColor: '#073F8C',
              color: 'white',
              textAlign: 'center',
              boxShadow: 3,
              backdropFilter: 'blur(10px)',
              padding: '15px',
              borderRadius: '8px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)'
              },
              '&:active': {
                transform: 'translateY(0px)',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
              }
            }}>
              <CardContent>
                <Typography variant="h6" component="div" sx={{ mb: 2, fontWeight: '600', textAlign: 'center' }}>
                  𝐼𝒻 𝓎𝑜𝓇𝑒 𝒶 Developer/Builder
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'justify' }}>
                  Who is struggling to hire skilled Sales Professionals, Training & Upskilling, Marketing & Sales. Click now to schedule a FREE CONSULTATION.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button size="small" variant="contained" color="secondary" onClick={handleButtonClick}>
                  Schedule a Call
                </Button>
              </CardActions>
            </Card>

            {/* Channel Partner Card */}
            <Card className="selector-card" sx={{
              width: "25%",
              backgroundColor: '#073F8C',
              color: 'white',
              textAlign: 'center',
              boxShadow: 3,
              backdropFilter: 'blur(10px)',
              padding: '15px',
              borderRadius: '8px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)'
              },
              '&:active': {
                transform: 'translateY(0px)',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
              }
            }}>
              <CardContent>
                <Typography variant="h6" component="div" sx={{ mb: 2, fontWeight: '600', textAlign: 'center' }}>
                  𝐼𝒻 𝓎𝑜𝓇𝑒 𝒶 Channel Partner
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'justify' }}>
                  AGENT, BROKER, BANKER, or VENDOR. Click to provide details, connect, and enter your information.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button size="small" variant="contained" color="success" onClick={handleButtonClick}>
                  Enroll Now
                </Button>
              </CardActions>
            </Card>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Selector;
