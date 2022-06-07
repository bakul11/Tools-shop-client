import React from 'react';
import { Link } from 'react-router-dom';
import Err404 from '../../images/401.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const NoMatch = () => {
    return (
        <div className='text-center mb-5'>
            <div className="noMatch-section mt-5 mb-5">
                <img src={ Err404 } alt="" style={ { height: '300px' } } />
                <h3 className='fw-bold fst-italic'>Page not found</h3>
                <Link to='/' className='btn btn-danger fw-bold mt-3 circle-rounded'>Home Pages <FontAwesomeIcon icon={ faAngleDoubleRight } className='ms-2'></FontAwesomeIcon></Link>
            </div>
        </div>
    );
};

export default NoMatch;