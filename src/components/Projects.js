import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

function Projects() {
  const [modalImage, setModalImage] = useState(null);

  const handleOpenModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  return (
    <div className="outer-container">
      <div className="inner-container">
        <div className="projects-container">
          <h1>My Projects</h1>
          <div className="projects-grid">
            <div className="project-card" onClick={() => handleOpenModal('https://i.pinimg.com/originals/34/68/13/346813c937b31737fc99b82207b2bc3c.jpg')}>
              <img src="https://i.pinimg.com/originals/34/68/13/346813c937b31737fc99b82207b2bc3c.jpg" alt="Project 1" className="project-image" />
              <div className="project-info">
                <h3 className="project-title">Project 1</h3>
              </div>
              <p className="project-description">My first Project</p>
            </div>
            <div className="project-card" onClick={() => handleOpenModal('https://i.pinimg.com/1200x/af/21/69/af2169d1e8ab1271de0b33811382955b.jpg')}>
              <img src="https://i.pinimg.com/1200x/af/21/69/af2169d1e8ab1271de0b33811382955b.jpg" alt="Project 2" className="project-image" />
              <div className="project-info">
                <h3 className="project-title">Project 2</h3>
              </div>
              <p className="project-description">Project on GEC 5</p>
            </div>
            <div className="project-card" onClick={() => handleOpenModal('http://www.designyourway.net/blog/wp-content/uploads/2010/05/Excellent-Posters-From-The-Design-World-12.jpg')}>
              <img src="http://www.designyourway.net/blog/wp-content/uploads/2010/05/Excellent-Posters-From-The-Design-World-12.jpg" alt="Project 3" className="project-image" />
              <div className="project-info">
                <h3 className="project-title">Project 3</h3>
              </div>
              <p className="project-description">GEC 5 final project</p>
            </div>
            <div className="project-card" onClick={() => handleOpenModal('https://i.pinimg.com/originals/6b/3a/95/6b3a9573c42cd4889cc1e3c42082b582.jpg')}>
              <img src="https://i.pinimg.com/originals/6b/3a/95/6b3a9573c42cd4889cc1e3c42082b582.jpg" alt="Project 4" className="project-image" />
              <div className="project-info">
                <h3 className="project-title">Project 4</h3>
              </div>
              <p className="project-description">Poster project on GEC 13</p>
            </div>
            <div className="project-card" onClick={() => handleOpenModal('https://www.designyourway.net/blog/wp-content/uploads/2010/05/Excellent-Posters-From-The-Design-World-23.jpg')}>
              <img src="https://www.designyourway.net/blog/wp-content/uploads/2010/05/Excellent-Posters-From-The-Design-World-23.jpg" alt="Project 5" className="project-image" />
              <div className="project-info">
                <h3 className="project-title">Project 5</h3>
              </div>
              <p className="project-description">Optimum pride</p>
            </div>
            <div className="project-card" onClick={() => handleOpenModal('https://i.pinimg.com/originals/cb/68/a5/cb68a5cc3d88959b34eb5992c889d9d8.jpg')}>
              <img src="https://i.pinimg.com/originals/cb/68/a5/cb68a5cc3d88959b34eb5992c889d9d8.jpg" alt="Project 6" className="project-image" />
              <div className="project-info">
                <h3 className="project-title">Project 6</h3>
              </div>
              <p className="project-description">Marcus Aurelius</p>
            </div>
            <div className="project-card" onClick={() => handleOpenModal('https://www.designmantic.com/blog/wp-content/uploads/2017/10/Infiltration.jpg')}>
              <img src="https://www.designmantic.com/blog/wp-content/uploads/2017/10/Infiltration.jpg" alt="Project 7" className="project-image" />
              <div className="project-info">
                <h3 className="project-title">Project 7</h3>
              </div>
              <p className="project-description">Making my way downtown</p>
            </div>
            {/* New Project */}
            <div className="project-card" onClick={() => handleOpenModal('http://www.postermockup.com/wp-content/uploads/2019/01/Free-Brand-Stylish-Posters-Mockup-Template-600.jpg')}>
              <img src="http://www.postermockup.com/wp-content/uploads/2019/01/Free-Brand-Stylish-Posters-Mockup-Template-600.jpg" alt="Project 8" className="project-image" />
              <div className="project-info">
                <h3 className="project-title">Project 8</h3>
              </div>
              <p className="project-description">Dennis Shroeder & Sia</p>
            </div>
          </div>

          {modalImage && (
            <div className="modal-overlay" onClick={handleCloseModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={modalImage} alt="Project Preview" className="modal-image" />
              </div>
            </div>
          )}

          <div className="navigation-buttons">
            <Link to="/about" className="nav-button">Previous</Link>
            <Link to="/contact" className="nav-button">Next</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
