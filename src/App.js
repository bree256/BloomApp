import "./App.css";
import { SignupPage } from "../src/Components/SignupPage";
import Login from "../src/Components/Login/index";
import Homepage from "./Components/Homepage";
import { Routes, Route } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <SignupPage />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/homepage",
//     element: <Homepage />,
//   },
// ]);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </>
  );
}
export default App;

//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }
// export default App;

// function App() {
//   return (
//     // <div className="Login">
//     //   <Login />
//     // </div>
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }
//   main;

//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<SignupPage />} />
//         <Route path="/signupPages" element={<Login />} />
//       </Routes>
//     </>
//   );
// }
// export default App;
