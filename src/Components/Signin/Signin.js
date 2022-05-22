import React from "react";
import "./Signin.css";


const Signin = () => {
  return (
    <>
      <input
        className="signin_text"
        type="text"
        placeholder="Phone number, username, or email"
      />
      <input className="signin_text" type="password" placeholder="Password" />
      <button className="signin_button">Log In</button>
    </>
  );
};

export default Signin;
