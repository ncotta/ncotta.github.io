import React from 'react';
import ExperienceSkill from './ExperienceSkill';
import GithubIcon from '../../assets/github-mark.png';
import WebsiteIcon from '../../assets/websiteicon.png';
import '../../styles/helpers/PortfolioItem.css';

function PortfolioItem({ github=null, thumbnail, link=null, title, summary, skills }) {
    return (
        
        <div className="port-item-container">
            <img className="thumbnail" src={thumbnail}></img>
            <div className="icon-container">
                {github && 
                        <a className="github-link" href={github} target="_blank">
                            <img className="icon" src={GithubIcon} width="32" height="32" />
                        </a>    
                }
                {link && 
                    <a className="port-item-link" href={link} target="_blank">
                        <img className="icon" src={WebsiteIcon} width="32" height="32" />
                    </a>
                }
                </div>
            <h3 className="port-item-title">{title}</h3>
            <p className="port-item-summary">{summary}</p>
            <ul className="skill-ul">
                {skills.map((skill) => (
                    <ExperienceSkill text={skill} />
                ))}
            </ul>
        </div>
    );
}

export default PortfolioItem;