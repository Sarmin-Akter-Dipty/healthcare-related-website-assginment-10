import React from 'react';
import NotFound1 from '../images/NotFound.jpg'
const NotFound = () => {
    return (
        <div>
            <h1 className="text-danger my-3">404</h1>
            <h5>Page not found,please enter a valid name.</h5>
            <img className=" my-5 rounded-pill" src={NotFound1} alt="" />


        </div>
    );
};

export default NotFound;