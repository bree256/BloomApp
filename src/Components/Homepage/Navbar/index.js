// Navbar.js
import style from "../Navbar/style.module.css";
import React, { useState, useEffect } from "react";
import profile from "../../../Assets/profile.svg";
import { Link, useLocation } from "react-router-dom";
import bloomlogo from "../../../Assets/bloomlogo.svg";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowDropdown(false);
  }, [location]);

  return (
    <nav>
      <img src={bloomlogo} alt="logo" className={style.bloomlogo} />
      <ul className={style.nav}>
        <li className={style.navhome}>
          <Link
            to="/homepage"
            className={`${style.navlink} ${
              location.pathname === "/homepage" ? style.active : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/appointment"
            className={`${style.navlink} ${
              location.pathname === "/appointment" ? style.active : ""
            }`}
          >
            Online Booking
          </Link>
        </li>
        <li className="nav-item">
          <div className={style.dropdownContainer}>
            <span
              className={style.dropdownToggle}
              onClick={() => setShowDropdown(!showDropdown)}
            >
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
                  <Link
                    to="/HairServices"
                    className={`${style.navlink} ${
                      location.pathname === "/HairServices" ? style.active : ""
                    }`}
                  >
                    Hair Care
                  </Link>
                </li>
                <li className={style.serviceItem}>
                  <Link
                    to="/Naturalhair"
                    className={`${style.navlink} ${
                      location.pathname === "/Naturalhair" ? style.active : ""
                    }`}
                  >
                    Natural Hair
                  </Link>
                </li>
                <li className={style.serviceItem}>
                  <Link
                    to="/BraidsService"
                    className={`${style.navlink} ${
                      location.pathname === "/BraidsService" ? style.active : ""
                    }`}
                  >
                    Braids
                  </Link>
                </li>
                <li className={style.serviceItem}>
                  <Link
                    to="/Wigservice"
                    className={`${style.navlink} ${
                      location.pathname === "/Wigservice" ? style.active : ""
                    }`}
                  >
                    Wigs n” Weaves
                  </Link>
                </li>
                <li className={style.serviceItem}>
                  <Link
                    to="/HandsFeetServices"
                    className={`${style.navlink} ${
                      location.pathname === "/HandsFeetServices"
                        ? style.active
                        : ""
                    }`}
                  >
                    Hands & Feet
                  </Link>
                </li>
                <li className={style.serviceItem}>
                  <Link
                    to="/MuaServices"
                    className={`${style.navlink} ${
                      location.pathname === "/MuaServices" ? style.active : ""
                    }`}
                  >
                    Make Up Artists
                  </Link>
                </li>
                <li className={style.serviceItem}>
                  <Link
                    to="/TattooService"
                    className={`${style.navlink} ${
                      location.pathname === "/TattooService" ? style.active : ""
                    }`}
                  >
                    Tattoo and Piercings
                  </Link>
                </li>
                <li className={style.serviceItem}>
                  <Link
                    to="/SpaMassage"
                    className={`${style.navlink} ${
                      location.pathname === "/SpaMassage" ? style.active : ""
                    }`}
                  >
                    Spa and Massage
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li className="nav-item">
          <Link
            to="/tripledsalon"
            className={`${style.navlink} ${
              location.pathname === "/tripledsalon" ? style.active : ""
            }`}
          >
            Stores
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/aboutus"
            className={`${style.navlink} ${
              location.pathname === "/aboutus" ? style.active : ""
            }`}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/blogpage"
            className={`${style.navlink} ${
              location.pathname === "/blogpage" ? style.active : ""
            }`}
          >
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contacts"
            className={`${style.navlink} ${
              location.pathname === "/contacts" ? style.active : ""
            }`}
          >
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
