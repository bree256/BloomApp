import React from "react";
import Button from "../../Button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import style from "../Login/style.module.css";
import { FaRegEyeSlash } from "react-icons/fa6";

const Login = () => {
  return (
    <div>
      <div className={style.button}>
        <h1>Log in</h1>
        <p>Or continue with</p>
        <div className={style.buttoncontainer}>
          <Button
            img={FcGoogle}
            backgroundColor="white"
            text="Google"
            border="2px solid #947f69"
            width="220px"
            className={style.buttons}
          />
          <Button
            img={FaApple}
            backgroundColor="white"
            text="Apple"
            border="2px solid #947f69"
            width="220px"
            className={style.buttons}
          />
        </div>
        <div className={style.container}>
          <input
            className={style.input}
            type="text"
            id="email"
            name="email"
            required
            placeholder="Email"
          />

          <div className={style.inputcontainer}>
            <span className={style.spaneye}>
              <FaRegEyeSlash />
            </span>
            <input
              className={style.input}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div className={style.inputcontainer}>
            <span className={style.spaneye}>
              <FaRegEyeSlash />
            </span>
            <input
              className={style.input}
              type="password"
              id="password"
              name="password"
              placeholder="Confirm Password"
              required
            />
          </div>
          <p> Forgot password?</p>
          <div className={style.checkboxpart}>
            <input type="checkbox" className={style.checkbox} />
            <label for="Terms and conditions" className={style.remember}>
              By checking this box, you agree to our{" "}
              <span className={style.span}>Terms & Conditions</span>
            </label>
          </div>
          <Button
            backgroundColor="#836243"
            text="Log in"
            width="400px"
            className={style.black}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
