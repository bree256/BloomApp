import { MuaCard } from "./index";
import { HairServicesHeader, SecondHeader } from "../HairServices/index";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";

export const MuaServices = () => {
  return (
    <div>
      <Navbar />
      <SecondHeader />
      <MuaCard />
      <Footer />
    </div>
  );
};
