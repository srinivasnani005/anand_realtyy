import React, { useEffect, useState } from 'react';
import {
  Box, Typography, Button, Card, CardContent, CardActions,
  Dialog, DialogTitle, DialogContent, DialogActions, TextField
} from '@mui/material';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';

const Selector: React.FC = () => {
  const navigate = useNavigate();
  const [showButtons, setShowButtons] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('linear-gradient(45deg, #073F8C 30%, #FFC652 90%)');
  
  // Modal state
  const [openSecondModal, setOpenSecondModal] = useState(false);
  const [openThirdModal, setOpenThirdModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', mobile: '', email: '', message: '' });
  
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
      gsap.fromTo(
        '.selector-card',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.3, ease: 'power2.out' }
      );
    }
  }, [showButtons]);

  const handleButtonClick = (path: string) => {
    navigate(path);
  };

  const handleOpenSecondModal = () => setOpenSecondModal(true);
  const handleCloseSecondModal = () => setOpenSecondModal(false);
  
  const handleOpenThirdModal = () => setOpenThirdModal(true);
  const handleCloseThirdModal = () => setOpenThirdModal(false);
  
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = () => {
    // Here you could add validation or further processing
    handleCloseSecondModal();
    handleCloseThirdModal();
    navigate('/dashboard');
  };

  const cardStyles = {
    flex: '1 1 300px', // Makes cards flexible and responsive
    backgroundColor: '#073F8C',
    color: 'white',
    textAlign: 'center',
    backdropFilter: 'blur(10px)',
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #FFC652',
    boxShadow: '4px 10px 10px rgba(0, 0, 0, 0.4)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '6px 12px 12px rgba(0, 0, 0, 0.6)'
    },
    '&:active': {
      transform: 'translateY(0px)',
      boxShadow: '4px 10px 10px rgba(0, 0, 0, 0.4)'
    }
  };

  const headerStyles = {
    color: '#FFC652',
    borderBottom: '2px solid #FFC652',
    paddingBottom: '8px',
    marginBottom: '16px'
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: backgroundColor,
        backdropFilter: 'blur(10px)',
        p: 2, // Padding for small devices
        '@media (min-width:600px)': {
          p: 4, // Padding for medium devices
        },
        '@media (min-width:900px)': {
          p: 6, // Padding for large devices
        },
      }}
    >
      <Box
        className="selector-background"
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: '#FFC652',
          zIndex: -1,
          opacity: 0
        }}
      />

      <Box
        sx={{
          zIndex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1200px', // Max width for large screens
          gap: '20px',
          flexWrap: 'wrap',
          p: 2, // Padding for small devices
          '@media (min-width:600px)': {
            p: 4, // Padding for medium devices
          },
          '@media (min-width:900px)': {
            p: 6, // Padding for large devices
          },
        }}
      >
        {showButtons && (
          <>
            <Card className="selector-card" sx={cardStyles}>
              <CardContent>
                <Typography variant="h6" sx={headerStyles}>
                  𝐼𝒻 𝓎𝑜𝓇𝑒 𝒶 Home Seeker
                </Typography>
                <Typography variant="caption" sx={{ textAlign: 'justify' }}>
                  Whose problem is finding a GOOD HOME at a GOOD LOCATION, at a GOOD PRICE, with a GOOD DEVELOPER.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button size="small" variant="contained" color="primary" onClick={() => handleButtonClick('/dashboard')}>
                  Find Your Home
                </Button>
              </CardActions>
            </Card>

            <Card className="selector-card" sx={cardStyles}>
              <CardContent>
                <Typography variant="h6" sx={headerStyles}>
                  𝐼𝒻 𝓎𝑜𝓇𝑒 𝒶 Developer/Builder
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'justify' }}>
                  Who is struggling to hire skilled Sales Professionals, Training & Upskilling, Marketing & Sales. Click now to schedule a FREE CONSULTATION.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button size="small" variant="contained" color="secondary" onClick={handleOpenSecondModal}>
                  Schedule a Call
                </Button>
              </CardActions>
            </Card>

            <Card className="selector-card" sx={cardStyles}>
              <CardContent>
                <Typography variant="h6" sx={headerStyles}>
                  𝐼𝒻 𝓎𝑜𝓇𝑒 𝒶 Channel Partner
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'justify' }}>
                  AGENT, BROKER, BANKER, or VENDOR. Click to provide details, connect, and enter your information.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button size="small" variant="contained" color="success" onClick={handleOpenThirdModal}>
                  Enroll Now
                </Button>
              </CardActions>
            </Card>
          </>
        )}
      </Box>

      {/* Second Modal */}
      <Dialog open={openSecondModal} onClose={handleCloseSecondModal} fullWidth maxWidth="sm">
        <DialogTitle>Schedule a Call</DialogTitle>
        <DialogContent sx={{ width: '100%', maxWidth: '500px' }}>
          <TextField
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            label="Mobile Number"
            type="text"
            fullWidth
            variant="outlined"
            name="mobile"
            value={formData.mobile}
            onChange={handleFormChange}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            label="Message"
            type="text"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            name="message"
            value={formData.message}
            onChange={handleFormChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSecondModal}>Cancel</Button>
          <Button onClick={handleSubmitForm}>Submit</Button>
        </DialogActions>
      </Dialog>

      {/* Third Modal */}
      <Dialog open={openThirdModal} onClose={handleCloseThirdModal} fullWidth maxWidth="sm">
        <DialogTitle>Provide Your Details</DialogTitle>
        <DialogContent sx={{ width: '100%', maxWidth: '500px' }}>
          <TextField
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            label="Mobile Number"
            type="text"
            fullWidth
            variant="outlined"
            name="mobile"
            value={formData.mobile}
            onChange={handleFormChange}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            label="Message"
            type="text"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            name="message"
            value={formData.message}
            onChange={handleFormChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseThirdModal}>Cancel</Button>
          <Button onClick={handleSubmitForm}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Selector;
