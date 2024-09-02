import React from "react";
import "../Login/login.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const Login = () => {
  return (
    <>
      <div className="container">
        <div className="loginForm">
          <form className="loginHead">
            <h2>XXXXXXXXXX</h2>
            <h3>Welcome Back</h3>

            <div className="login-email">
              {" "}
              <input type="emal" placeholder="Email" />
            </div>
            <div className="login-password">
              <input type="password" placeholder="******" />
            </div>
            <div className="opt-rst-psrd">
              <h6>Remember me</h6>
              <h6>
                <Link>Reset Password</Link>
              </h6>
            </div>
            <div className="div">
              <span>
                <Button>Login</Button>
              </span>
            </div>
            <h5>
              Didn't have an account ? <Link to="/signup">SignUp</Link>
            </h5>
            <hr />
            <h6>or</h6>
            <hr />
            <span>
              <Button>Login with google</Button>
            </span>
            <span>
              <Button>Login with instagram</Button>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
