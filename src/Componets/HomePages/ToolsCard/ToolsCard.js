import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { useNavigate } from 'react-router-dom';

const ToolsCard = ({ tool }) => {
    const { name, discription, price, quantity, photo,_id } = tool;
    const navigate = useNavigate();

    const handleBuyNow = () => {
        navigate(`/orderNow/${_id}`);
    }


    return (
        <div className='col-lg-4 col-md-6'>
            <Zoom>
                <div className="shadow-lg custom text-center">
                    <img src={ photo } alt={ name } className='img-fluid d-block mx-auto' style={ { height: '150px', width: '150px' } } />
                    <div className="card-body">
                        <h2 className='text-capitalize text-center mb-2'>{ name }</h2>
                        <p>{ discription.length > 100 ? discription.slice(0, 100) : discription }</p>
                        <h3 className='text-capitalize  mb-2 fs-6 mt-3'>Price: ${ price }</h3>
                        <h3 className='text-capitalize  mb-2 fs-6 '>quantity: { quantity }</h3>
                        <button className="btn btn-primary mt-1 d-block w-100" onClick={ handleBuyNow }>Buy Now <FontAwesomeIcon icon={ faAngleDoubleRight }></FontAwesomeIcon></button>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default ToolsCard;