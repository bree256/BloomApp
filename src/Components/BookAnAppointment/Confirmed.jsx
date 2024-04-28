import React from "react";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import style from "../BookAnAppointment/style.module.css";
import share from "../../Assets/share.svg";
import save from "../../Assets/save.svg";
import ladymohawk from "../../Assets/ladymohawk.svg";
import greentick from "../../Assets/greentick.svg";
import { useNavigate } from "react-router-dom";

const Confirmed = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/homepage");
  };
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
        <div className={style.book2}>
          <div className={style.confirmed}>
            <h1 className={style.h1}>Book An Appointment</h1>
            <div className={style.checked}>
              <h4>Booking Confirmed!</h4>
              <h6>Booking number: KCS10411</h6>
              <img src={greentick} alt="tick icon" className={style.icon} />
              <p>
                You will soon receive a notification from Kinky Chic Salon on
                how to proceed with your booking.
              </p>
              <button className={style.button2} onClick={handleClick}>
                Back to Home
              </button>
            </div>
          </div>
          <div>
            <img src={ladymohawk} alt="woman" className={style.image} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Confirmed;
