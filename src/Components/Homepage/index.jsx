<<<<<<< HEAD
import { Link } from 'react-router-dom';


export const Homepage = () =>{
    return(
        <div>
           <Link to='/BraidsService'>
              <button type='submit'>Sign Up</button>
            </Link>
            <Link to='/HairServices '>
              <button type='submit'>Sign Up</button>
            </Link> 
            <Link to='/Naturalhair'>
              <button type='submit'>Sign Up</button>
            </Link>
            <Link to='/WigService'>
              <button type='submit'>Sign Up</button>
            </Link>
            <Link to='/SpaMassage'>
              <button type='submit'>Sign Up</button>
            </Link> 
            <Link to='/TattooService'>
              <button type='submit'>Sign Up</button>
            </Link> 
            <Link to='/HandsFeetServices'>
              <button type='submit'>Sign Up</button>
            </Link> 
            <Link to='/MuaServices'>
              <button type='submit'>Sign Up</button>
            </Link> 
            
            <p>
                Hello World
            </p>
        </div>
    )
}
=======
import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import style from "../Homepage/style.module.css";
import Section from "./Section";
import TopPicks from "./TopPicks";
import BeautyServices from "./BeautyServices";
import Spotlight from "./Spotlight";
import Testimonials from "../Testimonials";
import Faq from "../Faq";
import Blogs from "./Blogs";
import Experience from "./Experience";
import Footer from "../Homepage/Footer";

const Homepage = () => {
  return (
    <section className={style.homepage}>
      <Navbar />
      <Body />
      <Section />
      <TopPicks />
      <BeautyServices />
      <Spotlight />
      <Testimonials />
      <Faq />
      <Blogs id="blogs" />
      <Footer />
    </section>
  );
};
export default Homepage;
>>>>>>> origin/main
