import React from "react";
import bloomlogo from "../../../Assets/bloomlogo.svg";
import messagearrow from "../../../Assets/messagearrow.svg";
import style from "../Footer/style.module.css";
import Button from "../../Button/index";
import lists from "../data";
import Bottomfooter from "../../Bottomfooter";
import Experience from "../Experience";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Experience />
      <div className={style.bloomcontainer}>
        <div className={style.bloom}>
          <img src={bloomlogo} alt="bloomlogo" className={style.bloomlogo} />
          <Link to="/contacts" className={style.button}>
            <Button
              text="Enter your email"
              width="300px"
              className={style.button}
              imgSrc={messagearrow}
            />
          </Link>
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
