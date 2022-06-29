import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';



const Payment = () => {
    const {id} = useParams();

    // fetch(`https://protected-journey-61299.herokuapp.com/purchase/${id}`)
    // .then(res => res.json())
    // .then(data => console.log(data))


    const {data:order, isLoading} = useQuery(['payment', id], ()=> fetch(`https://protected-journey-61299.herokuapp.com/buy/${id}`,{
        method:'GET',

    }).then(res => res.json()))
    console.log(order)
    

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>Payment your order for:{order.product} </h2>
            <p>Quantity:{order.quantity}</p>
            <p>price:{order.price}</p>
           
        </div>
    );
};

export default Payment;