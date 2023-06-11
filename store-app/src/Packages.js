import React from 'react';
import { Link } from 'react-router-dom';
import SectionBanner from './SectionBanner';

const Packages = () => {
  return (
    <>
        <SectionBanner />

    <div className="packages">
      <h2>Our Packages</h2>
      <div className="package-card">
        <h3>Basic Package</h3>
        <p>Development of a static website with up to 5 pages. Suitable for small businesses and personal sites.</p>
        <p>Rate: $2000</p>
        <Link to="/contact" className="contact-btn">Contact Us</Link>
      </div>
      <div className="package-card">
        <h3>Professional Package</h3>
        <p>Development of a dynamic website with up to 10 pages. Includes a content management system. Suitable for medium-sized businesses.</p>
        <p>Rate: $4000</p>
        <Link to="/contact" className="contact-btn">Contact Us</Link>
      </div>
      <div className="package-card">
        <h3>Premium Package</h3>
        <p>Development of a complex web application with custom features. Suitable for large businesses and e-commerce sites.</p>
        <p>Rate: $8000</p>
        <Link to="/contact" className="contact-btn">Contact Us</Link>
      </div>
    </div>
    </>
  );
};

export default Packages;
