import React, { useEffect } from 'react';
import HeroArea from '../components/HeroArea';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Home = () => {
    const navigate = useNavigate()
    
    useEffect(() => {
        // axios.get('http://localhost:5000/user')
        //     .then(function (response) {
        //         // handle success
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //     })
        //     .finally(function () {
        //         // always executed
        //     });
    },[])
    return (
        <HeroArea>
            <p>Book Your Game</p>
            <h1>LET'S ENJOY THE <span style={{color: '#4fffff'}}>GAME</span></h1>
            <button onClick={()=>navigate('/slot-booking')}>Book Now</button>
        </HeroArea>
    );
};

export default Home;