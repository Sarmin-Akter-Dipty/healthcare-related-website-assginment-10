import React, { useEffect, useState } from 'react';
import Service from './Service';

const MainService = () => {
    const [users, setusers] = useState([])
    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json())
            .then(data => setusers(data));
    }, [])
    console.log(users);
    return (
        <div className="row">
            <h1 className="my-4 text">Our Services</h1>
            {
                users.map(user => <Service key={user.Name} user={user}></Service>)
            }

        </div>
    );
};

export default MainService;