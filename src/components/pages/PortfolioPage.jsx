import React from 'react';
import PortfolioItem from '../helpers/PortfolioItem';
import websiteThumbnail from '../../assets/website_thumbnail.png';
import undergroundThumbnail from '../../assets/underground_thumbnail.png'
import '../../styles/PortfolioPage.css';

function PortfolioPage() {
    return (
        <div className="portfolio-container">
            <PortfolioItem 
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
                thumbnail={undergroundThumbnail}
                link=""
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