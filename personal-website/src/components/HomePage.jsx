import React from 'react';
import profile_picture from '../assets/profile_picture.jpg';
import resume_download from '../assets/Niklaas Cotta Resume 2024.pdf'
import '../styles/HomePage.css';

function HomePage() {
	return (
		<div className="home-container">
                <div className="home-left">
                    <img className="profile-picture" src={profile_picture} />
                </div>
                <div className="home-right">
                    <h1 className="intro-section"> Niklaas Cotta </h1>
                    <p className="about-paragraph">
                        I'm a Full Stack Developer with particular experience in web development, infrastructure / DevOps, and game design.
                    </p>
                    <div className="resume-button">
                        <a href={resume_download} className="resume-download">
                        <span>Resume</span>    
                    </a>	
                    </div>
                </div>
		</div>
	)
}

export default HomePage;
