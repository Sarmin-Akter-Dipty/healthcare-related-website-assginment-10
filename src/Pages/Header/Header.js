import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import image from '../images/unnamed.png'
import useAuth from '../context/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center">
                <img className="site-logo" src={image} alt="" />
                <h1 className="my-4 mx-2 text-secondary" >MEDICAL <span className="text">CARE</span></h1>
            </div>
            <div className="bg-secondary header d-lg-flex align-items-center justify-content-evenly">
                <Link to="/home" className="items">Home</Link>
                <Link to="/about" className="items">About</Link>
                <Link to="/services" className="items">Services</Link>
                <Link to="/contact" className="items">Contact Us</Link>
                <Link to="/doctor" className="items">Our Doctors</Link>
                <Link to="/login" className="items">Log In</Link>
                <span className="text">{user.displayName}</span>
                {user?.email && <button onClick={logOut} className=" bg-success text-white rounded-pill px-4 py-1 border-0 my-2">Log Out</button>}





            </div>

        </div>
    );

};


export default Header;

