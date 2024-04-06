import { CustomInput } from "./input.jsx";
import styles from "./styles.module.css";
import { ButtonSignup } from "./ButtonSignup.jsx";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function SignupPage() {
  const [name, setName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("signupFormData_name");
    const storedEmail = localStorage.getItem("signupFormData_email");
    if (storedName && storedEmail) {
      setName(storedName);
      setEmail(storedEmail);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return; //Don't proceed if passwords don't match
    }

    const userData = { name, email, password };

    const signupSuccessful = true;

    if (signupSuccessful) {
      alert("signup successful");
      localStorage.setItem("signFormData_name", name);
      localStorage.setItem("signFormData_email", email);
      localStorage.setItem("signFormData_password", password);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Create Your Free Account</h1>
      <p>You’re few steps away from creating appointments on Bloom!</p>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputcontainer}>
          <input
            className={styles.input}
            type="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First Name"
          ></input>
          <input
            className={styles.input}
            type="name"
            id="lastname"
            value={lastname}
            onChange={(e) => setlastName(e.target.value)}
            placeholder="Last Name 
                    "
          ></input>{" "}
          <br />
        </div>
        <input
          className={styles.inputemail}
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        ></input>
        <CustomInput
          className={styles.Custom}
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />{" "}
        <br />
        <CustomInput
          type="password"
          id="password1"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="confirm password"
        />{" "}
        <br />
        <div className={styles.logFlex}>
          <input type="checkbox" />
          <label>
            By checking this box, you agree to our Terms & Conditions
          </label>
          <div>
                       <ButtonSignup type="submit">Sign Up</ButtonSignup> <br />
            {errorMessage && (
              <span className={styles.error}>{errorMessage}</span>
            )}
            <p>or sign up here</p>
          </div>
        </div>
        <div className={styles.btnss}>
          <button className={styles.btns} type="outline">
            <FcGoogle /> Google
          </button>
          <button className={styles.btnn}>
            <FaApple fill="black" />
            Apple
          </button>
        </div>{" "}
        <br />
        <p>
          Already have an account with Bloom?
          <Link className={styles.anchor} to="/Login">
            Login in
          </Link>
        </p>
      </form>
    </div>
  );
}
