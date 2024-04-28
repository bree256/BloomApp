import { Card, HairServicesHeader, SecondHeader } from "./index";
import style from "./service.module.css";
import Navbar from "../Homepage/Navbar";

export const HairServices = () => {
  return (
    <div className={style.services}>
      <Navbar />
      <SecondHeader />
      <Card />
    </div>
  );
};
