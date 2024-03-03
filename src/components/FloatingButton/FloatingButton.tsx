import React, { useState } from 'react';
import { FiPhone } from 'react-icons/fi';
import './FloatingButton.css'; // Create a CSS file for styling
import { FaInstagram, FaTelegram } from 'react-icons/fa';

const FloatingButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    const toggleHover = () => {
        setIsHovered((prev) => !prev);
    };

    return (
        <div className={`floating-container ${isHovered ? 'hover' : ''}`} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            <div className="floating-button flex justify-center items-center">
                <FiPhone />
            </div>
            <div className="element-container">
                <a href="" target='_blank' rel="noreferrer" className="float-element tooltip-left flex justify-center items-center">
                    <FiPhone size={24} />
                </a>
                <a href="" target='_blank' rel="noreferrer" className="float-element tooltip-left flex justify-center items-center">
                    <FaTelegram size={24} />
                </a>
                <a href="" target='_blank' rel="noreferrer" className="float-element tooltip-left flex justify-center items-center">
                    <FaInstagram size={24} />
                </a>
            </div>
        </div>
    );
};

export default FloatingButton;