import React from 'react';
import { Typography, Container, Grid, Paper } from '@mui/material';
import textures from '../assets/images/texture.png'

const AboutPage = () => {
  return (
    <Container
      style={{
        padding: '20px',
        backgroundImage: 'url("/texture.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '0px',
        marginTop: '0px',
        color: 'black', // Ensure text is readable over the background image
      }}
    >
      {/* <Typography variant="h2" component="h1" gutterBottom>
        About Us
      </Typography> */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography marginTop={10} variant="h5" component="h2" gutterBottom>
          FruitCreatives: Juicing Up Your Web Presence
          </Typography>
          {/* <Typography variant="body1" paragraph>
            FruitCreatives is dedicated to building high-quality websites for startups. Our mission is to help businesses establish their online presence and achieve their goals.
          </Typography> */}
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            style={{
              padding: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(0.3px)',
              WebkitBackdropFilter: 'blur(0.3px)',
            //   boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              borderRadius: '10px',
            }}
          >
            <Typography variant="h6" component="h3" gutterBottom>
              Client Testimonial
            </Typography>
            <Typography variant="body1" paragraph>
              "FruitCreatives transformed our online presence with a stunning website that perfectly captures our brand essence. Their team is incredibly talented and professional."
            </Typography>
            <Typography variant="body2" align="right">
              - Satisfied Client
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
