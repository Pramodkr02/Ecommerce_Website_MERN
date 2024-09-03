import React from "react";
import "../ForgotPassword/forgotpassword.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const ForgotPassword = () => {
  return (
    <>
      <div className="Signup-container">
        <form className="forgot-form">
          <h2>xxxxxxxxx</h2>
          <label htmlFor="email">Enter Your Email</label>
          <input type="email" placeholder="Email" />
          <h6>or</h6>
          <label htmlFor="number">Enter Your Phone No</label>
          <input type="phone" placeholder="Phone Number" />
          <div className="div">
            <span>
              {" "}
              <Link>
                {" "}
                <Button type="submit">Send Code To Your Phone/Email</Button>
              </Link>
            </span>
            <h5 className="jhjh">
              <Link to="/login">Back</Link>
            </h5>
            <h5 className="backToHome">
              <Link to="/"> Back to home</Link>
            </h5>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
