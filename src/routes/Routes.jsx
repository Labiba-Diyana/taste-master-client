import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layouts/Main";
import ViewRecipes from "../pages/ViewRecipes/ViewRecipes";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Blog from "../pages/Blog/Blog";
import LostPage from "../pages/LostPage/LostPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/viewRecipes/:id",
        element: <ViewRecipes></ViewRecipes>,
        loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Registration></Registration>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      }
    ]
  },
  {
    path: '*',
    element: <LostPage></LostPage>
  }
]);

export default router;