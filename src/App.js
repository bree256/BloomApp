import { Routes, Route } from "react-router-dom";
import "./App.css";
import { EmailVerification } from "./components/EmailVerification";
import { Successverification } from "./components/EmailVerification/Successverification";
import { HairServices } from "./components/HairServices/HairServices";
import { BraidsService } from "./components/BraidsServices/BraidsServices";
import { Naturalhair } from "./components/NaturalHair/NaturalHair";
import { WigService } from "./components/WigServices/wigService";
import { SpaMassage } from "./components/SpaMassageService/SpaMassage";
import { TattooService } from "./components/TattooPiercingService/TattooPiercing";
import { HandsFeetServices } from "./components/HandsFeetServices/HandsFeet";
import { MuaServices } from "./components/MuaServices/MuaService";
import { BusinessServices } from "./components/NaturalHair/BusinsessService";
import { SignupPage } from "../src/Components/SignupPage";
import Login from "../src/Components/Login/index";
import Homepage from "./Components/Homepage";
import { Routes, Route } from "react-router-dom";
import Tripledsalon from "./Components/Tripledsalon";
import Blogpage from "./Components/BlogPage";
import Contacts from "./Components/Contacts";
import Aboutus from "./Components/Aboutus";
import Profilepage from "./Components/Profilepage";
import BookAnAppointment from "./Components/BookAnAppointment";

function App() {
  return (
    <>
      <Routes>
        <Route path="/EmailVerification" element={<EmailVerification />} />
        <Route path="/Successverification" element={<Successverification />} />

        <Route path="/BraidsService" element={<BraidsService />} />
        <Route path="/Naturalhair" element={<Naturalhair />} />
        <Route path="/BusinessServices" element={<BusinessServices />} />
        <Route path="/HairServices" element={<HairServices />} />
        <Route path="/WigService" element={<WigService />} />
        <Route path="/SpaMassage" element={<SpaMassage />} />
        <Route path="/TattooService" element={<TattooService />} />
        <Route path="/HandsFeetServices" element={<HandsFeetServices />} />
        <Route path="/MuaServices" element={<MuaServices />} />
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/tripledsalon" element={<Tripledsalon />} />
        <Route path="/blogpage" element={<Blogpage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/profile" element={<Profilepage />} />
        <Route path="/appointment" element={<BookAnAppointment />} />
      </Routes>
    </>
  );
}
export default App;
