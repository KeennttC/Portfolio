import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaCogs, FaBriefcase } from 'react-icons/fa'; // Import icons
import './About.css';

function About() {
  return (
    <div className="about-page-wrapper">
      <div className="about-container">
        <div className="about-main">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.avb9nDfw3kq7NOoP0grM4wHaEK&pid=Api&P=0&h=180"
            alt="Profile"
            className="profile-image"
          />
          <div className="about-text">
            <h1><center>About Me</center></h1>
            <p>
              My name is <strong>Kent Oliver C. Cartagena</strong>. I am 19 years old, living in Sunny Meadows Subdivision, Kidapawan City. I am a proud student of Notre Dame of Kidapawan Colleges, pursuing a Bachelor of Science in Information Technology. I completed my junior high school education at KCNHS and am now focused on completing my studies at this college. My hobbies include playing online games, solving puzzles, board games, and listening to music.
            </p>
          </div>
        </div>
        <div className="specialist-container">
          <h2><center><FaLaptopCode />WEB SPECIALIST IN KIDAPAWAN</center> </h2>
          <p>
            Providing cutting-edge web solutions to help businesses in Kidapawan thrive in the digital age. From creating responsive websites and intuitive user interfaces to offering expert web consulting services, I am dedicated to driving your online success and ensuring your digital presence stands out.
          </p>
        </div>
        <div className="skills-experience-container">
          <div className="skills-container">
            <h2><FaCogs /> Skills</h2>
            <ul>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>HTML5 & CSS3</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className="experience-container">
            <h2><FaBriefcase /> Experience</h2>
            <ul>
              <li>Created a blog platform with React.js for a class assignment.</li>
              <li>Completed an internship with front-end focus.</li>
              <li>Developed a small e-commerce site for a project.</li>
              <li>Created a blog platform with React.js for a class assignment.</li>
              <li>Assisted with coding at a local startup.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="navigation-buttons">
        <Link to="/view-more" className="nav-button">Previous</Link>
        <Link to="/projects" className="nav-button">Next</Link>
      </div>
    </div>
  );
}

export default About;
