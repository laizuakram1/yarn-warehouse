import React, { useEffect, useState } from 'react';
import DisplayReview from './DisplayReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    

    useEffect(() => {
        fetch(`https://protected-journey-61299.herokuapp.com/reviews`,{
            headers:{
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='mx-20 py-10'>
            <h2 className='text-3xl font-bold text-success mb-10'>Seller <span className='text-red-500'>Reviews</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <DisplayReview
                        key={review._id}
                        review={review}
                    ></DisplayReview>)
                }
            </div>
        </div>
    );
};

export default Reviews;