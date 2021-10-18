import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    //distructuring
    const { img, name, description, } = props.user
    return (
        <div className="col-md-4">
            <div className="cart">
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <h6>{name}</h6>
                <p>{description}</p>
                <Link to="/services"><button className="rounded-pill px-4 py-1 border-0 btn-color">Booking Now</button></Link>
            </div>
        </div >
    );
};

export default Service;