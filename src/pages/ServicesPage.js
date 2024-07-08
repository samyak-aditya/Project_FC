import React from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import ecommerce from '../assets/images/online-shopping-concept-landing-page_23-2148253518.jpg';
import webdev from '../assets/images/webdev.jpg';
import seo from '../assets/images/seo.jpg';
import uiux from '../assets/images/UIUX.jpg';
import './ServicesPage.css';

const services = [
  { title: 'Website Development', image: webdev },
  { title: 'E-commerce Solutions', image: ecommerce },
  { title: 'SEO Optimization', image: seo },
  { title: 'UI/UX Design', image: uiux },
];

const ServicesPage = () => {
  return (
    <Container maxWidth={'100vw'} className="containerbg">
      <Typography variant="h2" component="h1" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card className="service-card">
              <CardMedia
                component="img"
                alt={service.title}
                height="140"
                image={service.image}
                
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {service.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicesPage;
