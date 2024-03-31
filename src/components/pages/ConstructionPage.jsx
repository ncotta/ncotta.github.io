import React from 'react';
import doggo from '../../assets/construction_doggo.png';
import '../../styles/ConstructionPage.css';

function ConstructionPage() {
    return (
        <div className="construction">
            <img className="doggo" src={doggo} />
            <h2>UNDER CONSTRUCTION</h2>
        </div>
    )
}

export default ConstructionPage;