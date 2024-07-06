import React from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

const services = [
  { title: 'Website Development', image: 'https://via.placeholder.com/150?text=Website+Development' },
  { title: 'E-commerce Solutions', image: 'https://via.placeholder.com/150?text=E-commerce+Solutions' },
  { title: 'SEO Optimization', image: 'https://via.placeholder.com/150?text=SEO+Optimization' },
  { title: 'UI/UX Design', image: 'https://via.placeholder.com/150?text=UI%2FUX+Design' },
];

const ServicesPage = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
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
