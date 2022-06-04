import React, { useState } from "react";
import "./Signin.css";
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'

const Signin = () => {
  const [cred, setCred] = useState({
    emailId: "",
    password: "",
  });

  const handleChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  const handleLogIn = () => {
    signInWithEmailAndPassword(auth, cred.emailId, cred.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <>
      <input
        className="signin_text"
        type="text"
        placeholder="Phone number, username, or email"
        name="emailId"
        onChange={handleChange}
      />
      <input
        className="signin_text"
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
      />
      <button className="signin_button" onClick={handleLogIn}>
        Log In
      </button>
    </>
  );
};

export default Signin;
