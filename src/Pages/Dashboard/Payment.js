import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';



const Payment = () => {
    const {id} = useParams();

    const {data:order, isLoading} = useQuery(['payment', id], ()=> fetch(`http://localhost:5000/purchase/${id}`,{
        method:'GET',

    }).then(res => res.json()))
    console.log(order)

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>Payment your order for:{order._id} </h2>
           
        </div>
    );
};

export default Payment;