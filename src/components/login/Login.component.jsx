import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../src/firebase';
import './Login.css'

const Login = () => {
  
  const navigate = useNavigate();
 


  const [values, setValues] = useState({
    email: "",
    pass: ""
  });
  const handleSubmission = () => {
    if (!values.email || !values.pass) {
     
      return;
    }
    
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
       console.log("signin successful")
        navigate("/")
      })
      .catch((err) => {
      console.log("Error-" , err)
      });
  }

  return (
    <div className='container text-center'>
      <br />
      <h3> LOGIN</h3>
      <br />
      <input label="Email"
        onChange={event => setValues(prev => ({ ...prev, email: event.target.value }))}
        placeholder="Enter Email Address" />
      <br />
      <br />
      <br />
      <input label="Pass"
        onChange={event => setValues(prev => ({ ...prev, pass: event.target.value }))}
        placeholder="Enter Password" />
      <br />
      <br />
      <br />
      <a href="https://www.madcapradio.com/">forgot Your Password?</a> <br />
      <br />
      <br />
      <br />
      <button className='btn btn-danger'
      
       onClick={handleSubmission}><h4>Sign in</h4></button>
      <br />
      <br />
      <a href="https://www.madcapradio.com/">Create account</a>
    </div>

  )
}

export default Login;