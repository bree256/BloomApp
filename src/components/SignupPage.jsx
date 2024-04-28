import { CustomInput } from "./input.jsx";
import styles from "./signup.module.css";
import { ButtonSignup } from "../Components/ButtonSignup.jsx";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export function SignupPage() {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const formData = {
        name: name,
        lastname: lastname,
        email: email,
        password: password,
      };
      // const response = await axios.post('https://localhost:5003/signup', formData);
      // console.log(response.data);
    } catch (error) {
      console.error("Error signing up:", error);
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
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First Name"
          />
          <input
            className={styles.input}
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
        </div>
        <input
          className={styles.inputemail}
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <CustomInput
          className={styles.Custom}
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <CustomInput
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />
        {errorMessage && <span className={styles.error}>{errorMessage}</span>}
        <div className={styles.logFlex}>
          <input type="checkbox" />
          <label>
            By checking this box, you agree to our Terms & Conditions
          </label>
          <div>
            {" "}
            <br />
            <Link to="/EmailVerification">
              <ButtonSignup type="submit">Sign Up</ButtonSignup>
            </Link>
            <br />
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
