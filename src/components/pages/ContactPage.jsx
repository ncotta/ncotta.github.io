import React from 'react';
import github from '../../assets/github-mark.png';
import linkedin from '../../assets/linkedin-mark.png';
import '../../styles/ContactPage.css';

function ContactPage() {
    return (
        <div className="contact-container">
            <h4>Feel free to contact me, or see me on other platforms.</h4>
            <p className="contact-paragraph">
                <br/>
                Email: <a href="mailto:nikcotta@gmail.com">nikcotta@gmail.com</a> 
                <br/>
            </p>
            <p className="contact-paragraph">
                On the web: 
                <ul className="media-list">
                    <li>
                        <a href="https://github.com/ncotta" target="_blank">
                            <img className="media-logo" src={github} />
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/niklaas-cotta" target="_blank">
                        <img className="media-logo" src={linkedin} />
                        </a>
                    </li>
                </ul>
            </p>
        </div>
    )
}

export default ContactPage;