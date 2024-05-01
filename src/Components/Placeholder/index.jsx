import React from "react";
import customer from "../../Assets/customer.svg";
import professional from "../../Assets/professional.svg";
import style from "../Placeholder/style.module.css";
import { Link } from "react-router-dom";

const Placeholder = () => {
  return (
    <div className={style.container}>
      <h1 className={style.h1}>What brings you to Bloom?</h1>
      <div className={style.images}>
        <Link to="/homepage">
          <img src={customer} alt="customer" className={style.image} />
        </Link>
        <Link to="/dashboard">
          <img src={professional} alt="professional" className={style.image} />
        </Link>
      </div>
    </div>
  );
};

export default Placeholder;
