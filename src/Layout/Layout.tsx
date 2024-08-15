import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { getUserProfile } from '../api/services';
import { useQuery } from 'react-query';
import Cookies from 'js-cookie';
import { Box, LinearProgress } from '@mui/material';
import './Layout.css'; // Ensure this file is imported for CSS

const Layout = () => {
  const encryptedUserId = Cookies.get('esrufoiprel');
  const [selectedTab, setSelectedTab] = useState('/dashboard');
  const [isScrolled, setIsScrolled] = useState(false);

  const fetchUserProfile = async (id: string) => {
    if (!id) throw new Error('User ID is required');
    return getUserProfile(id);
  };

  const { data, isLoading, error } = useQuery(
    ['getUserProfile', encryptedUserId],
    () => fetchUserProfile(encryptedUserId as string),
    {
      enabled: !!encryptedUserId,
    }
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isLoading)
    return (
      <Box sx={{ width: '100%', marginTop: '10px' }}>
        <LinearProgress />
      </Box>
    );
  if (error) return <div>Error loading profile</div>;

  return (
    <Box className="layout-container">
      <Box className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <Header selectedTab={selectedTab} onTabChange={setSelectedTab} />
      </Box>
      <Box className="content-container">
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;