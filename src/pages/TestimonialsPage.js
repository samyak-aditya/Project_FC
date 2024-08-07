import React from 'react';
import { Typography, Container, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Avatar } from '@mui/material';

import './TestimonialsPage.css';

const testimonials = [
  { 
    name: "Shahe | Music Artist", 
    feedback: "Fruit Creatives transformed our online presence with a stunning website that perfectly captures our brand essence.", 
    image: "https://example.com/path/to/shahe-image.jpg" 
  },
  // { 
  //   name: "Jane Doe | Graphic Designer", 
  //   feedback: "Working with Fruit Creatives was a fantastic experience. Their team is professional and highly skilled.", 
  //   image: "https://example.com/path/to/jane-image.jpg" 
  // },
  // { 
  //   name: "John Smith | Entrepreneur", 
  //   feedback: "Fruit Creatives helped us achieve our business goals with a user-friendly and aesthetically pleasing website.", 
  //   image: "https://example.com/path/to/john-image.jpg" 
  // }
  // Add more testimonials with image properties here
];

const TestimonialsPage = () => {
  return (
    <Container maxWidth={'100vw'} className="testimonials-container">
      
      <List>
        {testimonials.map((testimonial, index) => (
          <ListItem key={index} className="testimonial-item" alignItems="flex-start">
           
            <ListItemText 
              primary={
                <Typography 
                
                  marginLeft={20}
                  lineHeight={1.1} 
                  maxWidth={'60vw'} 
                  fontFamily={"Noto Serif, serif"} 
                  fontSize={50} 
                  fontWeight={800} 
                  variant="body1" 
                  className="testimonial-feedback"
                >
                   <ListItemIcon>
              <img src="https://cdn-icons-png.flaticon.com/512/25/25672.png" alt="quotes" style={{height: "40px" , width: "40px"}} />
            </ListItemIcon>
            <br />
                  {testimonial.feedback}
                </Typography>
              }
              secondary={
                <div className="testimonial-details">
                  
                  <Typography marginLeft={20} variant="h6" className="testimonial-name">
                  <ListItemAvatar>
                    <Avatar src={testimonial.image} alt={testimonial.name} className="testimonial-avatar" />
                  </ListItemAvatar>
                    {testimonial.name}
                  </Typography>
                </div>
              }
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TestimonialsPage;
