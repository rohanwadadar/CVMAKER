// Contact.js
import React from 'react';
import './Contact.css'; // Import the Contact styles

const Contact = () => {
  return (
    <section id="Contact" className="contact-section">
      <div className="contact-container">
        <h1>Contact</h1>
        <div className="contact-info">
          <h3>Contact Information:</h3>
          <p>
            Email: <a href="mailto:rwadadar@gmail.com">rwadadar@gmail.com</a>
          </p>
          <p>Phone: 7595921010</p>
          <p>LinkedIn: Rohan Wadadar</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
