import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form>
        <label htmlFor="name">
          Name
          <input type="text" id="name" required />
        </label>
        <label htmlFor="email">
          Email
          <input type="email" id="email" required />
        </label>
        <label htmlFor="phone">
          Phone
          <input type="tel" id="phone" />
        </label>
        <label htmlFor="subject">
          Subject
          <input type="text" id="subject" required />
        </label>
        <label htmlFor="message">
          Message
          <textarea id="message" rows="4" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
