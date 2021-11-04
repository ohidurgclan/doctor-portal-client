import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoinBanner from '../AppoinBanner/AppoinBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <AppoinBanner></AppoinBanner>
        </div>
    );
};

export default Home;