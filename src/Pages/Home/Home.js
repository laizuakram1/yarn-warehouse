import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Reviews from './Reviews';
import YarnCollection from './YarnCollection';




const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <YarnCollection></YarnCollection>
          <Reviews></Reviews>
          <Footer></Footer>
        </div>
    );
};

export default Home;