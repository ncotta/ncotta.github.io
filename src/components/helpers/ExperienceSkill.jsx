import React from 'react';
import '../../styles/ExperienceSkill.css';

function ExperienceSkill({text}) {
    return (
        <div className="exp-skill-container">
            <span className="text">{text}</span>
        </div>
    );
}

export default ExperienceSkill;