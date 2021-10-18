import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center">
                <img className="site-logo" src="https://lh3.googleusercontent.com/proxy/kqL6PrTC48o9A3w8AhjCnIL_7NsrGcKbAhGfXTxLbcukI9JLe3c6KxaL29iNwuKvwFGAMhi_QBHmuAhVzQBFRoYDTGfHzzNOWcnjrvK610OL9OqXIxsIpPHZz6i9uZdSM94kMEfWiy_PYsrLqe9LKLAFWiVHrX3f" alt="" />
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