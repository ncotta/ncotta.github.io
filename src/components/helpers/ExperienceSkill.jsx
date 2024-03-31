import React from 'react';
import '../../styles/helpers/ExperienceSkill.css';

function ExperienceSkill({text}) {
    return (
        <div className="exp-skill-container">
            <span className="text">{text}</span>
        </div>
    );
}

export default ExperienceSkill;