import React from 'react';
import ceo1 from '../images/ceo 1.jpg';
import ceo2 from '../images/images.jpg';
import ceo3 from '../images/hero.jpg'
import ceo4 from '../images/download.jpg'
import './Testimonial.css'



const Testimonial = () => {
    return (
        <div>
            <div className="bg-secondary my-3 text-white" >
                <div>
                    <h1 className="text">OUR CLIENTS</h1>
                    <p>The MEDICAL CARE's Patient Stories — Here are 5 patient testimonial examples from different healthcare organizations and why they're so great</p>
                </div>
                <div className="card-group ">
                    <div className="card m-4 rounded border-success ">
                        <img src={ceo2} className="mx-auto width" alt="..." />
                        <div className="card-body">
                            <p className="card-text"><small className="text">Satya Nadella</small></p>
                            <p className="card-text"><small className="text-muted">Social Media Manager</small></p>
                            <p className="card-text"><small className="text-muted">Very effective & special facilities.</small></p>

                        </div>
                    </div>
                    <div className="card m-4 rounded border-success">
                        <img src={ceo1} className="mx-auto width" alt="..." />
                        <div className="card-body">
                            <p className="card-text"><small className="text">Jason Wishnov</small></p>
                            <p className="card-text"><small className="text-muted">Lawyer</small></p>
                            <p className="card-text"><small className="text-muted">Extremely fast and helpful.</small></p>
                        </div>
                    </div>
                    <div className="card m-4 rounded border-success">
                        <img src={ceo3} className="mx-auto width" alt="..." />
                        <div className="card-body">
                            <p className="card-text"><small className="text">Christina</small></p>
                            <p className="card-text"><small className="text-muted">Real Estate Agent</small></p>
                            <p className="card-text"><small className="text-muted">Provided all the support I was looking for.</small></p>
                        </div>
                    </div>
                    <div className="card m-4 rounded border-success">
                        <img src={ceo4} className="mx-auto width" alt="..." />
                        <div className="card-body">
                            <p className="card-text"><small className="text">Swapneel Deshmukh</small></p>
                            <p className="card-text"><small className="text-muted">Financial Advisor</small></p>
                            <p className="card-text"><small className="text-muted"> Helpful, Clear and Awesome support.</small></p>
                        </div>
                    </div>


                </div>
            </div>



        </div>


    );
};

export default Testimonial;