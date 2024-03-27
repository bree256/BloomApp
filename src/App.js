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
}

export default App;
