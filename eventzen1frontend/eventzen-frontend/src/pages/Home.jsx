import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h3">Welcome to EventZen</Typography>
      <Typography variant="subtitle1">Plan & manage events with ease.</Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }} component={Link} to="/events">
        View Events
      </Button>
    </Container>
  );
};

export default Home;
