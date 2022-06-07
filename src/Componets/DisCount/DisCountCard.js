import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Zoom from 'react-reveal/Zoom';

const DisCountCard = ({ discount }) => {
    const { title, photo, number } = discount;
    return (
        <div className='col-lg-3 col-md-6 col-sm-6 pt-4 pb-4'>
            <Zoom>
            <div className="discount-items text-center">
                <FontAwesomeIcon icon={ photo } size='3x' style={{color:"#e5bf9e"}}></FontAwesomeIcon>
                <h2 className='mt-3 mb-2 text-light'>{ number }</h2>
                <h5 className='text-capitalize text-light'>{ title }</h5>
                </div>
            </Zoom>
        </div>
    );
};

export default DisCountCard;