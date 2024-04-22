import {Routes, Route} from 'react-router-dom';
import Login from '../src/components/Signup/Login'
import './App.css';
import {SignupPage}  from './components/SignupPage';
import { EmailVerification } from './components/EmailVerification';
import { Successverification } from './components/EmailVerification/Successverification';
import { HairServices } from './components/HairServices/HairServices';
import { Homepage } from './components/Homepage';
import {BraidsService} from './components/BraidsServices/BraidsServices'
import { Naturalhair} from './components/NaturalHair/NaturalHair';
import { WigService } from './components/WigServices/wigService';
import {SpaMassage} from './components/SpaMassageService/SpaMassage'
import {TattooService} from './components/TattooPiercingService/TattooPiercing'
import {HandsFeetServices} from './components/HandsFeetServices/HandsFeet'
import {MuaServices} from "./components/MuaServices/MuaService"






function App() {


return (
  <>
  <Routes>
    <Route path ="/" element = {<SignupPage/>}/>
    <Route path ="/EmailVerification" element = {<EmailVerification/>}/>
    <Route path="/Successverification" element = {<Successverification/>}/>
    <Route path="/Homepage" element = {<Homepage/>}/>
    <Route path="/BraidsService" element = {<BraidsService/>}/>
    <Route path="/Naturalhair" element = {<Naturalhair/>}/>
     <Route path="/HairServices" element ={<HairServices/>} />
     <Route path="/WigService" element ={<WigService/>} />
     <Route path ="/SpaMassage" element ={<SpaMassage/>} />
     <Route path ="/TattooService" element = {<TattooService/>} />
     <Route path = "/HandsFeetServices" element = {<HandsFeetServices/>} />
     <Route path ="/MuaServices" element = {<MuaServices/>} />
    <Route path="/login" element={<Login/>}/>
    
    
  </Routes>
  </>
)
}
export default App;
