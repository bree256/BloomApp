import { SpaMassageCard } from "./index";
import { HairServicesHeader, SecondHeader } from "../HairServices/index";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";

export const SpaMassage = () => {
  return (
    <div>
      <Navbar />
      <SecondHeader />
      <SpaMassageCard />
      <Footer />
    </div>
  );
};
