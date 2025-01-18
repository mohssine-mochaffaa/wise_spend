import React from 'react'
import { Link } from "react-router-dom";
import InputField from '../../Components/InputField/InputField'
import "./Login.css"

const Login = () => {
  return (
    <>
    <div className="login-container">
      <h2 className="form-title">Login</h2>
      <p className="separator"></p>

      <form action="#" className="login-form">
        <InputField type="email" placeholder="Email address" icon="mail" />
        <InputField type="password" placeholder="Password" icon="lock" />
        
        <button type="submit" className="login-button">Log In</button>
      </form>

      <p className="signup-prompt">
        Don&apos;t have an account? <Link to="/signUp" className="signup-link">Sign up</Link>
      </p>
    </div>
    </>
  )
}

export default Login