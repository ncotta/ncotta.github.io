import React from "react";
import ExperienceSkill from "./ExperienceSkill";
import '../../styles/ExperienceItem.css';

function ExperienceItem({dates, company, link, title, snippets, skills}) {
    return (
        <div className="exp-item-container">
            <h4 className="exp-item-dates">{dates}</h4>
            <a className="exp-item-link" href={link}>
                <h3 className="exp-item-title">{title} · {company}</h3>
            </a>
            <ul className="exp-ul">
                {snippets.map((snippet) => (
                    <li className="exp-li-snippet">{snippet}</li>
                ))}
            </ul>
            <ul className="skill-ul">
                {skills.map((skill) => (
                    <ExperienceSkill text={skill} />
                ))}
            </ul>
        </div>
    );
}

export default ExperienceItem;