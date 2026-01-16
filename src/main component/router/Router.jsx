import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../../page component/errorpage/Errorpage";
import Root from "./root/Root";
import Home from "../../page component/home/Home"
import SignIn from "../SignIn/SignIn";
import SignUP from "../SignUp/SignUP";
import UpdateUser from "../../page component/updateuser/UpdateUser";
import UserAddData from "../../page component/useradd/UserAddData";
import Cradviewdetailsmake from "../../page component/card and view details/Cradviewdetailsmake";
import PrivetRoute from "../../sharedcomponent/PrivetRoute";
import Myservice from "../../page component/myservices/Myservice";
import Allservice from "../../page component/allservices/Allservice";
import Booked from "../../page component/booked service/Booked";
import AuthLayout from "./root/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <Errorpage />,
    children: [
      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <SignUP /> },
    ],
  },

  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,

        element: <Home/>,
        loader: () => fetch("https://server-shihab.vercel.app/adminsenddata"),
      },
      {
        path: "/booked",
        element: (
          <PrivetRoute>
            <Booked />
          </PrivetRoute>
        ),
      },
      {
        path: "/cardview/:id",
        element: (
          <PrivetRoute>
            <Cradviewdetailsmake />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-shihab.vercel.app/usersenddata/${params.id}`),
      },
      {
        path: "/update/:id",
        element: <UpdateUser />,
        loader: ({ params }) =>
          fetch(`https://server-shihab.vercel.app/usersenddata/${params.id}`),
      },
      {
        path: "/useradddata",
        element: <UserAddData />,
      },
      {
        path: "/allservice",
        element: <Allservice />,
        loader: () => fetch("https://server-shihab.vercel.app/usersenddata"),
      },
      {
        path: "/myservice",
        element: (
          <PrivetRoute>
            <Myservice />
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;
