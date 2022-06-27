import React from 'react';
import { Link } from 'react-router-dom';

const DisplayYarn = ({yarn}) => {
    const { _id, img, name, price, description, quantity, minOrder} = yarn;
    return (
        <div class="card w-72 bg-base-100 shadow-xl">
        <figure><img className='bg-cover' src={img} alt="yarn" /></figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p className='text-left'>{description}</p>
          <p className='text-left font-bold'>Price: ${price}</p>
          <p className='text-left '>available quantity: {quantity} /Role</p>
          <p className='text-left '>min.order: {minOrder} /Role</p>
          <div class="card-actions justify-center">
            <Link to={`/purchase/${_id}`}>
            <button class="btn btn-success hover:bg-green-100 ">Buy Now</button></Link>
          </div>
        </div>
      </div>
    );
};

export default DisplayYarn;