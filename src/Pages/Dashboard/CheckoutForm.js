import React, { useEffect, useState } from 'react';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';






const CheckoutForm = ({order}) => {
    const stripe = useStripe();
    const elements = useElements();
    
    
    const {price} = order;


    useEffect(()=>{
        fetch(`http://localhost:5000/create-payment-intent`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({price})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    },[price])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
        if (error) {
            toast.error('security wrong')
        }
       

    };
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <CardElement />
                <button className='btn btn-xs btn-success mt-4' type="submit" disabled={!stripe || !elements}>
                    Pay
                </button>


            </form>
        </div>
    );
};

export default CheckoutForm;