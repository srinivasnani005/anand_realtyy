import React, { useState } from 'react';
import Slider from 'react-slick';
import { Box, Button, Container, Grid, Typography, IconButton, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { FaPlay, FaHome, FaDribbble, FaTwitter, FaFacebookF } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface HeroSlide {
  subtitle: string;
  Title: string;
  Desc: string;
  buttonText: string;
  videoButton: boolean;
  learnMoreButtonText: string;
  heroimage?: any;
  variationLeft?: boolean;
}

interface HeroSectionStyleProps {
  data: HeroSlide[];
}

const HeroSectionStyle: React.FC<HeroSectionStyleProps> = ({ data }) => {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const [isOpen, setOpen] = useState(false);

  const heroSettings = {
    arrows: false, // Hide arrows
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: nav2 || undefined,  // Link with nav2
    responsive: [
      { breakpoint: 1600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 1200, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 575, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  const navSettings = {
    arrows: false, // Hide arrows
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    asNavFor: nav1 || undefined,  // Link with nav1
    focusOnSelect: true,  // Allow click on nav item to trigger slide
    responsive: [
      { breakpoint: 1600, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 575, settings: { slidesToShow: 2, slidesToScroll: 1 } }
    ]
  };

  return (
    <>
      <Dialog open={isOpen} onClose={() => setOpen(false)} fullWidth maxWidth="md">
        <DialogTitle>Watch Video</DialogTitle>
        <DialogContent>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </DialogContent>
      </Dialog>

      <Box sx={{ position: 'relative', overflow: 'hidden', height: 'auto', backgroundColor: '#054196e3' }}>
        <Slider {...heroSettings} ref={slider => setNav1(slider)} className="hero-slider">
          {data.map((item, index) => (
            <Box key={index} sx={{ position: 'relative', textAlign: item.variationLeft ? 'right' : 'left', height: 'auto', display: 'flex', alignItems: 'center', padding: 2 }}>
              <Container>
                <Grid container spacing={3} alignItems="center">
                  <Grid item xs={12} md={6}>
                    <Box sx={{ textAlign: item.variationLeft ? 'right' : 'left', maxWidth: '500px' }}>
                      <Typography variant="body2" sx={{ mb: 1, color: 'white', fontSize: { xs: '20px', sm: '24px', md: '24px' } }}>
                        <FaHome color='#FFC652' style={{ fontSize: '24px', marginRight: '8px' }} />
                        {item.subtitle}
                      </Typography>
                      <Typography variant='h3' sx={{ mb: 2, color: 'white', fontWeight: '650',  }}>
                        {item.Title}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', marginBottom: 3 }}>
                        {/* <Box sx={{ background: '#FFC652', borderRadius: '15px', width: '8px', height: '60px', marginRight: 2 }} /> */}
                        <Typography variant="body2" sx={{ color: 'white', fontSize: { xs: '16px', sm: '18px', md: '20px' }, fontWeight: '300', lineHeight: '1.5', marginBottom: 0 }}>
                          {item.Desc}
                        </Typography>
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Button variant="contained" color="primary" sx={{ mr: 2, fontSize: { xs: '14px', sm: '16px', md: '18px' }, padding: '10px 20px' }}>
                          {item.buttonText}
                        </Button>
                        {item.videoButton ? (
                          <IconButton onClick={() => setOpen(true)} sx={{ backgroundColor: 'white' , animation: 'pulse2 1s infinite', }}>
                            <FaPlay color="primary" />
                          </IconButton>
                        ) : (
                          <Button variant="outlined" color="secondary" sx={{ fontSize: { xs: '14px', sm: '16px', md: '18px' }, padding: '10px 20px' }}>
                            {item.learnMoreButtonText}
                          </Button>
                        )}
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ position: 'relative' }}>
                      <img src={item.heroimage} alt="Slide Image" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          ))}
        </Slider>

        {/* Thumbnail Slider */}
        {/* <Box sx={{ position: 'absolute', top: { xs: '400px', sm: '400px', md: '400px' }, right: '10%', width: { xs: '200px', sm: '250px', md: '300px' }, zIndex: 2 }}>
          <Slider {...navSettings} ref={slider => setNav2(slider)} className="hero-slider-nav">
            {data.map((item, index) => (
              <Box key={index} sx={{ display: 'flex', justifyContent: 'center', padding: 1 }}>
                <img src={item.heroimage} alt="Thumbnail" style={{ width: '80px', height: 'auto', borderRadius: '8px', cursor: "pointer" }} />
              </Box>
            ))}
          </Slider>
        </Box> */}

        <Box sx={{
          position: 'absolute',
          bottom: { xs: '20px', sm: '30px', md: '50px' },
          right: { xs: '60px', sm: '80px', md: '120px' },
          width: { xs: '250px', sm: '300px', md: '300px' },
          zIndex: 2
        }}>
          <Slider {...navSettings} ref={slider => setNav2(slider)} className="hero-slider-nav">
            {data.map((item, index) => (
              <Box key={index} sx={{ display: 'flex', justifyContent: 'center', padding: 1 }}>
                <img src={item.heroimage} alt="Thumbnail" style={{
                  width: '80px',
                  height: 'auto',
                  borderRadius: '8px',
                  cursor: "pointer"
                }} />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>

      {/* Social Media Icons */}
      
    </>
  );
};

export default HeroSectionStyle;
