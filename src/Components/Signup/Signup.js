import React, { useState } from "react";
import "./Signup.css";
import { storage, auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [userData, setUserData] = useState({
    emailId: "",
    name: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, userData.emailId, userData.password)
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
        className="singup_text"
        type="text"
        placeholder="Mobile number or Email"
        name="emailId"
        onChange={handleChange}
      />
      <input
        className="singup_text"
        type="text"
        placeholder="Full Name"
        name="name"
        onChange={handleChange}
      />
      <input
        className="singup_text"
        type="text"
        placeholder="Username"
        name="username"
        onChange={handleChange}
      />
      <input
        className="singup_text"
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
      />
      <button className="singup_button" onClick={handleSignUp}>
        Log In
      </button>
    </>
  );
};

export default Signup;
