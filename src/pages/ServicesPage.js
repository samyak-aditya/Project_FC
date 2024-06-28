import React from 'react';
import { Typography, Container, List, ListItem, ListItemText } from '@mui/material';

const ServicesPage = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Our Services
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Website Development" />
        </ListItem>
        <ListItem>
          <ListItemText primary="E-commerce Solutions" />
        </ListItem>
        <ListItem>
          <ListItemText primary="SEO Optimization" />
        </ListItem>
        <ListItem>
          <ListItemText primary="UI/UX Design" />
        </ListItem>
      </List>
    </Container>
  );
};

export default ServicesPage;
