import React from 'react';
import OtherItem from '../helpers/OtherItem';
import writingThumbnail from '../../assets/writings_map.jpg';
import plantThumbnail from '../../assets/plant_pic.jpg';
import '../../styles/OtherPage.css';

function OtherPage() {
    return (
        <div className="other-container">
            <OtherItem
                thumbnail={writingThumbnail}
                title="Worldbuilding"
                summary="Stories about my fantasy setting, Stagnance"
            />
            <OtherItem
                thumbnail={plantThumbnail}
                title="Plants"
                summary="Check out a gallery of my beautiful plants"
            />
        </div>
    )
}

export default OtherPage;