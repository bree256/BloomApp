import React from "react";
import Navbar from "../Homepage/Navbar";
import mail from "../../Assets/mail.svg";
import phone from "../../Assets/phone.svg";
import location from "../../Assets/location.svg";
import blankspace from "../../Assets/blankspace.svg";
import style from "../Contacts/style.module.css";
import Footer from "../Homepage/Footer";
import Button from "../Button/index";
import messagearrow from "../../Assets/messagearrow.svg";

const Contacts = () => {
  return (
    <div className={style.contactus}>
      <Navbar className={style.contactnav} />
      <div className={style.contactdiv}>
        <h1>Contact Us</h1>
        <p>
          We value your feedback, questions & concerns at Bloom. Our dedicated
          team is here to assist and provide all the support you need on your
          beauty journey. Please do not hesitate to contact us on any of the
          following contact methods
        </p>
        <div className={style.container}>
          <div className={style.card}>
            <img src={mail} alt="mail" className={style.icon} />
            <p>Support@bloom.com</p>
          </div>
          <div className={style.card}>
            <img src={phone} alt="phoneicon" className={style.icon} />
            <p>+2347098745612</p>
          </div>
          <div className={style.card}>
            <img src={location} alt="locationicon" className={style.icon} />
            <p>Somewhere on earth</p>
          </div>
        </div>
      </div>
      <div class={style.formcontainer}>
        <form class={style.form}>
          <div class={style.namecontainer}>
            <div class={style.inputwrapper}>
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder="First Name"
                class={style.input}
                required
              />
            </div>
            <div class={style.inputwrapper}>
              <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Last Name"
                class={style.input}
                required
              />
            </div>
          </div>
          <div class={style.inputwrapper}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              class={style.email}
              required
            />
          </div>
          <div class={style.inputwrapper}>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              class={style.email}
              required
            />
          </div>
          <div class={style.inputwrapper}>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="message"
              class={style.message}
              required
            ></textarea>
          </div>
          <div class={style.inputwrapper}>
            <Button
              text="Send Message"
              width="300px"
              className={style.button}
              imgSrc={messagearrow}
            />
            <br></br>
            <br></br>
          </div>
        </form>
        <div className={style.imagediv}>
          <img src={blankspace} alt="blankspace" className={style.image} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
