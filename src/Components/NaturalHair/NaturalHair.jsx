import { NaturalHairCard } from "./index";
import { HairServicesHeader, SecondHeader } from "../HairServices/index";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";

export const Naturalhair = () => {
  return (
    <div>
      <Navbar />
      <SecondHeader />
      <NaturalHairCard />
      <Footer />
    </div>
  );
};
