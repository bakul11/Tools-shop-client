import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import auth from '../Firebase/FirebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';


// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)',
//     },
// };

Modal.setAppElement('#root');

const BookOrder = ({ modalIsOpen, closeModal, tools }) => {

    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();
    // Booking Order 
    const onSubmit = data => {
        const url = 'https://afternoon-refuge-96808.herokuapp.com/booking';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                navigate('/order');
                swal('Order Success', 'Your Order is Successfully Done', 'success');
            })
            .catch(err => {
                swal('Order Fail', 'Your Order is fail Try Aggain', 'error');
            })

    }


    return (
        <div className='modal-section'>
            <Modal
                isOpen={ modalIsOpen }
                onRequestClose={ closeModal }
                // style={ customStyles }
                contentLabel="Example Modal"
            >
                <div className="row">
                    <div className="col-lg-9 card p-4 mx-auto">
                        <h2 className='text-center text-capitalize mb-4'>{ tools.name } </h2>
                        <div className="BookOrderNow">
                            <form onSubmit={ handleSubmit(onSubmit) }>
                                <div className="row gy-2">
                                    <div className="col-lg-12">
                                        <input { ...register("userName", { required: true }) } type='text' className='form-control' value={ user?.displayName } readOnly />
                                        { errors.userName?.type === 'required' && <span className='text-danger'>Name is required</span> }
                                    </div>
                                    <div className="col-lg-12">
                                        <input { ...register("email", { required: true }) } type='text' value={ user?.email } className='form-control' readOnly />
                                        { errors.email?.type === 'required' && <span className='text-danger'>Email is required</span> }
                                    </div>
                                    <div className="col-lg-12">
                                        <input { ...register("name", { required: true }) } type='text' value={ tools.name } className='form-control' readOnly />
                                        { errors.name?.type === 'required' && <span className='text-danger'>Order is required</span> }
                                    </div>
                                    <div className="col-lg-12">
                                        <input { ...register("price", { required: true }) } type='text' value={ tools.price } className='form-control' readOnly />
                                        { errors.price?.type === 'required' && <span className='text-danger'>Price is required</span> }
                                    </div>
                                    <div className="col-lg-12">
                                        <input { ...register("quantity", { required: true }) } type='text' value={ tools.quantity } className='form-control' readOnly />
                                        { errors.quantity?.type === 'required' && <span className='text-danger'>Quantity is required</span> }
                                    </div>
                                    <div className="col-lg-12">
                                        <input { ...register("phone", { required: true }) } type='number' className='form-control' placeholder='Phone or Mobile' />
                                        { errors.phone?.type === 'required' && <span className='text-danger'>Phone is required</span> }
                                    </div>
                                    <div className="col-lg-12">
                                        <input { ...register("address", { required: true }) } type='text' className='form-control' placeholder='Your Address' />
                                        { errors.address?.type === 'required' && <span className='text-danger'>Address is required</span> }
                                    </div>
                                </div>
                                <div className="submitCancel mt-4">
                                    <input type="submit" className='btn btn-success' value='Submit Now' />
                                    <button onClick={ closeModal } className='btn btn-danger ms-2'>Cancel</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default BookOrder;