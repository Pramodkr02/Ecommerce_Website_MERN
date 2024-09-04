import React from "react";
import "../Login/login.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Login = () => {
  return (
    <>
      <div className="LoginContainer">
        <form className="loginForm">
          <h2>XXXXXXXXXX</h2>
          <h3>Welcome Back !</h3>

          <div className="login-email">
            {" "}
            <input type="emal" placeholder="Email" />
          </div>
          <div className="login-password">
            <input type="password" placeholder="*****" />
          </div>
          <div className="opt-rst-psrd">
            <div className="checkbx">
              <div>
                <input type="checkbox" />
              </div>
              <div className="rembme">Remember me</div>
            </div>
            <div>
              <Link to="/forgotpassword">Forgot Password</Link>
            </div>
          </div>
          <div className="div">
            <span>
              <Link to="/">
                <Button type="submit">Login</Button>
              </Link>
            </span>
          </div>
          <h5 className="dont-act">
            Didn't have an account ? <Link to="/signup">SignUp</Link>
          </h5>
          <hr />
          <h6>or</h6>
          <hr />
          <span>
            <Button>Login with google</Button>
          </span>
          <span>
            <Button className="byn">Login with instagram</Button>
          </span>
          <span>
            <h5 className="backToHome">
              <Link to="/">Back to home</Link>
            </h5>
          </span>
        </form>
      </div>
    </>
  );
};

export default Login;
