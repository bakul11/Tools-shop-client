import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Zoom from 'react-reveal/Zoom';
import auth from '../../Firebase/FirebaseConfig';
import './ReviewCard.css'

const ReviewCard = ({ review }) => {
    const { name, discription, photo, address } = review;
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className='col-lg-4 col-md-4 mb-5'>
            <Zoom>
                <div className="box card custom text-center">
                    <img src={ photo || user?.photoURL } alt={ name } className='img-fluid d-block mx-auto rounded-circle' style={ { height: '100px', width: '100px', border: '3px solid #e7dede' } } />
                    <div className="card-body mt-4">
                        <h2 className='text-capitalize text-center mb-2 mt-3 text-success fs-6'>{ name }</h2>
                        <p>{ discription.length > 100 ? discription.slice(0, 100) : discription }</p>
                        <p className='text-capitalize mb-2 text-primary'>{ address }</p>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default ReviewCard;