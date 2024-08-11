
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FaCode, FaPaintBrush, FaConciergeBell } from 'react-icons/fa';

function Home() {
  return (
    <div className="container-fluid home-container">
      <div className="bottom-section">
        <h1 className="animated-text name-heading">KENT OLIVER C. CARTAGENA</h1>
        <div className="home-content">
          <div className="center-image animated-text">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.tXzQYIqN4DhumPqexGtXGwHaHa&pid=Api&P=0&h=180" // Replace with your image URL
              alt="Profile"
            />
          </div>
          <div className="right-side">
            <div className="service-heading-container">
              <h2 className="animated-text service-heading">Services</h2>
            </div>
            <div className="services-container">
              <div className="service-box animated-text">
                <FaCode className="service-icon" />
                <h3 className="service-title">Web Development</h3>
                <p className="service-description">Building robust and dynamic websites tailored to your needs.</p>
              </div>
              <div className="service-box animated-text">
                <FaPaintBrush className="service-icon" />
                <h3 className="service-title">UI/UX Design</h3>
                <p className="service-description">Crafting intuitive and visually appealing user experiences.</p>
              </div>
              <div className="service-box animated-text">
                <FaConciergeBell className="service-icon" />
                <h3 className="service-title">Web Consulting</h3>
                <p className="service-description">Offering expert advice to enhance your online presence.</p>
              </div>
            </div>
          </div>
        </div>
        {/* New Section */}
        <div className="why-hire-me animated-text">
          <h3>Why hire me for your next project?</h3>
          <p>With a proven track record of delivering high-quality work, I bring expertise and dedication to every project, ensuring your vision is realized with excellence.</p>
        </div>
        <div className="statistics">
          <div className="stat-box">
            <span className="highlighted-text">15k+</span><br />
            <span className="stat-description">Happy Customers</span>
          </div>
          <div className="stat-box">
            <span className="highlighted-text">100k+</span><br />
            <span className="stat-description">Followers</span>
          </div>
          <div className="stat-box">
            <span className="highlighted-text">10/10</span><br />
            <span className="stat-description">Rating</span>
          </div>
        </div>
        <Link to="/view-more" className="btn btn-primary mt-3">View More</Link>
      </div>
    </div>
  );
}

export default Home;
