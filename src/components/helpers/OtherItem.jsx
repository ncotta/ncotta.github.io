import React from 'react';
import '../../styles/helpers/OtherItem.css';

function OtherItem({ thumbnail, title, summary }) {
    return (
        <div className="other-item-container">
            <img src={thumbnail}></img>
            <h3 className="other-item-title">{title}</h3>
            <p className="other-item-summary">{summary}</p>
        </div>
    );
}

export default OtherItem;