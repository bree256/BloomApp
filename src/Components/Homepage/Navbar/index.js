// Navbar.js
import style from "../Navbar/style.module.css";
import React, { useState } from "react";
import profile from "../../../Assets/profile.svg";
import { Link } from "react-router-dom";
import bloomlogo from "../../../Assets/bloomlogo.svg";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav>
      <img src={bloomlogo} alt="logo" className={style.bloomlogo} />
      <ul className={style.nav}>
        <li className={style.navhome}>
          <Link to="/homepage" className={style.navhome}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/appointment" className={style.navlink}>
            Online Booking
          </Link>
        </li>
        <li className="nav-item">
          <div className={style.dropdownContainer}>
            <span className={style.dropdownToggle} onClick={toggleDropdown}>
              Services
              <i
                className={`fa ${
                  showDropdown ? "fa-chevron-up" : "fa-chevron-down"
                }`}
              />
            </span>
            {showDropdown && (
              <ul className={style.serviceList}>
                <li className={style.serviceItem}>
                  <Link to="/HairServices">Hair Care</Link>
                </li>
                <li className={style.serviceItem}>
                  <Link to="/Naturalhair">Natural Hair</Link>
                </li>
                <li className={style.serviceItem}>
                  <Link to="/BraidsService">Braids</Link>
                </li>
                <li className={style.serviceItem}>
                  <Link to="/Wigservice">Wigs n” Weaves</Link>
                </li>
                <li className={style.serviceItem}>
                  <Link to="/HandsFeetServices">Hands & Feet</Link>
                </li>
                <li className={style.serviceItem}>
                  <Link to="/MuaServices">Make Up Artists</Link>
                </li>
                <li className={style.serviceItem}>
                  <Link to="/TattooService">Tattoo and Piercings</Link>
                </li>
                <li className={style.serviceItem}>
                  <Link to="/SpaMassage">Spa and Massage</Link>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li className="nav-item">
          <Link to="/tripledsalon" className={style.navlink}>
            Stores
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/aboutus" className={style.navlink}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/blogpage" className={style.navlink}>
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contacts" className={style.navlink}>
            Contact Us
          </Link>
        </li>
      </ul>
      <Link to="/profile">
        <img src={profile} alt="profileimage" className={style.profile} />
      </Link>
    </nav>
  );
};

export default Navbar;
