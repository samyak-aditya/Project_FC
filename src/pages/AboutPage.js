import React from 'react';
import { Typography, Container } from '@mui/material';

const AboutPage = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        FruitCreatives is dedicated to building high-quality websites for startups. Our mission is to help businesses establish their online presence and achieve their goals.
      </Typography>
    </Container>
  );
};

export default AboutPage;
