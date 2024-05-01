import Button from "../../Button/index.jsx";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import style from "./style.module.css";
import { FaRegEyeSlash } from "react-icons/fa6";
import React, { useState } from "react";
import { auth } from "../../../firebase/config.js";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [terms, setTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userCredentials, setUserCredentials] = useState({});

  const handleTerms = (event) => {
    setTerms(event.target.checked);
  };

  function handleCredentials(e) {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  }

  function handleLogin(e) {
    e.preventDefault();
    setErrorMessage("");

    signInWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        // Signed in
        console.log(userCredential.user);
        const user = userCredential.user;

        // Navigate to placeholder page if user exists
        navigate("/placeholder");
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          // Redirect to signup page
          navigate("/signup");
        } else {
          // Handle other errors
          setErrorMessage(error.message);
        }
      });
  }

  function handlePasswordReset() {
    const email = prompt("please enter your email");
    sendPasswordResetEmail(auth, email);
    alert("Email Sent! Check your inbox for password reset instructions.");
  }

  return (
    <div className={style.Login}>
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
            onChange={(e) => handleCredentials(e)}
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
              onChange={(e) => handleCredentials(e)}
            />
          </div>
          <p onClick={handlePasswordReset}> Forgot password?</p>
          <div className={style.checkboxpart}>
            <input
              onChange={handleTerms}
              type="checkbox"
              className={style.checkbox}
            />
            <label htmlFor="Terms and conditions" className={style.remember}>
              By checking this box, you agree to our{" "}
              <span className={style.span}>Terms & Conditions</span>
            </label>
          </div>
          <button className={style.bttnss} onClick={(e) => handleLogin(e)}>
            Login
          </button>

          {errorMessage && <div className={style.error}>{errorMessage}</div>}
        </div>
      </div>
    </div>
  );
};

export default Login;
