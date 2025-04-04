import React from "react";
import { Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Container sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h4">About EventZen</Typography>
      <Typography variant="body1">EventZen helps you plan, manage, and execute events effortlessly.</Typography>
    </Container>
  );
};

export default About;
