import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../context/useAuth';


const Login = () => {
    const { signInUsingGoogle, handleRegistration, handleEmailChange, handlePasswordChange, error, toggleLogin, islogin, handleNameChange, } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'
    console.log('came from', location.state?.from);
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);

            })

    }

    return (
        <div>
            <h2 className="text my-4">Please{islogin ? 'Login' : 'Register:Create Account'}</h2>
            <form onSubmit={handleRegistration}>
                <input onBlur={handleNameChange} className="border-1 rounded  w-25" type="text" placeholder="User Name" required /><br />
                <input onBlur={handleEmailChange} className="border-1 rounded my-4 w-25" type="Email" placeholder="Enter Your Email" required /><br />
                <input onBlur={handlePasswordChange} className="border-1 rounded w-25 " type="Password" placeholder="Enter Your Password" required /><br />
                <button className=" bg-success text-white rounded-pill px-4 py-1 border-0 my-2">{islogin ? 'Login' : 'Register'}</button>
            </form>
            <input onChange={toggleLogin} type="checkbox" />
            <label htmlFor=""> <h6 className="text">Already Register?</h6></label>
            <div className="text-danger">{error}</div>
            <div>-------or-------</div>
            <Link to="/home"><button onClick={handleGoogleLogin} className=" bg-success text-white rounded-pill px-4 py-1 border-0 my-4">Google Sign In</button></Link>



        </div>
    );
};

export default Login;