import React, { useState } from 'react';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';






const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { cardError, setCardError } = useState("");


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
            setCardError(error.message);
        }
        else {
            setCardError("");
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

            {
                cardError && <p>{cardError}</p>
            }
        </div>
    );
};

export default CheckoutForm;