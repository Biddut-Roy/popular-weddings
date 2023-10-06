import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";



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

        ]
      },
])

export default router ;