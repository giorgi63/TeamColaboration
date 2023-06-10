// Footer.js
import React from 'react';

const Footer = () => (
  <footer style={{ backgroundColor: '#F2F2F2', padding: '20px', textAlign: 'center' }}>
    <div>
      <h4>Sections</h4>
      <a href="/products">Products</a>
      <br />
      <a href="/about">About</a>
    </div>
    <div>
      <h4>Contact Us</h4>
      <p>Email: info@yourstore.com</p>
      <p>Phone: +123456789</p>
    </div>
    <div>
      <h4>Follow us</h4>
      <p>
        <a href="http://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
        <br />
        <a href="http://www.twitter.com" target="_blank" rel="noreferrer">Twitter</a>
      </p>
    </div>
    <div>
      <p>© 2023 Your Store</p>
    </div>
  </footer>
);

export default Footer;
