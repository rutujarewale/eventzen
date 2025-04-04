import React from "react";
import { Container, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Container sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h4">Contact Us</Typography>
      <Typography variant="body1">For inquiries, email us at support@eventzen.com</Typography>
    </Container>
  );
};

export default Contact;
