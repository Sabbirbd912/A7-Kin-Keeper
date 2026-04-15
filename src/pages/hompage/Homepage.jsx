import React from 'react';
import HeadSection from '../../comonents/homePage/HeadSection';
import CountSection from '../../comonents/homePage/CountSection';
import FriendsData from '../../comonents/homePage/FriendsData';


const HomePage = () => {
    return (
        <div>
            <HeadSection></HeadSection>
            <CountSection></CountSection>
            <FriendsData></FriendsData>
        </div>
    );
};

export default HomePage;