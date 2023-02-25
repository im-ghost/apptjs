// useLoaderData that where the id is
// alao a redirect
import './App.css';

import Logout from "./Components/Logout"
import Header from "./Components/Header"
import Signin from "./pages/auth/Signin"
import Signup from "./pages/auth/Signup"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/Error"
const router = createBrowserRouter([
  {
    path: "/logout",
    element: <Logout/>,
    errorElement: ErrorPage
  },
  {
    path: "/signin",
    element: <Signin/>,
    errorElement: ErrorPage
  },
  {
    path: "/signup",
    element: <Signup/>,
    errorElement: ErrorPage
  },/*
  {
    path: "/",
    element: <Home />,
    errorElement: ErrorPage
  },
  {
    path: "/doctors",
    element: <Doctors />,
    errorElement: ErrorPage
  },
  {
    path: "/doctors/id",
    element: <Doctor/>,
    errorElement: ErrorPage
  },
  {
    path: "/appointments",
    element: <Appointments/>,
    errorElement: ErrorPage
  },
  {
    path: "/appointments/id",
    element: <Appointment/>,
    errorElement: ErrorPage
  },
  {
    path: "/",
    element: <App/>,
    errorElement: ErrorPage
  },*/
]);

function App() {
  return (
    <div className="">
       <Header />
       <RouterProvider router={router}/>
    </div>
  );
}

export default App;
