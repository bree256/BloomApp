// import { CustomInput } from "./input.jsx";
// import styles from "./signup.module.css";
// import { ButtonSignup } from "./ButtonSignup.jsx";
// import { FcGoogle } from "react-icons/fc";
// import { FaApple } from "react-icons/fa";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import {auth} from "../firebase/config.js"
// import { createUserWithEmailAndPassword } from "firebase/auth";

// export function SignupPage() {
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [userCredentials, setUserCredentials] = useState({});

//   console.log(auth);

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   if (userCredentials.value !== confirmPassword) {
//   //     setErrorMessage("Passwords do not match.");
//   //     return;
//   //   }

//   // }

//   function handleCredentials(e) {

//     setUserCredentials({...userCredentials, [e.target.name]: e.target.value});
//     console.log(userCredentials);
//   }

//   function handleSignup(e) {
//     e.preventDefault();
//     setErrorMessage("");
//     createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
//   .then((userCredential) => {
//     const user = userCredential.user;

//   })
//   .catch((error) => {
//     setErrorMessage(error.message);
//   });

//   }

//   return (
//     <div className={styles.container}>
//       <h1>Create Your Free Account</h1>
//       <p>You’re few steps away from creating appointments on Bloom!</p>
//       <form>
//         <div className={styles.inputcontainer}>
//           <input
//             className={styles.input}
//             type="text"
//             id="name"
//             onChange={(e) =>(handleCredentials(e))}
//             placeholder="First Name"
//           />
//           <input
//             className={styles.input}
//             type="text"
//             id="lastname"
//             onChange={(e) =>(handleCredentials(e))}
//             placeholder="Last Name"
//           />
//         </div>
//         <input
//           className={styles.inputemail}
//           type="text"
//           name="email"
//           id="email"
//           // value={email}
//           onChange={(e) =>(handleCredentials(e))}
//           placeholder="Email"
//         />
//         <CustomInput
//           className={styles.Custom}
//           type="password"
//           name = "password"
//           placeholder="Password"
//           id="password"
//           onChange={(e) =>(handleCredentials(e))}
//         />
//         <CustomInput
//           type="password"
//           id="confirmPassword"
//           value={confirmPassword}
//           onChange={(e) =>(handleCredentials(e))}
//           placeholder="Confirm Password"
//         />
//         {errorMessage && <span className={styles.error}>{errorMessage}</span>}
//         <div className={styles.logFlex}>
//           <input type="checkbox" />
//           <label>
//             By checking this box, you agree to our Terms & Conditions
//           </label>
//           <div>
//             {" "}
//             <br />
//               <ButtonSignup onClick ={(e) =>(handleSignup(e))}>Sign Up</ButtonSignup>
//               {
//                    errorMessage &&
//                    <div className="error">
//                    {errorMessage}
//                  </div>
//               }
//             <br />
//             <p>or sign up here</p>
//           </div>
//         </div>
//         <div className={styles.btnss}>
//           <button className={styles.btns} type="outline">
//             <FcGoogle /> Google
//           </button>
//           <button className={styles.btnn}>
//             <FaApple fill="black" />
//             Apple
//           </button>
//         </div>{" "}
//         <br />
//         <p>
//           Already have an account with Bloom?
//           <Link className={styles.anchor} to="/Login">
//             Login in
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }

// import { CustomInput } from "./input.jsx";
// import styles from "./signup.module.css";
// import { ButtonSignup } from "./ButtonSignup.jsx";
// import { FcGoogle } from "react-icons/fc";
// import { FaApple } from "react-icons/fa";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { auth } from "../firebase/config.js";
// import { createUserWithEmailAndPassword } from "firebase/auth";

// export function SignupPage() {
//   const [userCredentials, setUserCredentials] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   function handleCredentials(e) {
//     setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
//   }

//   function handleSignup(e) {
//     e.preventDefault();
//     setErrorMessage("");

//     // Check if passwords match
//     if (userCredentials.password !== confirmPassword) {
//       setErrorMessage("Passwords do not match.");
//       return;
//     }

//     // Create user with email and password
//     createUserWithEmailAndPassword(
//       auth,
//       userCredentials.email,
//       userCredentials.password
//     )
//       .then((userCredential) => {
//         // Sign-up successful, do something if needed
//         const user = userCredential.user;
//       })
//       .catch((error) => {
//         // Handle errors
//         setErrorMessage(error.message);
//       });
//   }

//   return (
//     <div className={styles.container}>
//       <h1>Create Your Free Account</h1>
//       <p>You’re few steps away from creating appointments on Bloom!</p>
//       <form onSubmit={handleSignup}>
//         <div className={styles.inputcontainer}>
//           <input
//             className={styles.input}
//             type="text"
//             name="firstName"
//             value={userCredentials.firstName}
//             onChange={handleCredentials}
//             placeholder="First Name"
//           />
//           <input
//             className={styles.input}
//             type="text"
//             name="lastName"
//             value={userCredentials.lastName}
//             onChange={handleCredentials}
//             placeholder="Last Name"
//           />
//         </div>
//         <input
//           className={styles.inputemail}
//           type="text"
//           name="email"
//           value={userCredentials.email}
//           onChange={handleCredentials}
//           placeholder="Email"
//         />
//         <CustomInput
//           className={styles.Custom}
//           type="password"
//           name="password"
//           value={userCredentials.password}
//           onChange={handleCredentials}
//           placeholder="Password"
//         />
//         <CustomInput
//           type="password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           placeholder="Confirm Password"
//         />
//         {errorMessage && <span className={styles.error}>{errorMessage}</span>}
//         <div className={styles.logFlex}>
//           <input type="checkbox" />
//           <label>
//             By checking this box, you agree to our Terms & Conditions
//           </label>
//           <div>
//             <ButtonSignup type="submit">Sign Up</ButtonSignup>
//             setTimeout(() => {
//               Navigate("/Login")
//             }, 4000);
//             {errorMessage && <div className={styles.error}>{errorMessage}</div>}
//             <br />
//             <p>or sign up here</p>
//           </div>
//         </div>
//         <div className={styles.btnss}>
//           <button className={styles.btns} type="outline">
//             <FcGoogle /> Google
//           </button>
//           <button className={styles.btnn}>
//             <FaApple fill="black" />
//             Apple
//           </button>
//         </div>{" "}
//         <br />
//         <p>
//           Already have an account with Bloom?
//           <Link className={styles.anchor} to="/Login">
//             Login in
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }

import { CustomInput } from "./input.jsx";
import styles from "./signup.module.css";
import { ButtonSignup } from "./ButtonSignup.jsx";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Link } from "react-router-dom";
import { auth } from "../firebase/config.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

export function SignupPage() {
  const [userCredentials, setUserCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  function handleCredentials(e) {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  }

  function handleSignup(e) {
    e.preventDefault();
    setErrorMessage("");

    // Check if passwords match
    if (userCredentials.password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Create user with email and password
    createUserWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        // Sign-up successful, navigate to login page
        navigate("/Login"); // Use navigate to redirect
      })
      .catch((error) => {
        // Handle errors
        setErrorMessage(error.message);
      });
  }

  return (
    <div className={styles.container}>
      <h1>Create Your Free Account</h1>
      <p>You’re few steps away from creating appointments on Bloom!</p>
      <form onSubmit={handleSignup}>
        <div className={styles.inputcontainer}>
          <input
            className={styles.input}
            type="text"
            name="firstName"
            value={userCredentials.firstName}
            onChange={handleCredentials}
            placeholder="First Name"
          />
          <input
            className={styles.input}
            type="text"
            name="lastName"
            value={userCredentials.lastName}
            onChange={handleCredentials}
            placeholder="Last Name"
          />
        </div>
        <input
          className={styles.inputemail}
          type="text"
          name="email"
          value={userCredentials.email}
          onChange={handleCredentials}
          placeholder="Email"
        />
        <CustomInput
          className={styles.Custom}
          type="password"
          name="password"
          value={userCredentials.password}
          onChange={handleCredentials}
          placeholder="Password"
        />
        <CustomInput
          type="password"
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
            <ButtonSignup type="submit">Sign Up</ButtonSignup>
            <br />
            <p className={styles.sign}>or sign up here</p>
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
            Login in{" "}
          </Link>
        </p>
      </form>
    </div>
  );
}
