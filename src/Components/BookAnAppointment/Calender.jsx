import React from "react";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import style from "../BookAnAppointment/style.module.css";
import share from "../../Assets/share.svg";
import save from "../../Assets/save.svg";
import beardcomb from "../../Assets/beardcomb.svg";
import { useNavigate } from "react-router-dom";
import BasicDateCalendar from "./Calenderdates";
import BasicDatePicker from "./Datepicker";
import BasicTimePicker from "./Timeclock";

const Calender = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/information");
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
          <div>
            <h1>Book An Appointment</h1>
            <p>
              Below you can find a list of available time slots at kinky chic
              salon. Click on a time slot to proceed with booking
            </p>
            <BasicDatePicker className={style.date} />
            <div className={style.timecontainer}>
              <BasicDateCalendar className={style.calender} />
              <BasicTimePicker />
            </div>

            <div className={style.buttons2}>
              <button className={style.button1}>Cancel</button>
              <button className={style.button2} onClick={handleClick}>
                Next
              </button>
            </div>
          </div>
          <div>
            <img src={beardcomb} alt="beard comb" className={style.image} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Calender;
