import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import './ViewMore.css';

function ViewMore() {
  return (
    <div className="container-fluid view-more-container">
      <div className="view-more-background">
        <div className="teasers-section">
          <Link to="/about" className="teaser about">
            <h2>About Me</h2>
            <p>Discover who I am, my journey, and what drives me in my professional and personal life.</p>
          </Link>
          <Link to="/projects" className="teaser projects">
            <h2>Projects</h2>
            <p>Explore a selection of my projects and see the skills and creativity I bring to each one.</p>
          </Link>
          <Link to="/contact" className="teaser contact">
            <h2>Contact Me</h2>
            <p>Find out how to get in touch with me for collaborations, opportunities, or just to say hello.</p>
          </Link>
        </div>
        <Link to="/home" className="home-button">Home</Link>
      </div>
    </div>
  );
}

export default ViewMore;
