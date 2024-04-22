
import {Button} from '../../Button/index.js'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import style from "./style.module.css";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
// import Homepage from "../Homepage";
import {auth} from '../../../firebase/config.js'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmpassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  console.log(auth)
  console.log({
    password,
    email,
    // confirmpassword,
    terms,
  });
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  // const handleConfirmPassword = (event) => {
  //   setConfirmPassword(event.target.value);
  // };
  const handleTerms = (event) => {
    setTerms(event.target.checked);
  };
  const handleLogin = () => {
    setIsSubmitting(true);
    const payload = { username: email, password, terms };
    console.log({ payload }, "im inside handlelogin");
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(async (response) => {
        if (response.status >= 400) {
          const data = await response.json();
          throw data;
        }
        return response.json();
      })

      .then((response) => {
        console.log("i got a login success", response);

        navigate("/homepage");
      })
      .catch((error) => {
        console.log("i got a login error", error.message);

        setError("Invalid username or password, Please try again!");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  console.log({ style });
  return (
    <div className={style.Login}>
      <div className={style.button}>
        <h1>Log in</h1>

        {error && <div className={style.error}>{error}</div>}
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
            onChange={handleEmail}
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
              onChange={handlePassword}
            />
          </div>
          {/* <div className={style.inputcontainer}>
            <span className={style.spaneye}>
              <FaRegEyeSlash />
            </span>
            <input
              className={style.input}
              type="password"
              id="Confirm password"
              name="Confirm password"
              placeholder="Confirm Password"
              required
              onChange={handleConfirmPassword}
            />
          </div> */}
          <p> Forgot password?</p>
          <div className={style.checkboxpart}>
            <input
              onChange={handleTerms}
              type="checkbox"
              className={style.checkbox}
            />
            <label for="Terms and conditions" className={style.remember}>
              By checking this box, you agree to our{" "}
              <span className={style.span}>Terms & Conditions</span>
            </label>
          </div>
          <button className={style.bttns}
            onClick={handleLogin}

      
          >Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;



