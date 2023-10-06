import { Outlet } from "react-router-dom";
import Navbar from "../Pages/StaticPage/Navbar/Navbar";
import Footer from "../Pages/StaticPage/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;