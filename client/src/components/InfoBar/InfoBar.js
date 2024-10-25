import React from 'react';

import closeIcon from '../../icons/closeIcon.png'
import onlineIcon from '../../icons/onlineIcon.png'

const InfoBar = ({ room }) => (
    <div className="d-flex justify-content-between align-items-center bg-primary text-white px-3 py-2 rounded-top">
        <div className="d-flex align-items-center">
            <img src={onlineIcon} className="me-2" alt="online" />
            <h3 className="mb-0">{room}</h3>
        </div>
            <a href="/"><img src={closeIcon} alt="close" /></a>
    </div>
);

export default InfoBar;