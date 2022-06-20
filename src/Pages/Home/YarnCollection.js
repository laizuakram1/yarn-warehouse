import React, { useEffect, useState } from 'react';
import DisplayYarn from './DisplayYarn';

const YarnCollection = () => {
    const [yarns, setYarns] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setYarns(data));
    }, [])

    return (
        <div>

            <h2 className='text-3xl text-success font-bold  py-10'>Our Qualified <span className='text-red-500'>Yarns</span></h2>
            <div className='grid grid-cols-3 gap-5'>
                {
                    yarns.map(yarn => <DisplayYarn

                        key={yarn._id}
                        yarn={yarn}
                    ></DisplayYarn>)

                }
            </div>
        </div>
    );
};

export default YarnCollection;