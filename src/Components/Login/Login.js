import React, { useState } from "react";
import "./Login.css";
import Grid from "@material-ui/core/Grid";
import insta_img from "../../images/9364675fb26a.svg";
import insta_logo from "../../images/logoinsta.png";
import fb from "../../images/fb.png";
import appStore from "../../images/app.png";
import playStore from "../../images/play.png";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const changeLogin = () => {
      if(isLogin) setIsLogin(false);
      else setIsLogin(true);
  }

  return (
    <>
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <div className="login_main">
            <div>
              <img src={insta_img} width="480px"></img>
            </div>
            <div>
              <div className="login_rightcomponent">
                <img className="login_logo" src={insta_logo}></img>
                <div className="login_signin">
                  {isLogin ? <Signin /> : <Signup />}

                  <div className="login_or_div">
                    <div className="login_divider"></div>
                    <div className="login_or">OR</div>
                    <div className="login_divider"></div>
                  </div>

                  <div className="login_fb">
                    <img src={fb} width="15px" height="15px" />
                    &nbsp;Log in with Facebook
                  </div>
                  <div className="login_password">Forgot password ?</div>
                </div>
              </div>

              <div className="login_signupoption">
                {isLogin ? (
                  <div className="login_signup">
                    Don't have an account?{" "}
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#0395F6",
                      }}
                      onClick={changeLogin}
                    >
                      Sign Up
                    </span>
                  </div>
                ) : (
                  <div className="login_signin">
                    Have an account?{" "}
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#0395F6",
                      }}
                      onClick={changeLogin}
                    >
                      Sign In
                    </span>
                  </div>
                )}
              </div>

              <div className="login_downloadSection">
                <div>Get the app.</div>
                <div className="login_option">
                  <img
                    className="login_dwimg"
                    src={appStore}
                    width="136px"
                  ></img>
                  <img src={playStore} width="136px"></img>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </>
  );
};

export default Login;
