import React from 'react';
import PortfolioItem from '../helpers/PortfolioItem';
import websiteThumbnail from '../../assets/website_thumbnail.png';
import undergroundThumbnail from '../../assets/underground_thumbnail.png';
import worldbuilderThumbnail from '../../assets/worldbuilder_thumbnail.png';
import '../../styles/pages/PortfolioPage.css';

function PortfolioPage() {
    return (
        <div className="portfolio-container">
            <PortfolioItem 
                github="https://github.com/ncotta/ncotta.github.io"
                thumbnail={websiteThumbnail}
                link="https://ncotta.github.io/"
                title="Portfolio Website"
                summary="My current portfolio site, a significant upgrade from my old one."
                skills={[
                    "React",
                    "HTML",
                    "CSS"
                ]}
            />
            <PortfolioItem
                github="https://github.com/ncotta/WorldBuilder"
                thumbnail={worldbuilderThumbnail}
                link="https://worldbuilder.onrender.com"
                title="Worldbuilder"
                summary="I got fed up with note-taking applications, so I made my own."
                skills={[
                    "React",
                    "MongoDB",
                    "Express.js",
                    "Node.js"
                ]}
            />
            <PortfolioItem 
                thumbnail={undergroundThumbnail}
                title="Rocket League Competition Website"
                summary="A website made with Flask to host Rocket League competitions."
                skills={[
                    "JavaScript",
                    "Python",
                    "MySQL"
                ]}
            />
        </div>
    )
}

export default PortfolioPage;