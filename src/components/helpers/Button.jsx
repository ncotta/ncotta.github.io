import React from 'react';
import '../../styles/Button.css';

function Button({className, link, text}) {
    return (
        <div className={`button ${className}`}>
            <a href={link} className="download" target="_blank">
                <span>{text}</span>
            </a>	
        </div>
    );
}

export default Button;