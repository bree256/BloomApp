import React from "react";
import home from "../../../Assets/home.svg";
import arrow from "../../../Assets/arrow.svg";
import camera from "../../../Assets/camera.svg";
import building from "../../../Assets/building.svg";
import star from "../../../Assets/star.svg";
import style from "../Section/style.module.css";
const Section = () => {
  return (
    <section className={style.cardcontainer}>
      <div className={style.card}>
        <img src={arrow} alt="arrow" className={style.arrow} />
        <img src={home} alt="homeicon" className={style.home} />

        <p>Vast array of beauty services</p>
      </div>
      <div className={style.card}>
        <img src={arrow} alt="arrow" className={style.arrow} />
        <img src={camera} alt="cameraicon" className={style.home} />

        <p>Vast array of beauty services</p>
      </div>
      <div className={style.card}>
        <img src={arrow} alt="arrow" className={style.arrow} />
        <img src={building} alt="buildingicon" className={style.home} />

        <p>Vast array of beauty services</p>
      </div>
      <div className={style.card}>
        <img src={arrow} alt="arrow" className={style.arrow} />
        <img src={star} alt="staricon" className={style.home} />

        <p>Vast array of beauty services</p>
      </div>
    </section>
  );
};
export default Section;
