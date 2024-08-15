import React, { useState } from 'react';
import { Container, Grid, Typography, IconButton, Box, Dialog, DialogContent, Icon, Divider } from '@mui/material';
import { FaPlay } from 'react-icons/fa';
import { CheckCircle } from '@mui/icons-material'; // MUI icon for tick mark
import { section2 } from '../../assets'; 
import './style.css'; // Import your CSS file

const AboutUsSectionTwo: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            borderRadius: 0,
            height: 'calc(100vh - 100px)', // Adjust as needed
          },
        }}
      >
        <DialogContent
          style={{
            padding: 0,
            position: 'relative',
            height: '100%',
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <IconButton
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              color: '#FFF',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              animation: 'pulse1 1s infinite', // Add animation here
            }}
          >
            <Icon>close</Icon>
          </IconButton>
        </DialogContent>
      </Dialog>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={6}>
            <Box display="flex" flexDirection="column" justifyContent="center" height="100%">
              <Box mb={2} sx={{ textAlign: 'left' }}>
                <Typography variant="body2" color="secondary">
                  Building Facilities
                </Typography>
                <Typography variant="h3" mb={2} sx={{ fontWeight: 700 }}>
                  Making Living Spaces More Beautiful
                </Typography>
                <Typography variant="caption" mb={4}>
                  Over 39,000 people work for us in more than 70 countries all
                  over the world. This breadth of global coverage, combined with
                  specialist services.
                </Typography>
              </Box>
              <Box mb={4}>
                <ul style={{ padding: 0, listStyleType: 'none', margin: 0, display: 'flex', flexWrap: 'wrap' }}>
                  {[
                    "Living rooms are pre-wired for Surround",
                    "Luxurious interior design and amenities",
                    "Nestled in the Buckhead Vinings communities",
                    "Private balconies with stunning views",
                    "A rare combination of inspired architecture",
                    "Outdoor grilling with dining court",
                  ].map((item, index) => (
                    <li
                      key={index}
                      style={{
                        width: '100%',
                        maxWidth: 'calc(50% - 16px)', // Adjust to fit two items per row
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '12px',
                        paddingRight: '8px',
                        boxSizing: 'border-box',
                      }}
                    >
                      <Box
                        component="span"
                        style={{
                          fontSize: '24px', // Adjusted font size for better alignment
                          color: '#FFC652',
                          marginRight: '12px', // Reduced margin for better spacing
                          height: '30px', // Adjusted height for consistency
                          width: '30px', // Adjusted width for consistency
                          lineHeight: '30px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '50%',
                        }}
                      >
                        <CheckCircle fontSize="inherit" />
                      </Box>
                      <Typography variant="caption" style={{ flex: 1 }}>
                        {item}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                backgroundImage: `url(${section2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                width: '100%',
                height: { xs: '300px', lg: 'auto' },
                position: 'relative', // Make the box relative for positioning the play button
                marginTop : { xs: '50px', lg: 0 }, // Adjust margin as needed
              }}
            >
              <img src={section2} alt="Building Facilities" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />

              {/* Play button centered within the Box */}
              <IconButton
                color="secondary"
                onClick={handleClickOpen}
                className="ltn__animation-pulse2"
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  animation: 'pulse2 1s infinite',
                  color: '#FFC652',
                  '&:hover': {
                    backgroundColor: '#FFC652',
                    color: '#fff',
                  },
                  p: 2.5,
                }}
              >
                <FaPlay style={{ fontSize: '24px' }} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Divider  sx={{ mt: 4 }} />
    </>
  );
};

export default AboutUsSectionTwo;
