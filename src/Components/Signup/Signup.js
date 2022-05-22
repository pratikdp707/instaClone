import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <>
      <input
        className="singup_text"
        type="text"
        placeholder="Mobile number or Email"
      />
      <input
        className="singup_text"
        type="text"
        placeholder="Full Name"
      />
      <input
        className="singup_text"
        type="text"
        placeholder="Username"
      />
      <input className="singup_text" type="password" placeholder="Password" />
      <button className="singup_button">Log In</button>
    </>
  );
};

export default Signup;
