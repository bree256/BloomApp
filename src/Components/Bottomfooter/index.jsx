import React from "react";
import facebook from "../../Assets/facebook.svg";
import linkedin from "../../Assets/linkedin.svg";
import twitter from "../../Assets/twitter.svg";
import youtube from "../../Assets/youtube.svg";
import style from "../Bottomfooter/style.module.css";
const Bottomfooter = () => {
  return (
    <div className={style.bottomfooter}>
      <div className={style.bottomtext}>
        <p>@2024 Bloom. All Rights Reserved.</p>
        <p>Terms & Conditions</p>
      </div>
      <div className={style.logos}>
        <img src={facebook} alt="facebooklogo" className={style.footerlogo} />
        <img src={linkedin} alt="linkedinlogo" className={style.footerlogo} />
        <img src={twitter} alt="twitterlogo" className={style.footerlogo} />
        <img src={youtube} alt="youtubelogo" className={style.footerlogo} />
      </div>
    </div>
  );
};

export default Bottomfooter;
