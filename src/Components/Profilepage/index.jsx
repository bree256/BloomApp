import React from "react";
import Navbar from "../Homepage/Navbar";
import profileimage from "../../Assets/profileimage.svg";
import profilewoman from "../../Assets/profilewoman.svg";
import style from "../Profilepage/style.module.css";
import edit from "../../Assets/edit.svg";
import bookmarkprofile from "../../Assets/bookmarkprofile.svg";
import feedback from "../../Assets/feedback.svg";
import notification from "../../Assets/notification.svg";
import payment from "../../Assets/payment.svg";
import messages from "../../Assets/messages.svg";
import rating from "../../Assets/rating.svg";
import settings from "../../Assets/settings.svg";
import rightsign from "../../Assets/rightsign.svg";

const Profilepage = () => {
  return (
    <div className={style.profilepage}>
      <Navbar />
      <div>
        <div className={style.namecontainer}>
          <h2 className={style.h2}>Tamilola Adeboye</h2>
          <p className={style.p}>tamilolaadeboye@gmail.com</p>
        </div>
        <img
          src={profileimage}
          alt="background image"
          className={style.profileimage}
        />
        <img src={profilewoman} alt="woman" className={style.profilewoman} />
      </div>
      <div className={style.list}>
        <ul className={style.ul}>
          <li className={style.li}>
            <img src={edit} alt="icon" className={style.icon} />
            Edit Profile
            <img src={rightsign} alt="icon" className={style.righticon} />
          </li>
          <hr className={style.hr}></hr>
          <li className={style.li}>
            <img src={messages} alt="icon" className={style.icon} />
            Messages
            <img src={rightsign} alt="icon" className={style.righticon} />
          </li>
          <hr className={style.hr}></hr>
          <li className={style.li}>
            <img src={notification} alt="icon" className={style.icon} />
            Notification
            <img src={rightsign} alt="icon" className={style.righticon} />
          </li>
          <hr className={style.hr}></hr>
          <li className={style.li}>
            <img src={bookmarkprofile} alt="icon" className={style.icon} />
            Bookmark
            <img src={rightsign} alt="icon" className={style.righticon} />
          </li>
          <hr className={style.hr}></hr>
          <li className={style.li}>
            <img src={payment} alt="icon" className={style.icon} />
            Payment History
            <img src={rightsign} alt="icon" className={style.righticon} />
          </li>
          <hr className={style.hr}></hr>
          <li className={style.li}>
            <img src={feedback} alt="icon" className={style.icon} />
            Feedback
            <img src={rightsign} alt="icon" className={style.righticon} />
          </li>
          <hr className={style.hr}></hr>
          <li className={style.li}>
            <img src={settings} alt="icon" className={style.icon} />
            Setting
            <img src={rightsign} alt="icon" className={style.righticon} />
          </li>
          <hr className={style.hr}></hr>
          <li className={style.li}>
            <img src={rating} alt="icon" className={style.icon} />
            Rating System
            <img src={rightsign} alt="icon" className={style.righticon} />
          </li>
          <hr className={style.hr}></hr>
        </ul>
      </div>
    </div>
  );
};

export default Profilepage;
