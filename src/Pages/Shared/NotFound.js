import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../Images/Slider/errorPage.png';

const NotFound = () => {
    return (
        <div class="hero min-h-screen">
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">opps! 404 error</h1>
      <p class="mb-5">we are soo sorry for not build this page right now. We will publish this page very soon</p>
      <Link to='/' className='btn btn-success'>Back to home</Link>
    </div>
  </div>
</div>
    );
};

export default NotFound;