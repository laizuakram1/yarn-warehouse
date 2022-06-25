import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const DisplayBuyer = ({buyer}) => {
    const {img, name, location} = buyer;

    return (
        <div class="card w-40 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="font-bold">{name}</h2>
                <p><FaMapMarkerAlt className='inline'></FaMapMarkerAlt> {location}</p>
                
            </div>
        </div>
    );
};

export default DisplayBuyer;