
import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Checkout from "../pages/checkOut/checkout";
import Booking from "../pages/Booking/Booking";
import Privateroute from "./Privateroute";

const router = createBrowserRouter([
      {
        path: "/",
        element: <Main></Main>,
        children:[
          {
            path: "/",
            element: <Home></Home>
          },
          {
            path: "/login",
            element: <Login></Login>
          },
          {
            path: "/signup",
            element: <Signup></Signup>
          },
          {
            path: "/checkout/:id",
            element: <Privateroute><Checkout></Checkout></Privateroute>,
            loader:({params})=>fetch(`https://car-doctor-server-fi13n92wu-salmanfursi.vercel.app/services/${params.id}`)
          },
          {
            path: "/booking",
            element: <Privateroute><Booking></Booking></Privateroute>
          }
        ]
      },
    ]);

    export default router