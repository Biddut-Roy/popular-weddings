import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServicesCart from "../Pages/Home/Services/ServicesCart";
import Favorite from "../Favorite/Favorite";
import Private from "../PrivateRoute/Private";
import WeddingCard from "../Pages/WeddingCard/WeddingCard";
import Food from "../Pages/Food/Food";
import Errorpage from "../Errorpage/Errorpage";



const router = createBrowserRouter([
      {
        path: "/",
        element: <Root></Root> ,
        errorElement: <Errorpage></Errorpage>,
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
            element: <Private><Favorite></Favorite></Private>,
          },
          {
            path: "/food",
            element: <Private><Food></Food></Private>,
            loader:()=> fetch("/Food.json")
          },
          {
            path: "/card",
            element:<Private><WeddingCard></WeddingCard></Private>,
            loader:()=> fetch("/weddingCard.json")
          },

        ]
      },
])

export default router ;