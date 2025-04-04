import React from "react";
import { Container, Typography, List, ListItem, ListItemText } from "@mui/material";

const UserPortal = () => {
  const userBookings = [
    { id: 1, event: "Music Concert", date: "2025-05-10" },
    { id: 2, event: "Tech Conference", date: "2025-06-15" },
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>User Portal</Typography>
      <Typography variant="h6">Your Booked Events</Typography>
      <List>
        {userBookings.map((booking) => (
          <ListItem key={booking.id} divider>
            <ListItemText primary={`${booking.event} on ${booking.date}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default UserPortal;
