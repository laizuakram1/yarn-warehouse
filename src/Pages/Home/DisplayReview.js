import React from 'react';

const DisplayReview = ({ review }) => {
  const { comment, rating } = review;

  return (
    <div class="card max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <p>{comment}</p>
        <p>Ratting: <span className='text-orange-400'>{rating}</span> /5</p>
      </div>
    </div>
  );
};

export default DisplayReview;