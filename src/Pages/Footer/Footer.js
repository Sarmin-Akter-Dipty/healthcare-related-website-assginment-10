import Button from '@restart/ui/esm/Button';
import React from 'react';


const Footer = () => {
    return (
        <div className="bg-color my-2 bg-secondary">
            <div className="row">
                <div className="col-md-6">
                    <h3>Help Center</h3>
                    <hr />
                    <h3>Community</h3>
                    <hr />
                    <h3>FAQ</h3>
                </div>
                <div className="col-md-6 my-5">
                    <input className="border-0 rounded my-1" type="Email" placeholder="Enter Your Email" /><br />
                    <input className="border-0 rounded my-1" type="Password" placeholder="Enter Your Password" /><br />
                    <Button className=" bg-success text-white rounded-pill px-4 py-1 border-0">Login</Button>
                </div>
            </div>
            <p>&copy; 2021 MEDICAL CARE Designed By PK</p>
        </div>
    );
};

export default Footer;