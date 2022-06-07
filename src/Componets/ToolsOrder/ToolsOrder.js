import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import Footer from '../Shared/Footer/Footer';
import BookOrder from '../BookOrder/BookOrder';
import Review from '../Review/Review';

const ToolsOrder = () => {
    const { id } = useParams();

    const [tools, setTools] = useState({});

    useEffect(() => {
        const url = `https://warm-citadel-67270.herokuapp.com/tools/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }


    return (
        <div className='pp'>
            <div className="container" style={ { marginBottom: '100px', marginTop: '100px' } } >
                <div className="row gy-5">
                    <Slide left>
                        <div className="col-lg-5">
                            <img src={ tools.photo } alt={ tools.name } className='mx-auto d-block' style={ { height: '300px', width: '300px' } } />
                        </div>
                    </Slide>
                    <div className="col-lg-5">
                        <Slide right>
                            <div className="card pt-2">
                                <div className="card-body">
                                    <h2 className='text-capitalize'>{ tools.name }</h2>
                                    <p className='mb-2 mt-2'>{ tools.discription }</p>
                                    <p className='fw-bold text-primary'>Price : { tools.price }</p>
                                    <p className='fw-bold text-primary'>Quantity : { tools.quantity }</p>
                                    <button className="btn btn-primary mt-2" onClick={ openModal }>Place Order <FontAwesomeIcon icon={ faAngleDoubleRight }></FontAwesomeIcon></button>
                                    <BookOrder modalIsOpen={ modalIsOpen } closeModal={ closeModal } tools={ tools }></BookOrder>
                                </div>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
            <div className="review-section mt-5 mb-5">
                <Review></Review>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ToolsOrder;