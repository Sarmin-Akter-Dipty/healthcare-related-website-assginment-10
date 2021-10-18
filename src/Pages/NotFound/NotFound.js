import React from 'react';
import { Link } from 'react-router-dom';
import NotFound1 from '../images/NotFound.jpg'
const NotFound = () => {
    return (
        <div>
            <img className="my-5 rounded-pill" src={NotFound1} alt="" />
            <div>
                <Link to="/home"><button className="rounded-pill bg-success px-4 py-1 border-0">Home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;