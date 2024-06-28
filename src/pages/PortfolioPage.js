import React from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

const projects = [
  { title: "Project 1", image: "path/to/image1.jpg", description: "Description of project 1" },
  { title: "Project 2", image: "path/to/image2.jpg", description: "Description of project 2" },
  // Add more projects here
];

const PortfolioPage = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Our Portfolio
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt={project.title}
                height="140"
                image={project.image}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PortfolioPage;
