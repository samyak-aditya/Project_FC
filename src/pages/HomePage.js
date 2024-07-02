import React from 'react';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import FallingFruits from '../components/FallingFruits';
import './HomePage.css';


const HomePage = () => {
  return (
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
  );
};

export default HomePage;
