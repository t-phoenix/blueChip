import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {navlinks } from '../constants';
import "../styles/sidebar.css";

const Icon = ({ styles, name, imgUrl, selectedImg, isActive, disabled, handleClick }) => (
    <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#52BAD1]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
        {isActive === name ? (
            <div className='nav-icon-box-selected'>
                {selectedImg}
                <p className='icon-name-selected'>{name}</p>
            </div>
        ) : (
            <div className='nav-icon-box'>
               {imgUrl}
                <p className='icon-name'>{name}</p>
            </div>
        )}
    </div>
)

export default function Sideabar() {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState('dashboard');
    return (
        <div className='sidebar'>
                <div className="sidebar-nav">
                    {navlinks.map((link) => (
                        <Icon
                            className = "side-icons"
                            key={link.name}
                            {...link}
                            isActive={isActive}
                            handleClick={() => {
                                if (!link.disabled) {
                                    setIsActive(link.name);
                                    navigate(link.link);
                                }
                            }}
                        />
                    ))}
                </div>
        </div>
    )
}