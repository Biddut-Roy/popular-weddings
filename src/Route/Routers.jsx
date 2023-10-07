import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServicesCart from "../Pages/Home/Services/ServicesCart";
import Favorite from "../Favorite/Favorite";



const router = createBrowserRouter([
      {
        path: "/",
        element: <Root></Root> ,
        errorElement: <div>Oops! There was an error.</div>,
        children: [
          {
            path: "/",
            element: <Home></Home>,
            loader:()=> fetch("/weddings.json")
          },
          {
            path: "/login",
            element: <Login></Login>,
          },
          {
            path: "/register",
            element: <Register></Register>,
          },
          {
            path: "/cartDetails/:id",
            element: <ServicesCart></ServicesCart>,
            loader:()=> fetch("/weddings.json")
          },
          {
            path: "/favorite",
            element: <Favorite></Favorite>,
            loader:()=> fetch("/weddings.json")
          },

        ]
      },
])

export default router ;