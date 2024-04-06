import React from "react";
import blackbarber from "../../../Assets/blackbarber.svg";
import style from "../BeautyServices/style.module.css";
import { IoCheckboxOutline } from "react-icons/io5";
import Button from "../../Button/index";

const BeautyServices = () => {
  return (
    <div className={style.beautycontainer}>
      <div className={style.containers}>
        <div className={style.emptydiv}></div>
        <img src={blackbarber} alt="barber" className={style.barber} />
      </div>
      <div>
        <h4 className={style.h4}>We provide the best beauty services here </h4>
        <ul className={style.ul}>
          <li>
            <IoCheckboxOutline className={style.tick} /> Dive into a vast array
            of beauty services and products from top-rated salons, spas,
            skincare clinics, makeup artists, and more.
          </li>
          <li>
            {" "}
            <IoCheckboxOutline className={style.tick} />
            Say goodbye to endless scrolling. Our smart recommendation engine
            tailors suggestions based on your preferences, ensuring you find the
            perfect match for your unique beauty needs effortlessly.
          </li>
          <li>
            {" "}
            <IoCheckboxOutline className={style.tick} />
            Book appointments with ease directly through our platform.{" "}
          </li>
          <li>
            <IoCheckboxOutline className={style.tick} />
            With fast confirmations from your clients, scheduling your next
            beauty indulgence has never been smoother
          </li>
        </ul>
        <Button
          text="Book An Appointment"
          width="500px"
          className={style.button}
        />
      </div>
    </div>
  );
};

export default BeautyServices;
