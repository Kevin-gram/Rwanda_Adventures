// mainpage.jsx
import React from 'react';
import LandingPage from '../components/LandingPage';
import Secondfirst from '../components/Secondfirst';
import ThirdFirst from '../components/ThirdFirst';
import Component5 from '../kevin/component5';
import Component6 from '../kevin/component6';
import Component7 from '../kevin/component7';
import Footer from '../kevin/Footer';
import ContactUs from '../kevin/ContactUs';


const Mainpage = () => {
    return (
        <div className=''>
            <LandingPage />
            <Secondfirst />
            <ThirdFirst />
            <Component5 />
            <Component6 />
            <Component7 />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Mainpage;
