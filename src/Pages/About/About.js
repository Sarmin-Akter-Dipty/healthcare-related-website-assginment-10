import React from 'react';
import doctors from '../images/Header2.jpg'
import './About.css'

const About = () => {
    return (
        <div>
            <div className="container about">
                <h1 className="text">About Us</h1>
                <p>Medical care is what physicians and other clinicians do every day with you in offices, labs, surgery centers, and hospitals. Titrating blood pressure meds. Checking blood sugar. Adding this medication on and stopping that medication.</p> <br />

                <p>Rated as one of the top ten journals in healthcare administration, Medical Care is devoted to all aspects of the administration and delivery of healthcare.</p>
                <h1 className="text" >Our Doctor</h1> <br />
                <img className="size rounded-pill" src={doctors} alt="" />
                <p>"Examples of skills doctors need · Technical skills · Problem-solving and critical thinking skills · Communication skills · Interpersonal skills."
                </p>
            </div>

        </div>
    );
};

export default About;