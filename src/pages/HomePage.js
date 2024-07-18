import React from 'react';
import { Typography,AppBar,Toolbar } from '@mui/material';
import { motion } from 'framer-motion';
import FallingFruits from '../components/FallingFruits';
import './HomePage.css';
import BookcallButton from '../components/3DButton';

const HomePage = () => {
  return (
    <>
    <AppBar position="static"  style={{
      backgroundColor: 'rgba(0, 0, 0,0.5 )', // Adjust opacity as needed
      backdropFilter: 'blur(10px)', // Add blur effect
      WebkitBackdropFilter: 'blur(10px)', // For Safari
      //boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', // Add a subtle shadow
    }}>
        <Toolbar >
          <Typography variant="h6" fontSize={40} fontFamily={'Bebas Neue, sans-serif'} component="div" sx={{ flexGrow: 1, color: 'orange' }}>
            Fruit Creatives
          </Typography>
          <BookcallButton />
          {/* <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/about">About</Button>
          <Button color="inherit" href="/services">Services</Button>
          <Button color="inherit" href="/portfolio">Portfolio</Button>
          <Button color="inherit" href="/testimonials">Testimonials</Button>
          <Button color="inherit" href="/contact">Contact</Button> */}
        </Toolbar>
      </AppBar>
    <div className="home-container">
      
      <FallingFruits/>
      
      <motion.div
        className="center-text"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <Typography
          className="openingpage"
          variant="h1"
          component="h1"
          color="secondary"
          maxHeight={'100vh'}
          sx={{
            fontSize: '10vw',
            fontFamily: 'Bebas Neue, sans-serif',
            fontWeight: 400,
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex:"-1"
          }}
        >
          Fruit Creatives
        </Typography>
      
      </motion.div>
      
      
    </div>
    </>
  );
};

export default HomePage;
