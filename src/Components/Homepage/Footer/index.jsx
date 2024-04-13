import React from "react";
import bloomlogo from "../../../Assets/bloomlogo.svg";
import messagearrow from "../../../Assets/messagearrow.svg";
import style from "../Footer/style.module.css";
import Button from "../../Button/index";
import lists from "../data";
import Bottomfooter from "../../Bottomfooter";

const Footer = () => {
  return (
    <>
      <div className={style.bloomcontainer}>
        <div className={style.bloom}>
          <img src={bloomlogo} alt="bloomlogo" className={style.bloomlogo} />
          <Button
            text="Enter your email"
            width="300px"
            className={style.button}
            imgSrc={messagearrow}
          />
        </div>
        <div className={style.lists}>
          {lists.map((list, index) => (
            <div key={index}>
              <h2 className={style.h2}>{list.title}</h2>
              <ul className={style.list}>
                {list.items.map((item, i) => (
                  <li className={style.li} key={i}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Bottomfooter />
    </>
  );
};

export default Footer;
