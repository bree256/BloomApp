import { Routes, Route } from "react-router-dom";
import "./App.css";
import { EmailVerification } from "../src/Components/EmailVerification/index"
import { Successverification } from "../src/Components/EmailVerification/Successverification"
import { HairServices } from "../src/Components/HairServices/HairServices"
import { BraidsService } from "../src/Components/BraidsServices/BraidsServices";
import { Naturalhair } from "../src/Components/NaturalHair/NaturalHair"
import { WigService } from "../src/Components/WigServices/wigService"
import { SpaMassage } from "../src/Components/SpaMassageService/SpaMassage"
import { TattooService } from "../src/Components/TattooPiercingService/TattooPiercing";
import { HandsFeetServices } from "../src/Components/HandsFeetServices/HandsFeet";
import { MuaServices } from "../src/Components/MuaServices/MuaService"
import {NaturalHairBusiness} from "../src/Components/NaturalHair/BusinsessService"
import { SignupPage } from "../src/Components/SignupPage";
import Login from "../src/Components/Signup/Login/index"
import Homepage from "./Components/Homepage";
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
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/EmailVerification" element={<EmailVerification />} />
        <Route path="/Successverification" element={<Successverification />} />
        <Route path="/BraidsService" element={<BraidsService />} />
        <Route path="/Naturalhair" element={<Naturalhair />} />
        <Route path="/NaturalHairBusiness" element={<NaturalHairBusiness />} />
        <Route path="/HairServices" element={<HairServices />} />
        <Route path="/WigService" element={<WigService />} />
        <Route path="/SpaMassage" element={<SpaMassage />} />
        <Route path="/TattooService" element={<TattooService />} />
        <Route path="/HandsFeetServices" element={<HandsFeetServices />} />
        <Route path="/MuaServices" element={<MuaServices />} />
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
