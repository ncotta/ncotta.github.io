import React from 'react';
import ExperienceSkill from './ExperienceSkill';
import '../../styles/helpers/PortfolioItem.css';

function PortfolioItem({ thumbnail, link, title, summary, skills }) {
    return (
        <a className="port-item-link" href={link} target="_blank">
            <div className="port-item-container">
                <img src={thumbnail}></img>
                <h3 className="port-item-title">{title}</h3>
                <p className="port-item-summary">{summary}</p>
                <ul className="skill-ul">
                    {skills.map((skill) => (
                        <ExperienceSkill text={skill} />
                    ))}
                </ul>
            </div>
        </a>
    );
}

export default PortfolioItem;