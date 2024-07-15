import React from 'react';
import './ContactPage.css';
import { Typography, Container, TextField, Button, Box, Card, CardContent } from '@mui/material';

const ContactPage = () => {
  return (
    <Container maxWidth={'100vw'}  className="Contactcontainer">
      <Card className="contact-card">
        <CardContent>
          <Typography variant="h2" component="h1" gutterBottom className="contact-heading">
            Contact Us
          </Typography>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField required id="name" label="Name" variant="outlined" />
            <TextField required id="email" label="Email" variant="outlined" />
            <TextField
              required
              id="message"
              label="Message"
              variant="outlined"
              multiline
              rows={4}
            />
            <Button variant="contained" className="contact-button" sx={{ m: 1 }}>
              Send
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ContactPage;
