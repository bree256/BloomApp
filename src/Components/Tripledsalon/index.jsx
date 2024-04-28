import React from "react";
import Navbar from "../Homepage/Navbar";
import share from "../../Assets/share.svg";
import save from "../../Assets/save.svg";
import style from "../Tripledsalon/style.module.css";
import barber from "../../Assets/barber.svg";
import braidedgirl from "../../Assets/braidedgirl.svg";
import blondehair from "../../Assets/blondehair.svg";
import pinkmakeup from "../../Assets/pinkmakeup.svg";
import shave from "../../Assets/shave.svg";
import calender from "../../Assets/calender.svg";
import redtag from "../../Assets/redtag.svg";
import ratedstars from "../../Assets/ratedstars.svg";
import reviewed from "../../Assets/reviewed.svg";
import roundstar from "../../Assets/roundstar.svg";
import graduate from "../../Assets/graduate.svg";
import group from "../../Assets/group.svg";
import brownstar from "../../Assets/brownstar.svg";
import roundyellow from "../../Assets/roundyellow.svg";
import dimstar from "../../Assets/dimstar.svg";
import jane from "../../Assets/jane.svg";
import manzi from "../../Assets/manzi.svg";
import wale from "../../Assets/wale.svg";
import map from "../../Assets/map.svg";
import Footer from "../Homepage/Footer";
import { useNavigate } from "react-router-dom";

const Tripledsalon = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/appointment");
  };
  return (
    <div>
      <Navbar />
      <section className={style.section}>
        <h2>Triple D Salon</h2>
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
        <br></br>
        <br></br>
        <br></br>
        <div className={style.imagecontainer}>
          <img src={barber} alt="barberimage" className={style.barber} />
          <div>
            <img src={braidedgirl} alt="braids" className={style.braided} />
            <img src={shave} alt="shave" className={style.braided} />
          </div>
          <div className={style.img2}>
            <img src={pinkmakeup} alt="braids" className={style.braided} />
            <img src={blondehair} alt="braids" className={style.braided} />
          </div>
        </div>
        <div className={style.reviews}>
          <img src={redtag} alt="tag" className={style.tag} />
          <p className={style.p}>
            One of the best,
            <br />
            mordern salons in Lagos,
            <br />
            according to customer reviews
          </p>
          <img src={ratedstars} alt="tag" className={style.tag} />
          <img src={reviewed} alt="tag" className={style.tag} />
        </div>
        <div className={style.container}>
          <div>
            <h3>Experience the pinnacle of luxury at Triple D.</h3>
            <p>
              Our salon offers a sanctuary of opulence, where every detail is
              curated to exceed expectations. Indulge in bespoke hair
              treatments, spa rituals, and personalized services from our expert
              team. Relax in our chic salon, complete with plush seating and
              complimentary beverages. With state-of-the-art facilities and
              advanced equipment, every moment at Triple D is extraordinary. Our
              commitment to unparalleled service ensures your satisfaction.
            </p>
            <p>
              {" "}
              Escape the ordinary and embrace the extraordinary at Triple D.
              Book your appointment today and discover a world of luxury in the
              heart of Lagos. Welcome to Triple D, where beauty meets
              indulgence.
            </p>
          </div>
          <div>
            <img src={calender} alt="calender" className={style.calender} />
            <button className={style.button} onClick={handleClick}>
              Book Now
            </button>
          </div>
        </div>
        <div>
          <h4>What this place offers</h4>
          <div className={style.uls}>
            <ul className={style.ul}>
              <li>Braids</li>
              <li>Wig Revamps</li>
              <li>Make Up</li>
              <li>Wig Installments</li>
              <li>Manicure</li>
              <li>Pedicure</li>
              <li>Micro Blading</li>
              <li>Tattoo & Piercings</li>
              <li>Hair Cut</li>
              <li>Hair Colouring</li>
            </ul>
            <ul className={style.ul}>
              <li>Free Wifi</li>
              <li>Free Parking on Premises</li>
              <li>Luxurious waiting Lounge</li>
              <li>Private treatment Room</li>
              <li>Professional Styling station</li>
              <li>Refreshment Bar</li>
              <li>Vanity Area</li>
              <li>Cormfortable leather chairs</li>
              <li>Fully Air conditioned</li>
              <li>Infrared Hood Drier</li>
            </ul>
          </div>
        </div>
        <div className={style.textcontainer}>
          <div>
            <div>
              <img src={brownstar} alt="star" className={style.star} />
              <h3>Our Values</h3>
            </div>
            <p>
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a beauty
              business that transcended the ordinary.
            </p>
          </div>
          <div className={style.starcontainer}>
            <div>
              <div>
                <div className={style.flex}>
                  <img src={roundstar} alt="star" className={style.star} />
                  <h4>Trust</h4>
                </div>
                <p>
                  Trust is the cornerstone of every successful business
                  transaction.
                </p>
              </div>
              <hr className={style.hr4}></hr>
              <div className={style.client}>
                <div className={style.flex}>
                  <img src={group} alt="group icon" className={style.star} />
                  <h4>Client-Centric</h4>
                </div>
                <p>
                  Your beauty and body needs are at the center of our universe.
                  We listen, understand.
                </p>
              </div>
            </div>
            <hr className={style.hr3}></hr>
            <div>
              <div>
                <div className={style.flex}>
                  <img src={graduate} alt="graduate" className={style.star} />
                  <h4>Excellence</h4>
                </div>
                <p>
                  We set the bar high for ourselves. From the ambience of our
                  environment to the services we provide.
                </p>
              </div>
              {/* <hr></hr> */}
              <div className={style.commitment}>
                <div className={style.flex}>
                  <img src={roundstar} alt="star" className={style.star} />
                  <h4>Our Commitment</h4>
                </div>
                <p>
                  We are dedicated to providing you with the highest level of
                  service, professionalism, and support.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.cardcontainer}>
          <div className={style.card}>
            <div>
              <img src={roundyellow} alt="graduate" className={style.star} />
              <img src={roundyellow} alt="graduate" className={style.star} />
              <img src={roundyellow} alt="graduate" className={style.star} />
              <img src={roundyellow} alt="graduate" className={style.star} />
              <img src={dimstar} alt="graduate" className={style.star} />
            </div>
            <h3>Amazing Stylists</h3>
            <p>
              From the moment I walked in, I was greeted with warmth and
              professionalism. The ambiance is luxurious, and the service is
              top-notch. I left feeling like royalty after my pampering session.
              Highly recommend!
            </p>
            <div className={style.profile}>
              <img src={jane} alt="graduate" className={style.person} />
              <div>
                <p>Jane Nwankwo</p>
                <p>VI, Lagos</p>
              </div>
            </div>
          </div>
          <div className={style.card}>
            <div>
              <img src={roundyellow} alt="graduate" className={style.star} />
              <img src={roundyellow} alt="graduate" className={style.star} />
              <img src={roundyellow} alt="graduate" className={style.star} />
              <img src={roundyellow} alt="graduate" className={style.star} />
              <img src={dimstar} alt="graduate" className={style.star} />
            </div>
            <h3>Amazing Stylists</h3>
            <p>
              From the moment I walked in, I was greeted with warmth and
              professionalism. The ambiance is luxurious, and the service is
              top-notch. I left feeling like royalty after my pampering session.
              Highly recommend!
            </p>
            <div className={style.profile}>
              <img src={manzi} alt="graduate" className={style.person} />
              <div>
                <p>Ehireme manzi</p>
                <p>Okota, Lagos</p>
              </div>
            </div>
          </div>
          <div className={style.card}>
            <div>
              <img src={roundyellow} alt="graduate" className={style.star} />
              <img src={roundyellow} alt="graduate" className={style.star} />
              <img src={roundyellow} alt="graduate" className={style.star} />
              <img src={roundyellow} alt="graduate" className={style.star} />
              <img src={roundyellow} alt="graduate" className={style.star} />
            </div>
            <h3>Amazing Stylists</h3>
            <p>
              From the moment I walked in, I was greeted with warmth and
              professionalism. The ambiance is luxurious, and the service is
              top-notch. I left feeling like royalty after my pampering session.
              Highly recommend!
            </p>
            <div className={style.profile}>
              <img src={wale} alt="graduate" className={style.person} />
              <div>
                <p>Wale Ojo</p>
                <p>Lekki Phase 1, Lagos</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.mapcontainer}>
          <h3>Where we are...</h3>
          <img src={map} alt="star" className={style.map} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Tripledsalon;
