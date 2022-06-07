import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import SlideLogo from '../../../images/slideLogo.png'
import Bounce from 'react-reveal/Bounce';
import './HeaderSlider.css'


const HeaderSlider = () => {
    return (
        <section className='header-slider'>
        <div className='container mt-5 mb-5'>
            <div className="row gy-5">
                <div className="col-lg-6">
                    <Bounce left>
                        <div className="slide-content" style={{marginTop:'100px'}}>
                            <h3>Buy your <span className='text-danger'>useful</span> <br />  Manufactur Tools </h3>
                            <p className='mt-2 mb-2'>Most Lean manufacturing tools emphasize the importance of visualizing important information and empowering the entire value stream to act upon that information!</p>
                            <button className="btn btn-danger">Buy Now <FontAwesomeIcon icon={ faAngleDoubleRight }></FontAwesomeIcon></button>
                        </div>
                    </Bounce>
                </div>
                <div className="col-lg-6">
                    <Bounce right>
                        <div className="slide-thumb">
                            <img src={ SlideLogo } alt="Slide logo" />
                        </div>
                    </Bounce>
                </div>
            </div>
        </div>
        </section>
    );
};

export default HeaderSlider;