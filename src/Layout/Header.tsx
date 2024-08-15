import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Tabs,
  Tab,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { logo } from '../assets';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'; // Close icon
import { FaDribbble, FaFacebookF, FaTwitter } from 'react-icons/fa';

interface HeaderProps {
  selectedTab: string;
  onTabChange: (route: string) => void;
}

const Header: React.FC<HeaderProps> = ({ selectedTab, onTabChange }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    onTabChange(newValue);
    navigate(newValue);
    setDrawerOpen(false); // Close drawer on tab change
  };

  const tabLabels = [
    { label: 'Dashboard', route: '/dashboard' },
    { label: 'About', route: '/about' },
    { label: 'Projects', route: '/projects' },
    { label: 'Gallery', route: '/gallery' },
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: theme.palette.primary.main,
          width: '100%',
          boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 5, mt: 3 }}>
            <img src={logo} alt="Logo" style={{ height: '40px', transform: 'scale(2.5)' }} />
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              flexGrow: 1,
              justifyContent: 'flex-end',
            }}
          >
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              textColor="inherit"
              indicatorColor="secondary"
              sx={{
                '& .MuiTab-root': {
                  minWidth: 'auto',
                  marginLeft: 3,
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                },
                '& .Mui-selected': {
                  color: theme.palette.secondary.main,
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: theme.palette.secondary.main,
                },
              }}
            >
              {tabLabels.map((tab, index) => (
                <Tab key={index} label={tab.label} value={tab.route} />
              ))}
            </Tabs>
            <Button variant="outlined" sx={{ ml: 3 }} onClick={() => window.open('/brochure.pdf', '_blank')}>
              Download Brochure
            </Button>
          </Box>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          position: 'fixed',
          bottom: { xs: '10px', sm: '20px', md: '30px' },
          right: { xs: '10px', sm: '10px', md: '10px' },
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <IconButton href="#" aria-label="Facebook" sx={{ color: 'white' }}>
          <FaFacebookF size={20} />
        </IconButton>
        <IconButton href="#" aria-label="Twitter" sx={{ color: 'white' }}>
          <FaTwitter size={20} />
        </IconButton>
        <IconButton href="#" aria-label="Dribbble" sx={{ color: 'white' }}>
          <FaDribbble size={20} />
        </IconButton>
      </Box>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            backgroundColor: theme.palette.primary.main,
            color: '#FFFFFF',
            border: 'none',
          },
        }}
      >
        <Box sx={{ width: 250 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
            <IconButton onClick={handleDrawerToggle} sx={{ color: '#FFFFFF' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {tabLabels.map((tab, index) => (
              <ListItem
                button
                key={index}
                onClick={() => {
                  handleTabChange(null as any, tab.route);
                  handleDrawerToggle();
                }}
                sx={{
                  backgroundColor: selectedTab === tab.route ? theme.palette.secondary.main : 'transparent',
                  '&:hover': {
                    backgroundColor: theme.palette.secondary.light,
                  },
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant="body1" sx={{ color: '#FFFFFF' }}>
                      {tab.label}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
          <Divider sx={{ borderColor: '#FFFFFF' }} />
          <List>
            <ListItem
              button
              onClick={() => window.open('/brochure.pdf', '_blank')}
              sx={{
                '&:hover': {
                  backgroundColor: theme.palette.secondary.light,
                },
              }}
            >
              <ListItemText
                primary={
                  <Typography variant="body1" sx={{ color: '#FFFFFF' }}>
                    Download Brochure
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
