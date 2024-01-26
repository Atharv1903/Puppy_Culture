import React, { useState } from 'react';
import './Createaccount.css';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../../src/firebase';

const Createaccount = () => {
  const [errorMsg, setErrorMsg] = useState("");
 const navigate = useNavigate();
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    pass: ""
  }) 

  const handleSubmission = async () => {
    if (!values.firstname || !values.lastname || !values.email || !values.pass) {
      console.log("some field is empty");
      return;
    }
     
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then( (userCredentials) => {
       const user = userCredentials.user;
       console.log(user)

    
       navigate("/");
      })
      .catch((err,user) => {

        setErrorMsg(err.messsage);
        console.log(err)
      });
  }

  return (
    <div className='container text-center'>
      <br />
      <h3> Create account</h3>
      <br />
      <input type="text" name="firstname" id="" placeholder='First name'
        onChange={(event) =>
          setValues((prev) => ({ ...prev, firstname: event.target.value }))} />
      <br />
      <br />
      <br />
      <input type="text" name="lastname" id="" placeholder='Last name'
        onChange={(event) =>
          setValues((prev) => ({ ...prev, lastname: event.target.value }))} />
      <br />
      <br />
      <br />
      <input type="text" name="email" placeholder='Email'
        onChange={(event) =>
          setValues((prev) => ({ ...prev, email: event.target.value }))} />
      <br />
      <br />
      <br />
      <input type="text" name="pass" placeholder='Password'
        onChange={(event) =>
          setValues((prev) => ({ ...prev, pass: event.target.value }))} />
      <br />
      <br />
      <b className='error'>{errorMsg}</b> <br />
      <button className='btn btn-danger'
        onClick={handleSubmission}
      ><h4>Create</h4></button>
      <br />

    </div>
  )
};

export default Createaccount;