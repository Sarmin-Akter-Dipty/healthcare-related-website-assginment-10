import React from 'react';
const Pricing = () => {
    return (
        <div>
            <h1 className="text">Our Pricing</h1>
            <p className="container">Price regulations face political obstacles and have been strongly opposed by medical providers. But setting prices for all commercial health care payers could reduce hospital spending by $61.9 billion to $236.6 billion a year if the rates were set at 100 to 150 percent of the amounts paid by Medicare.</p>

            <div className="card-group container">
                <div className="card m-4 border-secondary border-3">
                    <div className="card-body">
                        <h3 className="card-text text bg-secondary text-white">BASIC TESTS</h3>
                        <div className="d-flex justify-content-center">
                            <h6 className="card-text mx-2 my-2"><u>Analysis of Urine</u></h6>
                            <h6 className="card-text mx-2 my-2"><u>$10.00</u></h6>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h6 className="card-text mx-2 my-2"><u>Ablation Therapy</u></h6>
                            <h6 className="card-text mx-2 my-2"><u>$12.00</u></h6>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h6 className="card-text mx-2 my-2"><u>Allergy</u></h6>
                            <h6 className="card-text mx-2 my-2"><u>$15.00</u></h6>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h6 className="card-text mx-2 my-2"><u>Skin Test</u></h6>
                            <h6 className="card-text mx-2 my-2"><u>$20.00</u></h6>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h6 className="card-text mx-2 my-2"><u>Liver Enzymes</u></h6>
                            <h6 className="card-text mx-2 my-2"><u>$19.00</u></h6>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h6 className="card-text mx-2 my-2"><u>Blood Test</u></h6>
                            <h6 className="card-text mx-2 my-2"><u>$15.00</u></h6>
                        </div>
                        <u>-----------------------------</u><br />
                        <button className=" bg-secondary text-white px-4 py-1 border-0 my-2">Booking Now</button>
                    </div>
                </div>
                <div className="card m-4 rounded border-secondary border-3">
                    <div className="card-body">
                        <h3 className="card-text text bg-secondary text-white">STANDARD TESTS</h3>
                        <div className="d-flex justify-content-center">
                            <h6 className="card-text mx-2 my-2"><u>Analysis of Urine</u></h6>
                            <h6 className="card-text mx-2 my-2"><u>$15.00</u></h6>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h6 className="card-text mx-2 my-2"><u>Ablation Therapy</u></h6>
                            <h6 className="card-text mx-2 my-2"><u>$17.00</u></h6>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h6 className="card-text mx-2 my-2"><u>Allergy</u></h6>
                            <h6 className="card-text mx-2 my-2"><u>$19.00</u></h6>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h6 className="card-text mx-2 my-2"><u>Skin Test</u></h6>
                            <h6 className="card-text mx-2 my-2"><u>$25.00</u></h6>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h6 className="card-text mx-2 my-2"><u>Liver Enzymes</u></h6>
                            <h6 className="card-text mx-2 my-2"><u>$22.00</u></h6>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h6 className="card-text mx-2 my-2"><u>Blood Test</u></h6>
                            <h6 className="card-text mx-2 my-2"><u>$17.00</u></h6>
                        </div>
                        <u>-----------------------------</u><br />
                        <button className=" bg-secondary text-white px-4 py-1 border-0 my-2">Booking Now</button>
                    </div>
                </div>
                <div className="card m-4 rounded border-secondary border-3">
                    <div className="card-body">
                        <h3 className="card-text text bg-secondary text-white">PREMIUM TESTS</h3>
                        <div className="d-flex justify-content-center">
                            <h6 className="card-text mx-2 my-2"><u>Analysis of Urine</u></h6>
                            <h6 className="card-text mx-2 my-2"><u>$17.00</u></h6>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h6 className="card-text mx-2 my-2"><u>Ablation Therapy</u></h6>
                            <h6 className="card-text mx-2 my-2"><u>$19.00</u></h6>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h6 className="card-text mx-2 my-2"><u>Allergy</u></h6>
                            <h6 className="card-text mx-2 my-2"><u>$23.00</u></h6>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h6 className="card-text mx-2 my-2"><u>Skin Test</u></h6>
                            <h6 className="card-text mx-2 my-2"><u>$27.00</u></h6>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h6 className="card-text mx-2 my-2"><u>Liver Enzymes</u></h6>
                            <h6 className="card-text mx-2 my-2"><u>$25.00</u></h6>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h6 className="card-text mx-2 my-2"><u>Blood Test</u></h6>
                            <h6 className="card-text mx-2 my-2"><u>$19.00</u></h6>
                        </div>
                        <u>-----------------------------</u><br />
                        <button className=" bg-secondary text-white px-4 py-1 border-0 my-2">Booking Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;