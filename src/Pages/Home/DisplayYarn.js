import React from 'react';

const DisplayYarn = ({yarn}) => {
    console.log(yarn)
    const {img, name, price, description, quantity} = yarn;
    return (
        <div class="card max-w-lg bg-base-100 shadow-xl">
        <figure><img className='bg-cover' src={img} alt="yarn" /></figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p className='text-left'>{description}</p>
          <p className='text-left font-bold'>Price:${price}</p>
          <p className='text-left'>Quantity:{quantity}/Role</p>
          <div class="card-actions justify-center">
            <button class="btn btn-success hover:bg-green-100 ">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default DisplayYarn;