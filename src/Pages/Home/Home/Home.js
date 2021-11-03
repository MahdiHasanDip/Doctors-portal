import React from 'react';
import Navigation from "../../Shared/Navigation/Navigation"
import AppoinmentBanner from '../../Home/AppoinmentBanner/AppoinmentBanner';
import Services from '../../Home/Services/Services';
import "./Home.css"
import Banner from '../Banner/Banner';
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner/>
            <Services></Services>
            <AppoinmentBanner></AppoinmentBanner>
        </div>
    );
};

export default Home;