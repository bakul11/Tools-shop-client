import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L3XR9DJAexMsjtRrNYxaEtcyPEX92SNfZd77MoJlJTJyI6ejcLvAVGpw8kRhPFSp561nu7hJHW3CqiYBwC3p7At00wTd6RVUf');

const Payment = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    console.log(product);

    useEffect(() => {
        const url = `https://warm-citadel-67270.herokuapp.com/getPayment/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])



    return (
        <div className='text-center container mt-5'>
            <h2 className='mb-5'>You pay for { product?.name }</h2>
            <Elements stripe={ stripePromise }>
                <CheckoutForm product={ product } />
            </Elements>
        </div>
    );
};

export default Payment;