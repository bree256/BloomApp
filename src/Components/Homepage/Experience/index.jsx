import React from "react";
import Button from "../../Button/index";
import style from "../Experience/style.module.css";

const Experience = () => {
  return (
    <>
      <hr className={style.hr}></hr>
      <div className={style.experience}>
        <div>
          <h2>Experience Beauty Unleashed</h2>
          <p>
            Join the Bloom Beauty community today and unlock a world of beauty
            possibilities. Whether you're a beauty enthusiast seeking your next
            pampering session or a business owner ready to showcase your
            talents, Bloom Beauty is your passport to beauty bliss. Discover,
            indulge, and bloom with us.
          </p>
        </div>
        <div>
          <Button
            text="Explore Services"
            width="250px"
            className={style.button}
          />
        </div>
      </div>
      <hr className={style.hr}></hr>
    </>
  );
};

export default Experience;
