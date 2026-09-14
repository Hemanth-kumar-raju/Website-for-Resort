import { useState } from 'react';

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return <section className="booking section" id="booking"><div className="container booking-grid">
    <div className="booking-copy"><p className="eyebrow">PLAN YOUR ESCAPE</p><h2>Stay with us.<br /><em>Make memories.</em></h2><p>Tell us your preferred dates and we'll get back to you with availability and the best available rate.</p><div className="contact-mini"><span>Reservations</span><a href="tel:+1 9876543210">+1 98765 43210</a><a href="mailto:reservations@aureliaresort.com">reservations@aureliaresort.com</a></div></div>
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-row"><label>Full Name<input type="text" name="name" placeholder="Your name" required /></label><label>Phone<input type="tel" name="phone" placeholder="+1 XXXXX XXXXX" required /></label></div>
      <div className="form-row"><label>Check-in<input type="date" name="checkin" required /></label><label>Check-out<input type="date" name="checkout" required /></label></div>
      <div className="form-row"><label>Guests<select name="guests"><option>1 Guest</option><option>2 Guests</option><option>3 Guests</option><option>4 Guests</option><option>5+ Guests</option></select></label><label>Room Type<select name="room"><option>Deluxe Retreat</option><option>Signature Suite</option><option>Private Villa</option></select></label></div>
      <label>Message<textarea name="message" rows="4" placeholder="Tell us about your stay..."></textarea></label>
      <button type="submit" className="btn btn-gold full">Request Reservation</button>
      {submitted && <p className="form-message">Thank you! Your reservation request has been received.</p>}
    </form>
  </div></section>;
}
