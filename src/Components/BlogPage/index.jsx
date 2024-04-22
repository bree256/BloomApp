import React from "react";
import Navbar from "../Homepage/Navbar";
import Blogs from "../Homepage/Blogs";
import Footer from "../Homepage/Footer";
import style from "../BlogPage/style.module.css";

const Blogpage = () => {
  return (
    <div className={style.blogpage}>
      <Navbar />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Blogpage;
