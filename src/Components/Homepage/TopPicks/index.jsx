import React from "react";
import barberman from "../../../Assets/barberman.svg";
import hairdresser from "../../../Assets/hairdresser.svg";
import makeup from "../../../Assets/makeup.svg";
import salon from "../../../Assets/salon.svg";
import starrating from "../../../Assets/starrating.svg";
import style from "../TopPicks/style.module.css";

const TopPicks = () => {
  return (
    <div className={style.toppicks}>
      <p>Top Picks</p>
      <h2>Trending in your location</h2>
      <div className={style.salonpics}>
        <div className={style.saloncard}>
          <img src={salon} alt="salon" className={style.salon} />
          <div className={style.yellow}>
            <div className={style.rating}>
              <h6 className={style.h6}>Triple D Hair Salon</h6>
              <img src={starrating} alt="staricon" className={style.star1} />
              <p className={style.rate1}>4.71</p>
            </div>
            <p className={style.p1}>120metres near you</p>
            <p className={style.p2}>₦-₦₦</p>
          </div>
        </div>
        <div className={style.saloncard}>
          <img src={hairdresser} alt="hairdresser" className={style.salon} />
          <div className={style.yellow}>
            <div className={style.rating}>
              <h6 className={style.h6}>Amazing Salon</h6>
              <img src={starrating} alt="staricon" className={style.star2} />
              <p className={style.rate2}>4.21</p>
            </div>
            <p className={style.p1}>520metres near you</p>
            <p className={style.p2}>₦-₦₦</p>
          </div>
        </div>
        <div className={style.saloncard}>
          <img src={barberman} alt="barber" className={style.salon} />
          <div className={style.yellow}>
            <div className={style.rating}>
              <h6 className={style.h6}>Ultra Men Salon</h6>
              <img src={starrating} alt="staricon" className={style.star3} />
              <p className={style.rate3}>4.81</p>
            </div>
            <p className={style.p1}>750metres near you</p>
            <p className={style.p2}>₦-₦₦</p>
          </div>
        </div>
        <div className={style.saloncard}>
          <img src={makeup} alt="makeup" className={style.salon} />
          <div className={style.yellow}>
            <div className={style.rating}>
              <h6 className={style.h6}>Asanua Mua</h6>
              <img src={starrating} alt="staricon" className={style.star4} />
              <p className={style.rate4}>4.57</p>
            </div>
            <p className={style.p1}>970metres near you</p>
            <p className={style.p2}>₦-₦₦</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPicks;
