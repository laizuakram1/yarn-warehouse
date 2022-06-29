import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';



const Payment = () => {
    const {id} = useParams();
    const {orders, setOrders} = useState([])

    // fetch(`https://protected-journey-61299.herokuapp.com/buy/${id}`)
    // .then(res => res.json())
    // .then(data => setOrders(data))
    


    const {data:order, isLoading} = useQuery(['order', id], ()=> fetch(`https://protected-journey-61299.herokuapp.com/buy/${id}`,{
        method:'GET',

    })
    .then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h2> please palace your payment:{order.length}</h2>
           
        </div>
    );
};

export default Payment;