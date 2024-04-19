import React from "react";
import Navbar from "../Homepage/Navbar";
import style from "../Aboutus/style.module.css";
import Footer from "../Homepage/Footer";

const Aboutus = () => {
  return (
    <div className={style.about}>
      <Navbar />
      <div className={style.container}>
        <h1>Our Story</h1>
        <p>
          Welcome to Bloom, your partner in achieving total beauty . Our
          aggregated beauty businesses are here to transform you beautifully, so
          you bloom.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Aboutus;
