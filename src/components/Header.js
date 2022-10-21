import './HeaderStyles.css';
import React from 'react';
import image from '../Assets/bg-image1.png';

export const Header = () => {
    return (
        <div className='header'>
            <div className='mask'>
                <img className='img' src={image} alt='img' />
            </div>
            <div className='content'>
                <h1>Community</h1>
                <p>Ideas of the open world</p>
            </div>
        </div>
    )
}

