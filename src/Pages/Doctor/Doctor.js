import React from 'react';
import './Doctor.css'
import ceo1 from '../images/ceo 1.jpg';
import ceo2 from '../images/images.jpg';
import ceo3 from '../images/hero.jpg'
import ceo4 from '../images/download.jpg'

const Doctor = () => {
    return (
        <div>
            <h1 className="text">Our popular Doctor</h1>
            <div className="card-group ">
                <div className="card m-4 rounded border-success ">
                    <img src={ceo2} className="mx-auto" alt="..." />
                    <div className="card-body">
                        <p className="card-text"><small className="text">Nadella</small></p>
                        <p className="card-text"><small className="text-muted">Surgary specialist</small></p>


                    </div>
                </div>
                <div className="card m-4 rounded border-success">
                    <img src={ceo1} className="mx-auto" alt="..." />
                    <div className="card-body">
                        <p className="card-text"><small className="text">Jason Wishnov</small></p>
                        <p className="card-text"><small className="text-muted">Gaonocologist</small></p>

                    </div>
                </div>
                <div className="card m-4 rounded border-success">
                    <img src={ceo3} className="mx-auto" alt="..." />
                    <div className="card-body">
                        <p className="card-text"><small className="text">Christina</small></p>
                        <p className="card-text"><small className="text-muted">Medicine specialist</small></p>

                    </div>
                </div>
                <div className="card m-4 rounded border-success">
                    <img src={ceo4} className="mx-auto" alt="..." />
                    <div className="card-body">
                        <p className="card-text"><small className="text">Swapneel Deshmukh</small></p>
                        <p className="card-text"><small className="text-muted">Darmatologist</small></p>

                    </div>
                </div>


            </div>
            <button className=" bg-success text-white rounded-pill px-4 py-1 border-0 my-2">Others Doctors information</button>
        </div>
    );
};

export default Doctor;