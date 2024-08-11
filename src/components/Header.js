import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import './Header.css';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="top-section">
          <div className="title">My Portfolio</div>
          <div className="social-icons">
            <a href="https://www.facebook.com/pstng.ywa" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/keennttc/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/channel/UCd9pBI3gwzKOl8nb-szMwcg" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
