import React from "react";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import style from "../BookAnAppointment/style.module.css";
import share from "../../Assets/share.svg";
import save from "../../Assets/save.svg";
import cornrow from "../../Assets/cornrow.svg";

const BookAnAppointment = () => {
  return (
    <div>
      <Navbar />
      <section className={style.section}>
        <h1>Kinky Chic Salon</h1>
        <p>Plot 74 Ademola Adetokumbo way, Victoria Island, Lagos State</p>
        <h4>...making you standout beautifully!</h4>
        <div className={style.logos}>
          <div className={style.logocontainer}>
            <img src={share} alt="sharelogo" className={style.logo} />
            <p>share</p>
          </div>
          <hr className={style.hr}></hr>
          <div className={style.logocontainer}>
            <img src={save} alt="savelogo" className={style.logo} />
            <p>save</p>
          </div>
          <hr className={style.hr1}></hr>
        </div>
        <div className={style.book}>
          <div>
            <h1>Book An Appointment</h1>
            <h3>Please select a service</h3>
          </div>
          <div>
            <img src={cornrow} alt="cornrow image" className={style.image} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BookAnAppointment;
