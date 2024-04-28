// import { HairServicesHeader } from "../HairServices";
// import style from "./business.module.css";
// import Calendar from 'react-calendar'
// import { useState } from "react";
// import imag32 from "./images/imag32.png";
// import imag33 from "./images/imag33.png";
// import imag34 from "./images/imag34.png";
// import imag35 from "./images/imag35.png";
// import imag36 from "./images/imag36.png";
// import imag37 from "./images/imag37.png";
// import imag38 from "./images/imag38.png";
// import imag39 from "./images/imag39.png";
// import imag40 from "./images/imag40.png";
// import imag41 from "./images/imag41.png";
// import imag42 from "./images/imag42.png";
// import imag43 from "./images/imag43.png";
// import imag44 from "./images/imag44.png";
// import imag45 from "./images/imag45.png";
// import imag46 from "./images/imag46.png";
// import imag47 from "./images/imag47.png";
// import imag48 from "./images/imag48.png";
// import imag49 from "./images/imag49.png";
// import imag50 from "./images/imag50.png";

// export const NaturalHairBusiness = () => {
//   const [value, setValue] = useState(new Date());

//   function onChange(nextValue) {
//     setValue(nextValue);
//   }

//   return (
//     <div>
//       <HairServicesHeader />
//       <div>
//         <h3>Kinky Chic Salon</h3>
//         <p>Plot 74 Ademola Adetokumbo way, Victoria Island, Lagos State</p>
//         <p>...making you standout beautifully!</p>
//         <div>
//           <span>
//             <img src={imag32} alt="" />
//             share
//           </span>
//           <span>
//             <img src={imag33} alt="" />
//             save
//           </span>
//         </div>
//       </div>
//       <div className={style.imageGrid}>
//         <img src={imag34} alt="" />
//         <img src={imag35} alt="" />
//         <img src={imag36} alt="" />
//         <img src={imag37} alt="" />
//         <img src={imag38} alt="" />
//       </div>
//       <div className={style.textIcon}>
//         <div>
//           <img src={imag39} alt="" />
//         </div>
//         <div>
//           <p>
//             One of the best, mordern salons in Lagos, according to customer
//             reviews
//           </p>
//         </div>
//         <div className={style.rating}>
//           <p>4.9</p>
//           <img src={imag40} alt="" />
//           <img src={imag40} alt="" />
//           <img src={imag40} alt="" />
//           <img src={imag40} alt="" />
//         </div>
//         <div className={style.review}>
//           <p>135</p>
//           <p>Reviews</p>
//         </div>
//       </div>
//       <div className={style.textCalender}>
//         <div>
//           <h3>Experience the pinnacle of luxury at Triple D</h3>
//           <p>
//             Our salon offers a sanctuary of opulence, where every detail is
//             curated to exceed expectations. Indulge in bespoke hair <br />
//             treatments, spa rituals, and personalized services from our expert
//             team. Relax in our chic salon, complete with plush <br />
//             seating and complimentary beverages. <br />
//             With state-of-the-art facilities and advanced equipment, every
//             moment at Triple D is extraordinary. Our commitment to <br />{" "}
//             unparalleled service ensures your satisfaction. <br />
//             Escape the ordinary and embrace the extraordinary at Triple D. Book
//             your appointment today and discover a world of <br /> luxury in the
//             heart of Lagos. Welcome to Triple D, where beauty meets indulgence.
//           </p>
//         </div>
//         <div className={style.Calendar}>
//           <Calendar onChange={onChange} value={value} />
//         </div>
//         <div>
//           <button>Book Now</button>
//         </div>
//       </div>

//       <div className={style.Offer}>
//         <div>
//           <h5>What this place offers</h5>
//         </div>
//         <div className={style.unorderlist1}>
//           <ul>
//             <ol>Braids</ol>
//             <ol>Make Up</ol>
//             <ol> Wig Revamps</ol>
//             <ol>Wig Installations</ol>
//             <ol>Manicure</ol>
//             <ol>Pedicure</ol>
//             <ol>Micro Blading</ol>
//             <ol>Tattoo & Piercings</ol>
//             <ol>Hair Cut</ol>
//             <ol> Hair Coloring</ol>
//           </ul>
//         </div>

//         <div className={style.unorderlist2}>
//           <ul>
//             <ol> Free Wi-Fi</ol>
//             <ol> Free Parking on premises</ol>
//             <ol>Luxurious waiting lounge</ol>
//             <ol> Private treatment room</ol>
//             <ol> Professional styling station</ol>
//             <ol>Refreshment Bar</ol>
//             <ol>Vanity Area</ol>
//             <ol> Comfortable leather chairs</ol>
//             <ol>Fully air conditioned </ol>
//             <ol> Infrared Hood Dryer</ol>
//           </ul>
//         </div>
//       </div>

//       <div className={style.ValueContainer}>
//         <div className={style.ValueText}>
//           <img src={imag41} alt="" />
//           <h4>Our Values</h4>
//           <p>
//             Our story is one of continuous growth and evolution. <br /> We
//             started as a small team with big dreams, <br /> determined to create
//             a beauty business that <br /> transcended the ordinary.
//           </p>
//         </div>
//         <div className={style.ValuePoints1}>
//           <div className={style.ValuePoint}>
//             <span>
//               <img src={imag42} alt="" />
//               Trust
//             </span>
//             <p>
//               Trust is the cornerstone of every successful business transaction.
//             </p>
//           </div>
//           <div>
//             <span>
//               <img src={imag43} alt="" />
//               Excellence
//             </span>
//             <p>
//               We set the bar high for ourselves. From the ambience of our
//               environment to the services we provide.
//             </p>
//           </div>
//         </div>
//         <div className={style.ValuePoints2}>
//           <div className={style.ValuePoint}>
//             <span>
//               <img src={imag44} alt="" />
//               Client-Centric
//             </span>
//             <p>
//               Your beauty and body needs are at the center of our universe. We
//               listen, understand.
//             </p>
//           </div>
//           <div>
//             <span>
//               <img src={imag45} alt="" />
//               Our Commitment
//             </span>
//             <p>
//               We are dedicated to providing you with the highest level of
//               service, professionalism, and support.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className={style.MainCard}>
//         <div className={style.Stars}>
//           <img src={imag46} alt="" />
//           <img src={imag46} alt="" />
//           <img src={imag46} alt="" />
//           <img src={imag46} alt="" />
//         </div>
//         <div className={style.CardText}>
//           <h4>Amazing Stylists</h4>
//           <p>
//             From the moment I walked in, I was greeted with <br /> warmth and
//             professionalism. The ambiance is <br /> luxurious, and the service
//             is top-notch. I left feeling <br /> like royalty after my pampering
//             session. Highly <br /> recommend!
//           </p>
//           <span>
//             <img src={imag47} alt="" />
//             Jane Nwankwo <br />
//             VI, Lagos
//           </span>
//         </div>

//         <div className={style.Stars}>
//           <img src={imag46} alt="" />
//           <img src={imag46} alt="" />
//           <img src={imag46} alt="" />
//           <img src={imag46} alt="" />
//         </div>
//         <div className={style.CardText}>
//           <h4>Great customer care service</h4>
//           <p>
//             I've been to many salons, but Triple D stands out as <br /> the
//             best! The staff goes above and beyond to make <br /> you feel
//             welcome and comfortable. The treatments <br /> are divine, and the
//             results are stunning. It's my go-to <br /> spot for a little
//             self-care indulgence in Lagos.
//           </p>
//           <span>
//             <img src={imag48} alt="" />
//             Ehireme manzi <br />
//             Okota, Lagos
//           </span>
//         </div>

//         <div className={style.Stars}>
//           <img src={imag46} alt="" />
//           <img src={imag46} alt="" />
//           <img src={imag46} alt="" />
//           <img src={imag46} alt="" />
//         </div>
//         <div className={style.CardText}>
//           <h4>My favourite!</h4>
//           <p>
//             Triple D Salon exceeded all my expectations! The <br /> attention to
//             detail is impeccable, and the service is <br />
//             impeccable. The atmosphere is so relaxing, I could <br /> have
//             stayed all day. My hair has never looked better, <br /> thanks to
//             their talented stylists. I'll definitely be back!
//           </p>
//           <span>
//             <img src={imag49} alt="" />
//             Wale Ojo <br />
//             Lekki Phase 1, Lagos
//           </span>
//         </div>
//       </div>

//       <div className={style.Map}>
//         <h3>Where we are...</h3>
//         <img src={imag50} alt="" />
//       </div>
//     </div>
//   );
// };
