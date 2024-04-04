// Navbar.js
import style from "../Navbar/style.module.css";
import React from "react";
import profile from "../../../Assets/profile.svg";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <ul className={style.nav}>
        <li className="nav-item">
          <a href="#" className={style.navlink}>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className={style.navlink}>
            Online Booking
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className={style.navlink}>
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className={style.navlink}>
            Stores
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className={style.navlink}>
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className={style.navlink}>
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className={style.navlink}>
            Contact Us
          </a>
        </li>
      </ul>
      <img src={profile} alt="profileimage" className={style.profile} />
    </nav>
  );
};

export default Navbar;
