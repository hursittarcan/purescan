import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // replace with your logo path

const SplashScreen: React.FC = () => {
    const navigate = useNavigate();
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => navigate('/home'), 1500); // navigate to the home page after 1 second
        }, 1000);
        return () => clearTimeout(timer); // clean up the timer
    }, [navigate]);

    return (
        <div className={`splash-container ${fadeOut ? 'fade-out' : ''}`}>
            <img src={logo} alt="Logo" className="splash-logo" />
        </div>
    );
};

export default SplashScreen;
