import React from 'react';
import { Typography, Container, List, ListItem, ListItemText } from '@mui/material';
import './TestimonialsPage.css';

const testimonials = [
  { name: "Shahe | Music Artist", feedback: "Fruit Creatives transformed our online presence with a stunning website that perfectly captures our brand essence." },
  { name: "Client 1", feedback: "FruitCreatives did an amazing job!" },
  { name: "Client 2", feedback: "Highly recommend FruitCreatives for web development." },
  // Add more testimonials here
];

const TestimonialsPage = () => {
  return (
    <Container maxWidth={'100vw'} className="testimonials-container">
      <Typography variant="h2" component="h1" gutterBottom className="testimonials-title">
        Client Testimonials
      </Typography>
      <List>
        {testimonials.map((testimonial, index) => (
          <ListItem key={index} className="testimonial-item">
            <ListItemText
              primary={<Typography variant="h6" className="testimonial-name">{testimonial.name}</Typography>}
              secondary={<Typography lineHeight={1.1} maxWidth={'60vw'} fontFamily={ "Noto Serif, serif"} fontSize={70} fontWeight={800} variant="body1" className="testimonial-feedback">{testimonial.feedback}</Typography>}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TestimonialsPage;
