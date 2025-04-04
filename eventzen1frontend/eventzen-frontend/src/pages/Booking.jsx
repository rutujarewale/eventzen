import React, { useState } from "react";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    event: "",
    date: "",
    seats: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Successful for ${formData.event}!`);
  };

  return (
    <div>
      <h2>Book an Event</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="text" name="event" placeholder="Event Name" onChange={handleChange} required />
        <input type="date" name="date" onChange={handleChange} required />
        <input type="number" name="seats" placeholder="Seats" onChange={handleChange} required />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default Booking;
