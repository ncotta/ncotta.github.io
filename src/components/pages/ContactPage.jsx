import React from 'react';
import github from '../../assets/github-mark.png';
import linkedin from '../../assets/linkedin-mark.png';
import '../../styles/ContactPage.css';

function ContactPage() {
    return (
        <div className="contact-container">
            <div className="contact-info">
                <h4>Feel free to contact me, or see me on other platforms.</h4>
                <p className="contact-paragraph">
                    <br/>
                    Email: <a href="mailto:nikcotta@gmail.com">nikcotta@gmail.com</a> 
                    <br/>
                </p>
                <p className="contact-paragraph">
                    On the web: 
                </p>
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
            </div>
            <div className="video-container">
                <div className="transparent-overlay">
                    <svg viewBox='0 0 1020 575' xmlns='http://www.w3.org/2000/svg'>
                        <filter id='noiseFilter'>
                            <feTurbulence 
                            type='fractalNoise' 
                            baseFrequency='1' 
                            numOctaves='1' 
                            stitchTiles='stitch'/>
                            <feColorMatrix 
                                type='matrix' 
                                values='.1 0 0 0 0 
                                        0 .6 0 0 0 
                                        0 0 .6 0 0 
                                        0 0 0 .4 0'
                            />
                        </filter>
                        <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
                    </svg>
                </div>
                <iframe 
                    className="video-player"
                    width="1020" 
                    height="575" 
                    src="https://www.youtube.com/embed/6S4qvf97cbQ?autoplay=1&vq=small" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen
                >
                </iframe>
            </div>
            
        </div>
    )
}

export default ContactPage;