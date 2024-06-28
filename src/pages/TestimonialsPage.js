import React from 'react';
import { Typography, Container, List, ListItem, ListItemText } from '@mui/material';

const testimonials = [
  { name: "Client 1", feedback: "FruitCreatives did an amazing job!" },
  { name: "Client 2", feedback: "Highly recommend FruitCreatives for web development." },
  // Add more testimonials here
];

const TestimonialsPage = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Client Testimonials
      </Typography>
      <List>
        {testimonials.map((testimonial, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={testimonial.name}
              secondary={testimonial.feedback}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TestimonialsPage;
