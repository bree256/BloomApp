import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import style from "../BookAnAppointment/style.module.css";
import share from "../../Assets/share.svg";
import save from "../../Assets/save.svg";
import nobabyhair from "../../Assets/nobabyhair.svg";

const Information = () => {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleClick = () => {
    setIsNavigating(true);
    setTimeout(() => {
      navigate("/confirmed");
    }, 5000);
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

            <form className={style.form2}>
              <div className={style.namecontainer}>
                <div className={style.inputwrapper}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder=" Name"
                    className={style.input}
                    required
                  />
                </div>
              </div>

              <div className={style.inputwrapper}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className={style.email}
                  required
                />
              </div>
              <div className={style.inputwrapper}>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  className={style.email}
                  required
                />
              </div>
              <div className={style.inputwrapper}>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Notes"
                  className={style.message}
                  required
                ></textarea>
              </div>
            </form>

            <div className={style.buttons2}>
              <button className={style.button1}>Cancel</button>
              <button className={style.button2} onClick={handleClick}>
                Next
              </button>
            </div>
          </div>
          <div>
            <img src={nobabyhair} alt="baby hair" className={style.image} />
          </div>
        </div>
      </section>
      <Footer />
      {isNavigating && (
        <div className={style.loading}>
          <p>Please wait...</p>
        </div>
      )}
    </div>
  );
};

export default Information;
