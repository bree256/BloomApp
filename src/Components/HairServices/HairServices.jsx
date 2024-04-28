import { Card, SecondHeader } from "./index";

import style from "./service.module.css";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";

export const HairServices = () => {
  return (
    <div className={style.services}>
      <Navbar />
      <SecondHeader />
      <Card />
      <Footer />
    </div>
  );
};
