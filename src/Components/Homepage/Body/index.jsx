import React from "react";
import barber from "../../../Assets/barber.svg";
import style from "../Body/style.module.css";
import Button from "../../../Components/Button/index";

const Body = () => {
  return (
    <>
      <section className={style.body}>
        <div>
          <p className={style.p1}>
            Discover a world of
            <br />
            beauty at your
            <br />
            fingertips
            <br />
            with Bloom...
          </p>
          <p className={style.h6}>
            where elegance meets convenience.
            <br />
            Welcome to a curated marketplace aggregator designed to
            <br />
            revolutionize your beauty experience.
          </p>

          <div className={style.inputcontainer}>
            <input
              className={style.input}
              type="text"
              id="email"
              name="email"
              required
              placeholder="Enter email address"
            />
            <Button
              backgroundColor="#392b1e"
              text="Get Started"
              width="200px"
              className={style.button}
            />
          </div>
          <div className={style.services}>
            <p className={style.p1}>324</p>
            <div className={style.ps}>
              <p className={style.metrics}>Beauty Services</p>
              <p className={style.number}>Completed</p>
            </div>
            <p className={style.p1}>₦2M+</p>
            <div className={style.ps}>
              <p className={style.metrics}>Transaction completed</p>
              <p className={style.number}>Completed</p>
            </div>
          </div>
        </div>
        <div>
          <img src={barber} alt="barberimage" className={style.barber} />
        </div>
      </section>
    </>
  );
};
export default Body;
