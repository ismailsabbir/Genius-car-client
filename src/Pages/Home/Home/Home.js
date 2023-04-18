import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import ContactBanner from '../ContactBanner/ContactBanner';
import Productss from '../Productss/Productss';
import TeamMembers from '../TeamMembers/TeamMembers';
import CustomerSay from '../CustomerSay/CustomerSay';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ContactBanner></ContactBanner>
            <Productss></Productss>
            <TeamMembers></TeamMembers>
            <CustomerSay></CustomerSay>
        </div>
    );
};

export default Home;