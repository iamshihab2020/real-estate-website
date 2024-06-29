import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";

import ContactUs from "../Componets/pages/ContactUs/ContactUs";
import Login from "../Componets/pages/Login/Login";
import Register from "../Componets/pages/Register/Register";
import Schedule from "../Componets/pages/AllPrivateRoutes/Schedule/Schedule";
import ErrorRoute from "./ErrorRoute";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../Componets/pages/AllPrivateRoutes/UpdatProfile/UpdateProfile";
import Home from "../Componets/pages/Home/Main/Home";
import Estate from "../Componets/pages/Home/Estate/Estate";
import EstateDetails from "../Componets/pages/Home/Estate/EstateDetails";
import Testimonial from "../Componets/pages/Home/Testimonial/Testimonial";
import Teams from "../Componets/pages/Team/Teams";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/",
        element: <Estate />,
        loader: () => fetch(`/public/estate.json`),
      },
      {
        path: "/estate-details/:id",
        element: (
          <PrivateRoute>
            {" "}
            <EstateDetails />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/",
        element: <Testimonial />,
        loader: () => fetch(`/public/testimonial.json`),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/team",
        element: <Teams />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/schedule",
        element: (
          <PrivateRoute>
            {" "}
            <Schedule />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            {" "}
            <UpdateProfile />{" "}
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
