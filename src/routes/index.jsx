import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../page/Login";
import Register from "../page/Register";
import AllBooks from "../page/AllBooks/AllBooks";
import PrivateRoute from "./PrivateRoute";
import Home from "../page/Home/Home/Home";
import BorrowedBooks from "../page/BorrowedBooks/BorrowedBooks";
import AddBooks from "../page/AddBooks/AddBooks";
import CategoriesS from "../page/CategoriesS/CategoriesS";
import BookDetails from "../page/BookDetails/BookDetails";
import ReadBook from "../page/ReadBook/ReadBook";
import UpdateBook from "../page/UpdateBook/UpdateBook";

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
        element: (
          <PrivateRoute>
            <AddBooks></AddBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "allbooks",
        element: (
          <PrivateRoute>
            <AllBooks></AllBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "borrowedbooks",
        element: (
          <PrivateRoute>
            <BorrowedBooks></BorrowedBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/category/:name",
        element: (
          <PrivateRoute>
            <CategoriesS></CategoriesS>
          </PrivateRoute>
        ),
      },
      {
        path: "/:category/:id",
        element: (
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/:category/:id/read",
        element: (
          <PrivateRoute>
            <ReadBook></ReadBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateBook/:id",
        element: (
          <PrivateRoute>
            <UpdateBook></UpdateBook>
          </PrivateRoute>
        ),
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
]);

export default routes;
