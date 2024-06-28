import React from 'react';
import { Typography, Container, TextField, Button, Box } from '@mui/material';

const ContactPage = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
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
        <Button variant="contained" color="primary" sx={{ m: 1 }}>
          Send
        </Button>
      </Box>
    </Container>
  );
};

export default ContactPage;
