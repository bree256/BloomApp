import React from "react";
import Navbar from "../Homepage/Navbar";
import style from "../Aboutus/style.module.css";
import Footer from "../Homepage/Footer";
import bobweave from "../../Assets/bobweave.svg";
import salonimage from "../../Assets/salonimage.svg";
import beardshave from "../../Assets/beardshave.svg";
import spa from "../../Assets/spa.svg";

const Aboutus = () => {
  return (
    <div className={style.about}>
      <Navbar />
      <div className={style.container}>
        <h1>Our Story</h1>
        <p>
          Welcome to Bloom, your partner in achieving total beauty . Our
          aggregated beauty businesses are here to transform you beautifully, so
          you bloom.
        </p>
        <br></br>
        <br></br>
      </div>
      <section className={style.section}>
        <div className={style.cardcontainer}>
          <img src={bobweave} alt="weave" className={style.image1} />
          <div className={style.textcontainer}>
            <h3 className={style.h3}>Inspiring Transformation Story</h3>
            <hr className={style.hr1}></hr>
            <p className={style.p}>
              At Bloom, we believe that beauty is more than skin deep—it's a
              celebration of individuality, empowerment, and self-expression.
              Our mission is to provide a platform where beauty enthusiasts and
              businesses alike can come together to discover, connect, and
              flourish.
            </p>
          </div>
        </div>
        <div className={style.cardcontainer}>
          <div className={style.textcontainer2}>
            <h3 className={style.h3}>A Passionate Story</h3>
            <hr className={style.hr2}></hr>
            <p className={style.p}>
              Founded with a passion for revolutionizing the beauty industry,
              Bloom is more than just a marketplace aggregator—it's a
              community-driven ecosystem dedicated to fostering creativity,
              diversity, and inclusivity.
            </p>
          </div>
          <img src={beardshave} alt="beard shave" className={style.image2} />
        </div>
        <div className={style.cardcontainer}>
          <img src={salonimage} alt="salon" className={style.image1} />
          <div className={style.textcontainer}>
            <h3 className={style.h3}>Continued Growth Story</h3>
            <hr className={style.hr}></hr>
            <p className={style.p}>
              With a curated selection of top-rated salons, spas, skincare
              clinics, makeup artists, and more, Bloom offers a one-stop
              destination for all your beauty needs. Whether you're seeking the
              latest trends, expert advice, or simply a moment of
              self-indulgence, we're here to make your beauty journey
              unforgettable.
            </p>
          </div>
        </div>
        <div className={style.cardcontainer}>
          <div className={style.textcontainer2}>
            <h3 className={style.h3}>Collaborating for Success Story</h3>
            <hr className={style.hr4}></hr>
            <p className={style.p}>
              Driven by innovation and guided by integrity, we're committed to
              empowering beauty entrepreneurs to thrive while providing our
              users with unparalleled convenience, choice, and confidence.
            </p>
          </div>
          <img src={spa} alt="spa" className={style.image2} />
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
};

export default Aboutus;
