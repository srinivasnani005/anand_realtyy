import React from 'react';
import { Container, Grid, Typography, Box, Paper, Icon } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { house1, house2, house3 } from '../../assets';
import { theme } from '../../Theme/theme';

interface FeatureProps {
  data: {
    title: string;
    shortDescription: string;
    icon?: string;
    img?: string;
    buttonText?: string;
    active?: boolean;
  }[];
  iconTag?: boolean;
  servicebtn?: boolean;
  titleSectionData: {
    sectionClasses?: string;
    headingClasses?: string;
    title: string;
    subtitle?: string;
  };
  classes?: string;
  headingClasses?: string;
}

const Feature: React.FC<FeatureProps> = ({
  data,
  iconTag = true,
  servicebtn = true,
  titleSectionData,
  classes = '',
  headingClasses = '',
}) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleNavigation = (slug: string) => {
    // navigate(`/service/${slug}`);
  };

  return (
    <Box sx={customStyles.featureArea(theme)} className={classes}>
      <Container>
        <Box sx={customStyles.titleSection} className={titleSectionData.sectionClasses}>
          <Typography variant="body1" className={headingClasses} color="secondary">
            {titleSectionData.title}
          </Typography>
          {titleSectionData.subtitle && (
            <Typography variant="h5" className={titleSectionData.headingClasses} sx={{fontWeight: 600}}>    
              {titleSectionData.subtitle}
            </Typography>
          )}
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {data.map((item, key) => {
            const slug = item.title.toLowerCase().replace(/ /g, '-');

            return (
              <Grid key={key} item xs={12} sm={6} lg={4}>
                <Paper
                  sx={{
                    ...customStyles.featureItem,
                    ...(item.active ? customStyles.activeFeatureItem : {}),
                  }}
                >
                  <Box sx={customStyles.featureIcon}>
                    <img
                      src={item.img}
                      alt={item.title}
                      style={customStyles.featureImage}
                    />
                  </Box>
                  <Box sx={customStyles.featureInfo}>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      onClick={() => handleNavigation(slug)}
                      sx={{ cursor: 'pointer', fontWeight: 600 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="caption">
                      {item.shortDescription.substring(0, 50)}...
                    </Typography>
                    {servicebtn && (
                      <Typography
                        variant="button"
                        sx={customStyles.serviceBtn}
                        onClick={() => handleNavigation(slug)}
                      >
                        {item.buttonText}
                        <Icon sx={customStyles.rightArrowIcon}>arrow_right_alt</Icon>
                      </Typography>
                    )}
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Feature;

const customStyles = {
  featureArea: (theme: any) => ({
    pt: 14,
    pb: 11,
    backgroundColor: theme.palette.background.default,
  }),
  titleSection: {
    textAlign: 'center' as const,
    marginBottom: '40px',
  },
  featureItem: {
    cursor: 'pointer',
    textAlign: 'center' as const,
    padding: '40px 50px 10px',
    boxShadow: 3,
    transition: 'all 0.3s ease-in-out',
    backgroundColor: '#054196eb',
    position: 'relative' as const,
    overflow: 'hidden', // Ensure the line animation doesn't overflow
    '&:hover': {
      boxShadow: 6,
      transform: 'translateY(-10px)',
      '&::after': {
        transform: 'translateX(0)',
      },
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '3px',
      backgroundColor: theme.palette.secondary.main,
      transform: 'translateX(-100%)',
      transition: 'transform 0.3s ease-in-out',
    },
  },
  activeFeatureItem: {
    boxShadow: 6,
  },
  featureIcon: {
    marginBottom: '20px',
    fontSize: '60px',
    lineHeight: 1,
  },
  featureImage: {
    width: '70px',
  },
  featureInfo: {
    '& h6': {
      marginBottom: '10px',
      fontWeight: 600,
    },
  },
  serviceBtn: {
    marginTop: '25px',
    color: '#FFC652',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  rightArrowIcon: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '8px',
  },
};
