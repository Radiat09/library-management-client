import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../page/Login";
import Register from "../page/Register";

import Home from "../page/Home/Home/Home";
import PrivateRoute from "./PrivateRoute";
import AddBooks from "../page/AddBooks";
import AllBooks from "../page/AllBooks";
import BorrowedBooks from "../page/BorrowedBooks";
// import useAuth from "../hooks/useAuth";

// const { user } = useAuth();
// console.log(user);

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "addbooks",
        element: <AddBooks></AddBooks>,
      },
      {
        path: "allbooks",
        element: <AllBooks></AllBooks>,
      },
      {
        path: "borrowedbooks",
        element: <BorrowedBooks></BorrowedBooks>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  // {
  //   path: "/admin",
  //   element: <AdminLayout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <AddService />,
  //     },
  //   ],
  // },
]);

export default routes;
