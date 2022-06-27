import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Payment = () => {
    const {id} = useParams();
    const {order, setOrder} = useState('')
   
    useEffect(() =>{
        fetch(`http://localhost:5000/purchase/${id}`,{
            method:'GET',
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    },[id])
    

    return (
        <div>
            <h2>Payment your order for: </h2>
           
        </div>
    );
};

export default Payment;