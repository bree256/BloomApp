import { WigServiceCard } from "./index";
import { HairServicesHeader, SecondHeader } from "../HairServices/index";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";

export const WigService = () => {
  return (
    <div>
      <Navbar />
      <SecondHeader />
      <WigServiceCard />
      <Footer />
    </div>
  );
};
