import React from 'react'

function HomePage() {
	return (
		<div className="home-container">
            <img src="../assets/profile_picture.jpg" />
            <h1 className="intro-section"> Hello, I'm <span> Niklaas Cotta </span> </h1>
            <p className="about-paragraph">
                I'm a Full Stack Developer with particular experience in web development, infrastructure / DevOps, and game design.
            </p>
            <div className="resume-button-container">
                <a href="../assets/Niklaas Cotta Resume 2024.pdf">
                    <span className="resume-text">Resume</span>
                    <span className="resume-download">
                        <i className=""></i>
                    </span>
                </a>
            </div>
				
		</div>
	)
}

export default HomePage;
