import React from 'react';
import { Link } from 'react-router-dom';
import { faFacebookF, faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css'



const Footer = () => {
    const date = new Date();
    const fullDate = date.getFullYear();
    return (
        <div className="footer">
            <div className="footer-section">
                <footer className="footer ms-5 me-5 pb-5">
                    <div className="row gy-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="footet-item">
                                <Link to='/' className='text-light fs-4 fst-italic'>Tools <span className='text-danger'>Shop</span></Link>
                                <p className='text-secondary mt-2 fs-6'>Most Lean manufacturing tools emphasize the importance of visualizing important information and empowering the entire value stream to act upon that information!</p>
                                <div className="social-link">
                                    <ul className='d-flex align-items-center mt-2'>
                                        <li className='m-0 text-light' style={ { cursor: 'pointer' } }><Link to="https://www.facebook.com/bakulray.ajoy" target='__blank'></Link><FontAwesomeIcon icon={ faFacebookF }></FontAwesomeIcon></li>
                                        <li className='ms-4 text-light' style={ { cursor: 'pointer' } }><Link to="https://www.facebook.com/bakulray.ajoy"></Link><FontAwesomeIcon icon={ faGithub }></FontAwesomeIcon></li>
                                        <li className='ms-4 text-light' style={ { cursor: 'pointer' } }><Link to="https://www.facebook.com/bakulray.ajoy"></Link><FontAwesomeIcon icon={ faGoogle }></FontAwesomeIcon></li>
                                        <li className='ms-4 text-light' style={ { cursor: 'pointer' } }><Link to="https://www.facebook.com/bakulray.ajoy"></Link><FontAwesomeIcon icon={ faTwitter }></FontAwesomeIcon></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footet-item">
                                <h3 className=' text-capitalize fs-6 text-light'>Manufactur tools</h3>
                                <ul className='text-capitalize fs-6'>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>Belt Sanders</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>Curcular Saws</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>Drills Mechine</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>Hammer Drills</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>Screwdrive</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>Grinders</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footet-item">
                                <h3 className='text-capitalize fs-6 text-light'>latest tools</h3>
                                <ul className='text-capitalize fs-6'>

                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>Curcular Saws</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>Screwdrive</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>Drills Mechine</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>Belt Sanders</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>Hammer Drills</Link>
                                    </li>

                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>Grinders</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footet-item">
                                <h3 className=' text-capitalize fs-6  text-light'>Contact with us</h3>

                                <address className='mt-3'>
                                    <p className='text-secondary m-2'>Email : toolshopinfo@gmail.com</p>
                                    <p className='text-secondary m-2'>Mobile : +8801791860562</p>
                                    <p className='text-secondary m-2'>Phone : +53286852333586</p>
                                </address>
                                <form>
                                    <div className="subscribe-btn mt-3">
                                        <input type="email" name="email" id="" className='sub-input w-100 d-block' placeholder='Email address' required />
                                        <input type="submit" className='sub-btn  text-capitalize fs-6 fs-6' value="subscribe" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </footer >
            </div >
            <div className="copyright text-center mb-4 mt-4">
                <p className='text-secondary' style={ { fontWeight: '500' } }>Copyright © tools-shop { fullDate } all rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;