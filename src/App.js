// useLoaderData that where the id is
// alao a redirect
import './App.css';
import Logout from "./Components/Logout"
import Header from "./Components/Header"
//
import SearchResults from "./pages/SearchResults"
import Home from "./pages/Home"
//import Footer from "./Components/Footer"
import Signin from "./pages/auth/Signin"
import Signup from "./pages/auth/Signup"
import Authenticate from "./pages/Authenticate"
import {
  createBrowserRouter,
  RouterProvider,
  //BrowserRouter as Router
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
  },
  {
    path: "/search/:search",
    element: <SearchResults />,
    errorElement: ErrorPage
  },
  {
    path: "/authenticate",
    element: <Authenticate />,
    errorElement: ErrorPage
  },/*
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
  },*/
  {
    path: "/",
    element: <Home/>,
    errorElement: ErrorPage
  },
]);

function App() {
  return (
    <div className="p-2">
       <Header />
       <RouterProvider router={router}/>
       {/*<Footer />*/}
    </div>
  );
}

export default App;
