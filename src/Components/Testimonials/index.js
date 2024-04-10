import React from "react";
import quotes from "../../Assets/quotes.svg";
import style from "../Testimonials/style.module.css";
import woman from "../../Assets/woman.svg";
const Testimonials = () => {
  return (
    <div className={style.testimonials}>
      <h4>Our Testimonials</h4>
      <p>
        Our satisfied clients share their success stories and experiences with
        us
      </p>
      <br></br>
      <br></br>
      <div className={style.testimonialcontainer}>
        <div>
          <div className={style.testimony}>
            <img src={quotes} alt="quotes" className={style.quote} />
            <p>
              Bloom Beauty has transformed the way I discover beauty services.
              From finding the perfect hairstylist to booking a last-minute
              facial, the app makes it effortless. I'm hooked
            </p>
          </div>
          <div className={style.customer}>
            <img src={woman} alt="woman" className={style.woman} />
            <h6>Temitope Fatum </h6>
          </div>
        </div>
        <div>
          <div className={style.testimony}>
            <img src={quotes} alt="quotes" className={style.quote} />
            <p>
              Joining Bloom Beauty was one of the best decisions for my salon.
              The platform has connected me with a steady stream of clients, and
              the support from the team is phenomenal. My business has never
              been busier!
            </p>
          </div>
          <div className={style.customer}>
            <img src={woman} alt="woman" className={style.woman} />
            <h6>Triple D Salon </h6>
          </div>
        </div>
        <div>
          <div className={style.testimony}>
            <img src={quotes} alt="quotes" className={style.quote} />
            <p>
              As an ever busy Naija traveler, Bloom has been a lifesaver. I can
              easily book appointments on the go and even explore highly trusted
              barbing salons near me. Highly recommend Ultra Men! 5 Stars!!!
            </p>
          </div>
          <div className={style.customer}>
            <img src={woman} alt="woman" className={style.woman} />
            <h6>Adams Ojerekre </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
