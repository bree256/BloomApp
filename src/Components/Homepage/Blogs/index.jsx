import React from "react";
import combing from "../../../Assets/combing.svg";
import style from "../Blogs/style.module.css";
import ladypink from "../../../Assets/ladypink.svg";
import heart from "../../../Assets/heart.svg";
import bookmark from "../../../Assets/bookmark.svg";
import facemask from "../../../Assets/facemask.svg";
import blackwhite from "../../../Assets/blackwhite.svg";
const Blogs = () => {
  return (
    <div className={style.blogcontent}>
      <h2>Our Blogs</h2>
      <p>
        Our blog is a treasure trove of informative and engaging articles
        written by our team of beauty experts. Here's what you can expect from
        our blog.
      </p>
      <br></br>
      <br></br>
      <div className={style.blogcontainer}>
        <div className={style.blog}>
          <img src={combing} alt="combinghair" className={style.comb} />
          <p className={style.text2}>Natural Hair</p>
          <h2 className={style.text}>
            Embracing Your Natural Crown: A Journey to Love and Care for Your
            Natural Hair
          </h2>
          <p className={style.text2}>
            Explore the beauty and versatility of natural hair in our latest
            blog post, where we share tips on hair care, styling techniques, and
            empowering stories to help you embrace and celebrate your unique
            curls, coils, and kinks.
          </p>
          <div className={style.profilecard}>
            <img src={ladypink} alt="ladyinpink" className={style.ladypink} />
            <div className={style.profile}>
              <h5 className={style.text}>Lara Akintoju</h5>
              <p className={style.text2}>23 March 2024-5 min read</p>
            </div>
            <div className={style.bookmarks}>
              <img src={heart} alt="heart" className={style.heart} />
              <img src={bookmark} alt="bookmark" className={style.heart} />
            </div>
          </div>
        </div>
        <div className={style.blog}>
          <img src={facemask} alt="facemask" className={style.comb} />
          <p className={style.text2}>Natural Hair</p>
          <h2 className={style.text}>
            Embracing Your Natural Crown: A Journey to Love and Care for Your
            Natural Hair
          </h2>
          <p className={style.text2}>
            Explore the beauty and versatility of natural hair in our latest
            blog post, where we share tips on hair care, styling techniques, and
            empowering stories to help you embrace and celebrate your unique
            curls, coils, and kinks.
          </p>
          <div className={style.profilecard}>
            <img
              src={blackwhite}
              alt="black and white"
              className={style.ladypink}
            />
            <div className={style.profile}>
              <h5 className={style.text}>Haruna Jaiya</h5>
              <p className={style.text2}>23 March 2024 - 5 min read</p>
            </div>
            <div className={style.bookmarks}>
              <img src={heart} alt="heart" className={style.heart} />
              <img src={bookmark} alt="bookmark" className={style.heart} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
