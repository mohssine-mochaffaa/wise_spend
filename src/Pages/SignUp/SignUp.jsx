import React from 'react'
import { Link } from "react-router-dom";
import InputField from '../../Components/InputField/InputField'
import "./SignUp.css"

const SignUp = () => {
  return (
    <div className="login-container">
          <h2 className="form-title">Sign Up</h2>
          <p className="separator"></p>
    
          <form action="#" className="login-form">
            <InputField type="text" placeholder="Full Name" icon="id_card" />
            <InputField type="email" placeholder="Email address" icon="mail" />
            <InputField type="password" placeholder="Password" icon="lock" />
    
            <button type="submit" className="login-button">Sign Up</button>
          </form>
    
          <p className="signup-prompt">
            If you have an account? <Link to="/" className="signup-link">Login</Link>
          </p>
    </div>
  )
}

export default SignUp