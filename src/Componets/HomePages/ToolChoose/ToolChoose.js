import React from 'react';
import Logo from '../../../images/about.png'
import LightSpeed from 'react-reveal/LightSpeed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const ToolChoose = () => {
    return (
        <section>
            <div className='container mt-5 mb-5'>
                <div className="row gy-5">
                    <div className="col-lg-5">
                        <LightSpeed left>
                            <div className="tool-content">
                                <img src={ Logo } alt="" style={{height:'400px'}}/>
                            </div>
                        </LightSpeed>
                    </div>
                    <div className="col-lg-6 offset-lg-1">
                        <LightSpeed right>
                            <div className="tool-thubnail mt-5">
                                <h3 className='mb-2'>Why you choose our tools?</h3>
                                <div className="choose-list">
                                    <ul>
                                        <li className='mb-2'><FontAwesomeIcon icon={ faCheckCircle } className='text-secondary'></FontAwesomeIcon> Your team members might</li>
                                        <li className='mb-2'><FontAwesomeIcon icon={ faCheckCircle } className='text-secondary'></FontAwesomeIcon>  end up strapping and re-strapping </li>
                                        <li className='mb-2'><FontAwesomeIcon icon={ faCheckCircle } className='text-secondary'></FontAwesomeIcon> packages and bundles</li>
                                        <li className='mb-2'><FontAwesomeIcon icon={ faCheckCircle } className='text-secondary'></FontAwesomeIcon> broken straps and poor cuts</li>
                                        <li className='mb-2'><FontAwesomeIcon icon={ faCheckCircle } className='text-secondary'></FontAwesomeIcon> Straps cut into the product</li>
                                    
                                    </ul>
                                </div>
        
                                <p>Using the wrong strapping tool can also lead to increased damages or lost product. Straps that are too tight cut into the product, damaging it. On the other hand</p>
                                <button className="btn btn-primary mt-2">Read More <FontAwesomeIcon icon={ faAngleDoubleRight }></FontAwesomeIcon></button>
                            </div>
                        </LightSpeed>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToolChoose;