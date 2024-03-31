import React from "react";
import ExperienceSkill from "./ExperienceSkill";
import '../../styles/helpers/ExperienceItem.css';

function ExperienceItem({ dates, company, link, title, snippets, skills }) {
    return (
        <a className="exp-item-link" href={link} target="_blank">
            <div className="exp-item-container">
                <h4 className="exp-item-dates">{dates}</h4>
                <h3 className="exp-item-title">{title} · {company}</h3>
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
        </a>
    );
}

export default ExperienceItem;