 mySignup
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

import "./App.css";
import Login from "../src/Components/Login/Login/index";
import ErrorLogin from "../src/Components/ErrorLogin/index";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/error",
    element: <ErrorLogin />,
  },
]);

function App() {
  return (
    // <div className="Login">
    //   <Login />
    // </div>
    <>
      <RouterProvider router={router} />
    </>
  );
} main

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
