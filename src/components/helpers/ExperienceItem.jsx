import React from "react";
import '../../styles/ExperienceItem.css';

function ExperienceItem({dates, company, link, title, snippets}) {
    return (
        <div className="exp-item-container">
            <h4 className="exp-item-dates">{dates}</h4>
            <a className="exp-item-link" href={link}>
                <h3 className="exp-item-title">{title} · {company}</h3>
            </a>
            <ul>
                {snippets.map((snippet) => (
                    <li className="exp-li-snippet">{snippet}</li>
                ))}
            </ul>
        </div>
    );
}

export default ExperienceItem;