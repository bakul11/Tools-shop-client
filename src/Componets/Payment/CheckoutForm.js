import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';




const CheckoutForm = ({ product }) => {
    console.log(product?._id);
    const newId = product?._id;
    const stripe = useStripe();
    const elements = useElements();
    const [payment, setPayment] = useState('');
    const [paymentError, setPaymentError] = useState('');

    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setPaymentError(error?.message);
        }
        else {
            const paymentId = paymentMethod.id;

            const paymentDetails = {
                id: product._id,
                transitionId: paymentId
            }

            const url = `https://afternoon-refuge-96808.herokuapp.com/booking/${newId}`;

            fetch(url, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(paymentDetails)
            })
                .then(res => res.json())
                .then(result => {
                    swal('Congrate ! Payment Success', 'Your Payment successfully Done', 'success');
                    navigate('/order')
                })
                .catch(error => {
                    swal('Opps! Payments Fail', 'Your Payment fail please try aggain', 'error');
                })

        }


    };

    return (
        <div className='container'>
            <form onSubmit={ handleSubmit }>
                <div className="row">
                    <div className="col-lg-5 mx-auto">
                        <div className="payment-card">
                            <CardElement
                                options={ {
                                    style: {
                                        base: {
                                            fontSize: '16px',
                                            color: '#424770',
                                            '::placeholder': {
                                                color: '#aab7c4',
                                            },
                                        },
                                        invalid: {
                                            color: '#9e2146',
                                        },
                                    },
                                } }
                            />
                        </div>
                    </div>
                </div>
                <button type="submit" disabled={ !stripe } className='btn btn-danger mt-5'>
                    Pay Now
                </button>
            </form>
            <div className="error-section">
                {
                    paymentError && <span className='text-danger'>{ paymentError }</span>
                }
            </div>
        </div>
    );
};

export default CheckoutForm;