import React from 'react';
import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import FallingFruits from '../components/FallingFruits';
import './HomePage.css';
import Background from '../components/Background';

const HomePage = () => {
  return (
    <div className="home-container">

    
      
      <motion.div
        className="center-text"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
          <FallingFruits />
          <Typography
          variant="h1"
          component="h1"
          color="primary"
          sx={{ fontFamily: 'Bebas Neue, sans-serif', fontWeight: 400 }}
        >
          Fruit Creatives
        </Typography>
      </motion.div>
    </div>
  );
};

export default HomePage;
