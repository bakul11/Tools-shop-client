import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import Me from '../.././images/aboutMe.png'
import './Portfolio.css'
import Bounce from 'react-reveal/Bounce';

const Portfolio = () => {
    return (
        <section className='port pb-5'>
            <Bounce left>
                <div className="portfolio-section container">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mt-5">
                                <div className="thumb">
                                    <img src={ Me } alt='bakul Ray Photo' className='img-fluid d-block mx-auto rounded-circle' style={ { height: '200px', width: '200px', border: '3px solid #e7dede' } } />
                                </div>
                            </div>
                            <div className="col-lg-12 ">
                                <div className="about mt-2">
                                    <div className="extra text-center">
                                        <h3 className='text-light'>Sree Bakul Ray Ajoy</h3>
                                        <h2 className='text-light fs-6 mb-2'>Junior Web Developer</h2>
                                        <h2 className='text-light fs-6 mb-2'>Email : bakulray09@gmail.com</h2>
                                        <h2 className='text-light fs-6'>Education : BSC in CSE 1st Semester (DIU)</h2>
                                    </div>
                                    <div className="social row">
                                        <div className="col-lg-2 mx-auto">
                                            <ul className='d-flex align-items-center justify-content-evenly mt-3'>
                                                <li className='rounded-circle bg-light me-3 ' style={ { height: '30px', width: '30px' } }><a href='https://www.facebook.com/bakulray.ajoy/' target="_blank"><FontAwesomeIcon icon={ faFacebookF } className='pt-2 ps-2'></FontAwesomeIcon></a></li>
                                                <li className='rounded-circle bg-light me-3' style={ { height: '30px', width: '30px' } }><a href='https://www.facebook.com/bakulray.ajoy/' target="_blank"><FontAwesomeIcon icon={ faGithub } className='pt-2 ps-2'></FontAwesomeIcon></a></li>
                                                <li className='rounded-circle bg-light me-3' style={ { height: '30px', width: '30px' } }><a href='https://www.facebook.com/bakulray.ajoy/' target="_blank"><FontAwesomeIcon icon={ faLinkedinIn } className='pt-2 ps-2'></FontAwesomeIcon></a></li>
                                                <li className='rounded-circle bg-light' style={ { height: '30px', width: '30px' } }><a href='https://www.facebook.com/bakulray.ajoy/' target="_blank"><FontAwesomeIcon icon={ faTwitter } className='pt-2 ps-2'></FontAwesomeIcon></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aboutMe container mt-5">
                        <h3 className='text-light text-decoration-underline'>About Me</h3>
                        <p className='text-light'>Hello,I'm bakul chandro ray.I am studying at CSE.Recent time I'm completed diploma engineering in CSE.I want to be a Mean Stack developer.So I starting a complete jurnney with programing Hero.Thanks You everyone</p>
                        <div className="skills mt-4">
                            <h3 className='text-light text-decoration-underline'>My Skills : </h3>
                            <ul className='text-light mt-3'>
                                <li className='text-light'>1. HTML5</li>
                                <li className='text-light'>2. CSS</li>
                                <li className='text-light'>3. Bootstrap</li>
                                <li className='text-light'>4. JavaScript</li>
                                <li className='text-light'>5. React Js</li>
                                <li className='text-light'>6. Node Js</li>
                                <li className='text-light'>7. Express Js</li>
                                <li className='text-light'>8. MongoDB</li>
                                <li className='text-light'>9. Firebase</li>
                                <li className='text-light'>10. ES6</li>
                            </ul>
                        </div>
                    </div>
                    <div className="project mt-4">
                        <h3 className='text-light mb-3 text-decoration-underline'>My Project (Design Only old Project)</h3>
                        <ul>
                            <li className='text-light'>1. <a className='text-light text-decoration-underline' href='https://bakul11.github.io/Daraz/' target='_blank'>Daraz eCommace</a></li>
                            <li className='text-light'>2. <a className='text-light text-decoration-underline' href='https://bakul11.github.io/musicsolo/' target='_blank'>Music Brand</a></li>
                            <li className='text-light'>3. <a className='text-light text-decoration-underline' href='https://hoichoi-movie.netlify.app/' target='_blank'>Hoichoi Movie site</a></li>
                            <li className='text-light'>4. <a className='text-light text-decoration-underline' href='https://mm-apppels-business.netlify.app/' target='_blank'>Texttile</a></li>
                        </ul>
                    </div>
                </div>
            </Bounce>
        </section>
    );
};

export default Portfolio;