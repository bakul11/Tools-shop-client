import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import auth from '../Firebase/FirebaseConfig';
import Footer from '../Shared/Footer/Footer';



const MyOrder = () => {
    const [order, setOrder] = useState([]);
    const [user, loading, error] = useAuthState(auth);


    const email = user?.email;

    useEffect(() => {
        const url = `https://afternoon-refuge-96808.herokuapp.com/myOrder?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [user])



    //handle Remove Booking Order
    const handleRemoveProduct = id => {

        const removeConfirm = window.confirm('Do You Want Delete This Product?');

        if (removeConfirm) {
            const url = `https://afternoon-refuge-96808.herokuapp.com/orderDelete/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    const remaning = order.filter(order => order._id !== id);
                    setOrder(remaning);
                    swal('Deleted Success', 'Your product Delete Successfully Done', 'success');
                })
        }
    }


    //Handle Payment 
    const navigate = useNavigate();
    const handlePayment = id => {
        navigate(`/payment/${id}`);
    }





    return (
        <div className='order-section'>
            <div className='container card' style={ { marginTop: '120px', marginBottom: '200px' } }>
                <h2 className='text-center pt-4 pb-4'>Total Booking Order : { order.length }</h2>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead className='text-center bg-success text-light '>
                            <tr className='fw-normal'>
                                <th>Serial No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Service Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Action</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                order?.map((order, index) =>
                                    <tr className='h3 fs-6' key={ order._id }>
                                        <td className='text-center'>{ index + 1 }</td>
                                        <td className='text-center'>{ order.userName }</td>
                                        <td className='text-center'>{ order.email }</td>
                                        <td className='text-center'>{ order.phone }</td>
                                        <td className='text-center'>{ order.address }</td>
                                        <td className='text-center'>{ order.name }</td>
                                        <td className='text-center'>{ order.price }</td>
                                        <td className='text-center'>{ order.quantity }</td>
                                        <td className='text-center'><FontAwesomeIcon icon={ faTrashAlt } className='text-danger' style={ { cursor: 'pointer' } } onClick={ () => handleRemoveProduct(order._id) }></FontAwesomeIcon></td>
                                        <td className='text-center'>{ !order.paid ? <button className='btn btn-primary' onClick={ () => handlePayment(order._id) }>Pay</button> : <span>Paid success</span> }</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyOrder;