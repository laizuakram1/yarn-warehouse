import React, { useEffect, useState } from 'react';
import DisplayBuyer from './DisplayBuyer';

const Buyer = () => {
    const [buyers, setBuyers] = useState([]);

    useEffect(() => {
        fetch(`https://protected-journey-61299.herokuapp.com/buyer`)
            .then(res => res.json())
            .then(data => setBuyers(data));
    }, [])
    return (
        <div className='mx-10' >
           <h2 className='text-3xl font-bold py-10'>Our <span className='text-success'>International</span> Buyers</h2>
           <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
                {
                    buyers.map(buyer =><DisplayBuyer
                    key = {buyer._id}
                    buyer = {buyer}
                    ></DisplayBuyer>)
                }
           </div>
        </div>
    );
};

export default Buyer;