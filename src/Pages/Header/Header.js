import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import image from '../images/unnamed.png'

const Header = () => {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center">
                <img className="site-logo" src={image} alt="" />
                <h1 className="my-4 mx-2 text-secondary" >MEDICAL <span className="text">CARE</span></h1>
            </div>
            <div className="bg-secondary">
                <div className="row">
                    <div className="col-md-10">
                        <div>
                            <ul className="d-flex align-items-center justify-content-evenly">
                                <Link to="/home" className="items">Home</Link>
                                <Link to="/about" className="items">About</Link>
                                <Link to="/services" className="items">Services</Link>
                                <Link to="/pricing" className="items">Pricing</Link>
                                <Link to="/testimonial" className="items">Testimonial</Link>
                                <Link to="/login" className="items">Log In</Link>


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;