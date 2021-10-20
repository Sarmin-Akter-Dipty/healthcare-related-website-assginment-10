import React from 'react';


const Footer = () => {
    return (
        <div className="bg-color mt-5 bg-secondary">
            <div className="row">
                <div className="col-md-6">
                    <h3>Help Center</h3>
                    <hr />
                    <h3>Community</h3>
                    <hr />
                    <h3>FAQ</h3>
                </div>
                <div className="col-md-6">
                    <h2>Contact Details</h2>
                    <p>250 Main Street, Brooklyn, NY 52143, US</p>
                    <h4> Tell (800)-456-789</h4>
                    <h5> Email :Medicalcare@gmail.com</h5>
                    <h6>Website: Medicalcare.com</h6>
                </div>
            </div>
            <p>&copy; 2021 MEDICAL CARE Designed By KD</p>
        </div>
    );
};

export default Footer;