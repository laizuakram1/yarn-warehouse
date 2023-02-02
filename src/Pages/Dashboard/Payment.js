import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LFhZVGS7wzIhQqvwqqi9zSx9XJwU0dM9Wz4zJMubyNZUeWcfjKLQqoIyPwk1muOXZQXJg7T0zvYf3tvtMZpWqIO00WSv5hVmh');



const Payment = () => {
    const { id } = useParams();


    const { data: order, isLoading } = useQuery(['order', id], () => fetch(`https://yarn-warehouse-server.onrender.com/buy/${id}`, {
        method: 'GET',

    })
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">please pay for {order.product}</h2>
                <p>Quantity: {order.quantity}</p>
                <p>Price: ${order.price}</p>

            </div>
            <div class="card-body">
                <Elements stripe={stripePromise}>
                    <CheckoutForm order = {order} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;