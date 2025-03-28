import React, { useState } from 'react';
import './CSS/LoginSignUp.css'

const LoginSignup = () => {

    const [state, setState] = useState("Sign Up");

    return (
        <div className='login-signup'>
            <div className="login-signup-container">
                <h1>{state}</h1>
                <div className="login-signup-fields">
                    {state==="Sign Up"?<input type="text" placeholder='Your Name' />:<></>}
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                </div>
                <button>Continue</button>
                <p className="login-signup-login">Already have an account? <span>Login here</span></p>
                <div className="login-signup-agree">
                    <input type="checkbox" name='' id=''/>
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup;