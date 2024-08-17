import React, { useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import { MainVideo, video } from '../../assets'; // Ensure this path is correct

const Landing: React.FC = () => {
  const navigate = useNavigate();

  // Handle button click with GSAP animations
  const handleClick = () => {
    const tl = gsap.timeline();

    // Animate button pulse effect
    tl.to('.landing-button', {
      scale: 0.8,
      duration: 0.3,
      ease: 'power2.out',
      opacity: 0,
      onComplete: () => {
        // Animate triangle to enlarge and move upwards
        gsap.to('.landing-triangle', {
          scaleX: 2,
          scaleY: 3,
          backgroundColor: '#FFC652', 
          borderLeft: '30vw solid transparent',
          borderRight: '30vw solid transparent',
          borderTop: '50vh solid transparent', 
          duration: 0.3,
          ease: 'power2.out',
          onComplete: () => {
            gsap.to('.landing-triangle', {
              backgroundColor: '#FFC652',
              // y: '-100vh',
              duration: 0.4,
              ease: 'power2.out',
              onComplete: () => navigate('/selector')
            });
          }
        });
      }
    });
  };

  useEffect(() => {
    // Animate button and triangle appearance with fade-in effect
    const tl = gsap.timeline();

    tl.fromTo('.landing-triangle',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' }
    )
    .fromTo('.landing-button',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, ease: 'elastic.out(1, 0.5)' },
      "-=1"
    );
  }, []);

  return (
    <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* Background Video */}
      <video autoPlay muted loop playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
        <source src={MainVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Landing Content */}
      <Box sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        textAlign: 'center',
        zIndex: 1
      }}>
        {/* Triangle and Button */}
        <Box className="landing-triangle" sx={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          width: 0,
          height: 0,
          borderLeft: '30vw solid transparent',
          borderRight: '30vw solid transparent',
          borderTop: '22vh solid #073F8C',
          opacity : 0.8, 
          transform: 'translateX(-50%) rotate(180deg)',
          zIndex: 1
        }}>
          <Button
            variant="contained"
            color="primary"
            className="landing-button"
            onClick={handleClick}
            sx={{
              width: '150px',
              position: 'absolute',
              bottom: { xs: '60px', md: '55px' },
              left: '50%',
              transform: 'translateX(-50%) rotate(180deg)',
              // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              // '&:hover': {
              //   backgroundColor: '#FFC652',
              //   boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
              //   color : '#073F8C'
              // }
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;