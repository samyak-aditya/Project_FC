import React from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import ecommerce from '../assets/images/online-shopping-concept-landing-page_23-2148253518.jpg';
import webdev from '../assets/images/webdev.jpg';
import seo from '../assets/images/seo.jpg';
import uiux from '../assets/images/UIUX.jpg';
import './ServicesPage.css';
import { motion } from "framer-motion";

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
            <motion.div
      className="box"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
            <Card style={{ backgroundColor: 'black', color: 'white' }}>
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
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicesPage;
