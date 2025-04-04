import React, { useState } from "react";

const AdminPortal = () => {
  const [bookings, setBookings] = useState([
    { id: 1, name: "Alice", event: "Music Concert", date: "2025-04-10", seats: 2 },
    { id: 2, name: "Bob", event: "Tech Talk", date: "2025-04-15", seats: 1 }
  ]);

  const handleDelete = (id) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
    alert("Booking Canceled");
  };

  return (
    <div>
      <h2>Admin Portal</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Event</th>
            <th>Date</th>
            <th>Seats</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.name}</td>
              <td>{booking.event}</td>
              <td>{booking.date}</td>
              <td>{booking.seats}</td>
              <td>
                <button onClick={() => handleDelete(booking.id)}>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPortal;
