import React from "react";
import threading from "../../../Assets/threading.svg";
import scissors from "../../../Assets/scissors.svg";
import nailpolish from "../../../Assets/nailpolish.svg";
import braiding from "../../../Assets/braiding.svg";
// import chaticon from "../../../Assets/chaticon.svg";
import style from "../Spotlight/style.module.css";
import Button from "../../Button/index";
import { IoChatboxOutline } from "react-icons/io5";

const Spotlight = () => {
  return (
    <div className={style.spotlightcontainer}>
      <p>User's picks</p>
      <h2>This Week's Spotlight...</h2>
      <div className={style.spotlight}>
        <div>
          <img src={threading} alt="threading" className={style.spotlights} />
          <h4>Temi Styles</h4>
          <p>Microblading Expert</p>
          <Button
            text="Say Hello 👋"
            width="250px"
            className={style.button}
            img={IoChatboxOutline}
            imgClassName={style.buttonImage}
          />
        </div>
        <div>
          <img src={scissors} alt="scissors" className={style.spotlights3} />
          <h4>Neat Cuts</h4>
          <p>Male Stylist</p>
          <Button
            text="Say Hello 👋"
            width="250px"
            className={style.button}
            img={IoChatboxOutline}
            imgClassName={style.buttonImage}
          />
        </div>
        <div>
          <img src={nailpolish} alt="nailpolish" className={style.spotlights} />
          <h4>Fifi & Bronze</h4>
          <p>Nail Technician</p>
          <Button
            text="Say Hello 👋"
            width="250px"
            className={style.button}
            img={IoChatboxOutline}
            imgClassName={style.buttonImage}
          />
        </div>
        <div>
          <img src={braiding} alt="braiding" className={style.spotlights4} />
          <h4>Elana Hair & Beauty</h4>
          <p>Freelance Braids Expert</p>
          <Button
            text="Say Hello 👋"
            width="250px"
            className={style.button}
            img={IoChatboxOutline}
            imgClassName={style.buttonImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
