import {Routes, Route} from 'react-router-dom';
import {Login} from './components/Login'
import './App.css';
import {SignupPage}  from './components/SignupPage';

function App() {
//   return (
// //     <div>
// //       <SignupPage/>
// //     </div>
// //   );
// // }

return (
  <>
  <Routes>
    <Route path ="/" element = {<SignupPage/>}/>
    <Route  path = "/signupPages" element ={<Login/>}/>
  </Routes>
  </>
)
}
export default App;
