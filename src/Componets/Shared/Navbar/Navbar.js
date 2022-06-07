import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/FirebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Navbar.css'
import { signOut } from 'firebase/auth';
import swal from 'sweetalert';




const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    //Handle Logout Now 
    const handleLogOut = () => {
        navigate('/');
        signOut(auth);
        swal('Logout Done', 'your account logout success', 'success');
        localStorage.removeItem('accessToken');
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-light shadow-lg">
            <div class="container">
                <Link class="navbar-brand fw-bold fs-4 fst-italic" to="/">Tools <span className='text-light'>Shop</span></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li className="nav-item ms-5 ">
                            <NavLink className="nav-link text-light" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item ms-5 ">
                            <NavLink className="nav-link text-light" to="/blogs">Blogs</NavLink>
                        </li>
                      
                        <li className="nav-item ms-5 ">
                            <NavLink className="nav-link text-light" to="/signup">Register</NavLink>
                        </li>
                        <li className="nav-item ms-5 mt-2">
                            {
                                user?.uid ? <button className='logout' onClick={ handleLogOut }>LogOut</button> : <NavLink className="nav-NavLink text-light" to="/login">Login</NavLink>
                            }
                        </li>
                        <li className="nav-item ms-5 ">
                            {
                                user && <NavLink className="nav-link text-light" to="/order">My Order</NavLink>
                            }
                        </li>
                        <li className="nav-item">
                            {
                                user ? <img src={ user?.photoURL } alt={ user?.displayName } className='img-fluid me-2 nav-link ms-5 rounded-circle' style={ { height: '50px', width: '50px' } }></img> : ''
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;