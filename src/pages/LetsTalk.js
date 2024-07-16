// src/components/LetsTalk.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import './LetsTalk.css';

const LetsTalk = () => {
  return (
    <Box className="lets-talk-section" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Typography variant="h2" className="lets-talk-title">
        Let's Talk
      </Typography>
      <Typography variant="body1" className="lets-talk-description">
        We are here to help you. Book a meeting with us and let's discuss how we can assist you with your project.
      </Typography>
      <Button variant="contained" color="primary" className="book-meeting-button">
        Book a Meeting
      </Button>
    </Box>
  );
};

export default LetsTalk;
