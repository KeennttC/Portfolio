import React, { useRef } from 'react';
import './Contact.css';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

function Contact() {
  // Create a reference to the form element
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_123',    // Replace with your EmailJS service ID
      'template_123',   // Replace with your EmailJS template ID
      formRef.current,  // Use the form reference here
      'tu37p2Bnehh8zatwf' // Replace with your EmailJS user ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Email sent successfully!');
      formRef.current.reset(); // Clear form fields after successful submission
    }).catch((error) => {
      console.log('FAILED...', error);
      alert('Error sending email: ' + error);
    });
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-content">
        <div className="contact-form">
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" name="from_name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" name="reply_to" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
        <div className="other-contact-info">
          <h4>Other Contact Information</h4>
          <p>Email: kentolivercanturnacartagena@gmail.com</p>
          <p>Phone: 09672015712</p>
          <div className="social-media-icons">
            <a href="https://www.facebook.com/pstng.ywa" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/keennttc/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/channel/UCd9pBI3gwzKOl8nb-szMwcg" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className="navigation-buttons">
        <Link to="/projects" className="nav-button previous-button">Previous</Link>
        <Link to="/home" className="nav-button home-button">Home</Link>
      </div>
    </div>
  );
}

export default Contact;
