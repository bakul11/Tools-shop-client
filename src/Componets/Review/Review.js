import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Review = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        fetch('https://afternoon-refuge-96808.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                navigate('/');
                swal('Thanks for your Review', 'Your review Added Successfully Done', 'success');
            })
    };

    return (
        <div className='container'>
            <div className="row mt-3">
                <div className="col-lg-9 mx-auto pt-5 pb-5">
                    <form onSubmit={ handleSubmit(onSubmit) }>
                        <div className="row gy-2 card p-4">
                            <h2>You can review our Product</h2>
                            <div className="col-lg-12">
                                <input { ...register("name", { required: true }) } placeholder='Your Name' className='form-control' />
                                { errors.name && <span className='text-danger'>Name is required</span> }
                            </div>
                            <div className="col-lg-12">
                                <input { ...register("address", { required: true }) } placeholder='Address' className='form-control' />
                                { errors.address && <span className='text-danger'>Address is required</span> }
                            </div>
                            <div className="col-lg-12">
                                <textarea { ...register("discription", { required: true }) } placeholder='Discription' className='form-control' />
                                { errors.discription && <span className='text-danger'>Name is required</span> }
                            </div>
                            <div className="col-lg-12">
                                <input type="submit" className='btn btn-primary w-25' />
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;