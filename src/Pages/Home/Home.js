import React from 'react';
import Footer from '../Shared/Footer';
import Achievement from './Achievement';
import Banner from './Banner';
import Buyer from './Buyer';
import Reviews from './Reviews';
import VisitorMessage from './VisitorMessage';
import YarnCollection from './YarnCollection';




const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <YarnCollection></YarnCollection>
          <Buyer></Buyer>
          <Achievement></Achievement>
          <Reviews></Reviews>
          <VisitorMessage></VisitorMessage>
          <Footer></Footer>
        </div>
    );
};

export default Home;