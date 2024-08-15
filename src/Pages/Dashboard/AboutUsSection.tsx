import React from 'react';
import { Box, Container, Grid, Typography, Link as MUILink } from '@mui/material';
import { FaHome, FaHeadset, FaMapMarkerAlt } from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';

interface AboutUsSectionProps {
  imageSrc: string;
}

const AboutUsSectionOne: React.FC<AboutUsSectionProps> = ({ imageSrc }) => {
  const theme = useTheme();

  return (
    <Box sx={{ pt: 4, pb: 4, backgroundColor: theme.palette.background.default }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img src={imageSrc} alt="About Us" style={{ width: '100%', borderRadius: '10px' }} />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box sx={{ p: 2, textAlign: 'left' }}>
              <Typography variant="body1" color="secondary.main" sx={{ mb: 2 }}>
                About Us
              </Typography>
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 700, color: 'white' }}>
                Dream Living Spaces Setting New Build
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  mb: 4,
                  color: theme.palette.common.white,
                  fontWeight: 300, // Adjusted to thinner weight
                  fontFamily: 'Gilroy, Poppins, sans-serif', // Ensure Gilroy is included in your theme
                }}
              >
                Over 39,000 people work for us in more than 70 countries all over the world. This breadth of global coverage, combined with specialist services, ensures that we can meet the diverse needs of our clients.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', mt : 2 }}>
                <FeatureItem
                  icon={<FaHome style={{ color: '#FFC652', fontSize: '40px' }} />}
                  title={<MUILink href="#" sx={{ color: 'white', '&:hover': { color: 'secondary.main' } }}>The Perfect Residency</MUILink>}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <FeatureItem
                  icon={<FaHeadset style={{ color: '#FFC652', fontSize: '40px' }} />}
                  title={<MUILink href="#" sx={{ color: 'white', '&:hover': { color: 'secondary.main' } }}>Global Architect Experts</MUILink>}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <FeatureItem
                  icon={<FaMapMarkerAlt style={{ color: '#FFC652', fontSize: '40px' }} />}
                  title={<MUILink href="#" sx={{ color: 'white', '&:hover': { color: 'secondary.main' } }}>Built-in Storage Cupboards</MUILink>}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

interface FeatureItemProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        mb: 3,
        p: 2,
        borderColor: '#f4faff',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
        position: 'relative',
        border: `1px solid #ffffff50`,
        '&:hover': {
          boxShadow: '2px 6px 6px rgba(0, 0, 0, 0.3)',
          transform: 'translateY(-10px)',
          backgroundColor: '#ffffff08',
          '&::before': {
            height: '80%',
            opacity: 1,
            visibility: 'visible',
          },
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          left: '-2px',
          top: '50%',
          width: '4px',
          height: '0%',
          backgroundColor: '#FFC652',
          transition: 'all 0.5s ease',
          opacity: 0,
          visibility: 'hidden',
          transform: 'translateY(-50%)',
          borderRadius: '4px',
        },
      }}
    >
      <Box sx={{ mr: 2 }}>{icon}</Box>
      <Box>
        <Typography variant="body1" sx={{ fontWeight: 600, mb: 1, color: 'white', '&:hover': { color: theme.palette.secondary.main } }}>
          {title}
        </Typography>
        <Typography variant="caption" sx={{ color: 'white' }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutUsSectionOne;
