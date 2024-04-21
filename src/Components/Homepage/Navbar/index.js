// Navbar.js
import style from "../Navbar/style.module.css";
import React, { useState, useEffect } from "react";
import profile from "../../../Assets/profile.svg";
import { Link, useLocation } from "react-router-dom";
import bloomlogo from "../../../Assets/bloomlogo.svg";

const Navbar = () => {
  const location = useLocation();
  const [navbarStyle, setNavbarStyle] = useState(style.navbar);

  useEffect(() => {
    if (location.pathname === "/profile") {
      setNavbarStyle(style.profileNavbar);
    } else {
      setNavbarStyle(style.navbar);
    }
  }, [location.pathname]);

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className={navbarStyle}>
      <img src={bloomlogo} alt="logo" className={style.bloomlogo} />
      <ul className={style.nav}>
        <li className={style.navhome}>
          <Link to="/homepage" className={style.navhome}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <a href="#" className={style.navlink}>
            Online Booking
          </a>
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
                  <Link to="/services/haircare">Hair Care</Link>
                </li>
                <li className={style.serviceItem}>
                  <Link to="/services/naturalhair">Natural Hair</Link>
                </li>
                <li className={style.serviceItem}>
                  <Link to="/services/braids">Braids</Link>
                </li>
                <li className={style.serviceItem}>
                  <Link to="/services/WigsandWeaves">Wigs n” Weaves</Link>
                </li>
                <li className={style.serviceItem}>
                  <Link to="/services/handsandFeet">Hands & Feet</Link>
                </li>
                <li className={style.serviceItem}>
                  <Link to="/services/makeupartists">Make Up Artists</Link>
                </li>
                <li className={style.serviceItem}>
                  <Link to="/services/tattooandpiercings">
                    Tattoo and Piercings
                  </Link>
                </li>
                <li className={style.serviceItem}>
                  <Link to="/services/spaandmassage">Spa and Massage</Link>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li className="nav-item">
          <a href="#" className={style.navlink}>
            Stores
          </a>
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
