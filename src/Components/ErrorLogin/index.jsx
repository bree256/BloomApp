import React from "react";
import Button from "../Button/index";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import style from "../ErrorLogin/style.module.css";
import { FaRegEyeSlash } from "react-icons/fa6";
// import * as React from "react";
// import FormControl from "@mui/material/FormControl";
// import Input from "@mui/material/Input";
// import InputLabel from "@mui/material/InputLabel";
// import FormHelperText from "@mui/material/FormHelperText";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

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
          <Box
            className={style.errorfield}
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "90%" },
            }}
            noValidate
            autoComplete="off"
          ></Box>
          <TextField
            error
            id="filled-error-helper-text"
            label="Email"
            defaultValue="Miracleephraim@gmail.co"
            helperText="We could not reach the email you provided. Try again.."
            variant="filled"
            sx={{
              width: "400px",
            }}
            classes={style.errorfield}
          />
          {/* <FormControl error variant="standard">
            <InputLabel htmlFor="component-error">Email</InputLabel>
            <Input
              id="component-error"
              defaultValue="Email"
              aria-describedby="component-error-text"
            />
            <FormHelperText id="component-error-text">
              We could not reach the email you provided.Try again
            </FormHelperText>
          </FormControl> */}
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
