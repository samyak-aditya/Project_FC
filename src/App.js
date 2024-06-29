import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline, AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import theme from './theme/theme';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';

import './App.css';
import BookcallButton from './components/3DButton';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppBar position="static"  style={{
        backgroundColor: 'rgba(0, 0, 0,1 )', // Adjust opacity as needed
        backdropFilter: 'blur(10px)', // Add blur effect
        WebkitBackdropFilter: 'blur(10px)', // For Safari
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', // Add a subtle shadow
      }}>
          <Toolbar >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              FruitCreatives
            </Typography>
            <BookcallButton />
            {/* <Button color="inherit" href="/">Home</Button>
            <Button color="inherit" href="/about">About</Button>
            <Button color="inherit" href="/services">Services</Button>
            <Button color="inherit" href="/portfolio">Portfolio</Button>
            <Button color="inherit" href="/testimonials">Testimonials</Button>
            <Button color="inherit" href="/contact">Contact</Button> */}
          </Toolbar>
        </AppBar>
        <HomePage />
        <AboutPage />
        {/* <Container>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Container> */}
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
