import { TattooServiceCard } from "./index";
import { HairServicesHeader, SecondHeader } from "../HairServices/index";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";

export const TattooService = () => {
  return (
    <div>
      <Navbar />
      <SecondHeader />
      <TattooServiceCard />
      <Footer />
    </div>
  );
};
