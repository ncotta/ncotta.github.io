import React from 'react';
import ExperienceItem from '../helpers/ExperienceItem';
import '../../styles/AboutPage.css';

function AboutPage() {
    return (
        <div className="about-container">
            <div className="about-left">
                <div className="about-paragraph">
                    <p>
                        I have been a professional developer for a little over a year. I currently work at Mentia as a Full Stack Developer. I graduated from the University of Oregon
                        in 2022 with a Bachelor's degree in Computer Science. I am also certified in AWS.
                    </p>
                </div>
                <div className="experience-container">
                    <h4>Experience</h4>
                    <ExperienceItem 
                        dates={"Feb 2023 - Present"} 
                        company={"Mentia DTX, Inc."} 
                        link={"https://www.mentia.me"} 
                        title={"Full Stack Developer"} 
                        snippets={[
                            "Expounded upon existing website UI, API, and database to implement new features and fixed existing bugs",
                            "Refactored and facilitated update of the legacy code base from React 16 to 17, updated NPM packages accordingly, \
                            and replaced deprecated ones. Helped transform code from old class components to functional components and implemented React hooks",
                            "Performed DevOps duties, such as setting up a Kubernetes cluster for a new application. Updated existing Kubernetes clusters from v1.21 to v1.28",
                            "Administrated Ubuntu VPS, managed users, reinstated SSL certificates, maintained Apache 2 web server",
                            "Managed AWS and other cloud resources including VPS, kubernetes clusters, compute instances, and DNS records",
                            "Wrote several scripts in Python focused on automation",
                            "Demonstrated adaptability in learning new technologies, self-management, and resilience in a startup environment"
                        ]} 
                    />
                </div>
            </div>
            <div className="about-right">
                <div className="relevant-skills">
                    <h4>Skills</h4>
                    <ul className="skills-list">
                        <li>Frontend development and UI design</li> 
                        <li>Backend development and REST API implementation</li> 
                        <li>DevOps / Infrastructure / Automation</li>
                        <li>Cloud Architecture</li>
                        <li>Linux System Administration</li>
                    </ul> 
                    <h4>I have over one year of professional experience with:</h4>
                    <ul className="skills-list">
                        <li>Frontend -- JavaScript, React JS, NPM</li>
                        <li>Backend -- PHP, CakePHP, MySQL</li>
                        <li>Automation & Deployment -- Kubernetes, Docker, GitHub Actions</li>
                        <li>Cloud -- AWS, GCP</li>
                        <li>System Administration -- Ubuntu, Apache2</li>
                        <li>Scripting -- Python</li>
                    </ul>
                </div>
                
                <div className="other-skills">
                    <h4>I have personal experience with:</h4>
                    <ul className="skills-list">
                        <li>Mobile Dev -- Kotlin</li>
                        <li>Databases -- MongoDB</li>
                        <li>Game Dev -- Unity</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;