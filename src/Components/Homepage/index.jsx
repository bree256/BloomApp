import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import style from "../Homepage/style.module.css";
import Section from "./Section";

const Homepage = () => {
  return (
    <section className={style.homepage}>
      <Navbar />
      <Body />
      <div className={style.h4}>
        <h4>Why Choose Bloom ?</h4>
      </div>
      <Section />
    </section>
  );
};
export default Homepage;
