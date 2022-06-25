import React, { useEffect, useState } from 'react';

const Buyer = () => {
    const [buyers, setBuyers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/buyer`)
            .then(res => res.json())
            .then(data => setBuyers(data));
    }, [])
    return (
        <div >
           <h2>total Buyers: {buyers.length}</h2>
        </div>
    );
};

export default Buyer;