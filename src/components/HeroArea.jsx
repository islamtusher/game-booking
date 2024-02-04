import React from 'react';
import TopNavbar from './TopNavbar';

const HeroArea = ({children}) => {
    return (
        <div className="hero-image">
            <TopNavbar/>
            <div className="hero-text">
                {children}
            </div>
            
        </div>
    );
};

export default HeroArea;