import React, { useState } from "react";
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button, TextField } from "@mui/material";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([
    { id: 1, name: "Riya", event: "Fashion Show", seats: 2, approved: false },
    { id: 2, name: "Om", event: "Tech Expo", seats: 1, approved: false },
  ]);

  const [search, setSearch] = useState("");

  const handleApprove = (id) => {
    setBookings(bookings.map(b => b.id === id ? { ...b, approved: true } : b));
  };

  const handleDelete = (id) => {
    setBookings(bookings.filter(b => b.id !== id));
  };

  const filtered = bookings.filter(b =>
    b.name.toLowerCase().includes(search.toLowerCase()) ||
    b.event.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
      <TextField label="Search by name or event" fullWidth sx={{ mb: 3 }} value={search} onChange={(e) => setSearch(e.target.value)} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Booking ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Event</TableCell>
            <TableCell>Seats</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filtered.map(b => (
            <TableRow key={b.id}>
              <TableCell>{b.id}</TableCell>
              <TableCell>{b.name}</TableCell>
              <TableCell>{b.event}</TableCell>
              <TableCell>{b.seats}</TableCell>
              <TableCell>{b.approved ? "Approved" : "Pending"}</TableCell>
              <TableCell>
                <Button onClick={() => handleApprove(b.id)} disabled={b.approved} color="success">Approve</Button>
                <Button onClick={() => handleDelete(b.id)} color="error">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default AdminDashboard;
