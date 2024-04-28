import { HairServicesHeader, SecondHeader } from "../HairServices/index";
import Footer from "../Homepage/Footer";
import Navbar from "../Homepage/Navbar";
import { BraidsCard } from "./index";

export const BraidsService = () => {
  return (
    <div>
      <Navbar />
      <SecondHeader />
      <BraidsCard />
      <Footer />
    </div>
  );
};
