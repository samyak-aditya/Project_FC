import React from 'react';
import { Typography, Container, Grid, Paper } from '@mui/material';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <Container  
      className='backgroundtexture'
      maxWidth={'100vw'}
      style={{
        width: '100%',
        padding: '20px',
        position: 'relative',
        backgroundImage: 'url("/textures1.png")',
        backgroundColor: '#f98949',
        backgroundPosition: 'center',
        
        borderRadius: '0px',
        marginLeft: '0px',
        color: 'black', // Ensure text is readable over the background image
        zIndex: '5'
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography
            marginLeft={{ xs: 2, md: 20 }}
            fontWeight={700}
            className='tagline'
            marginTop={10}
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              fontSize: { xs: '3em', sm: '5em', md: '8em' },
              fontFamily: 'Domine, serif',
            }}
          >
            Juicing Up Your Web <span className="highlighted-text">Presence</span>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div
            style={{
              width: '40%',
              backgroundColor: "red",
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end'
            }}
          >
            <Paper
              variant="outlined"
              elevation={3}
              style={{
                width: '90%',
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(0.3px)',
                WebkitBackdropFilter: 'blur(0.3px)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <Typography variant="h6" component="h3" gutterBottom>
                Client Testimonial
              </Typography>
              <Typography
                fontSize={{ xs: 16, sm: 18, md: 20 }}
                fontFamily={"Assistant, sans-serif"}
                fontWeight={600}
                variant="body1"
                paragraph
              >
                "FruitCreatives transformed our online presence with a stunning website that perfectly captures our brand essence. Their team is incredibly talented and professional."
              </Typography>
              <Typography variant="body2" align="right">
                - Satisfied Client
              </Typography>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
