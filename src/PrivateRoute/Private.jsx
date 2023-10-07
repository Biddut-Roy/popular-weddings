import { useContext } from "react";
import { globalContext } from "../Context/GlobalContex";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";


const Private = ({ children }) => {
    const location = useLocation();
    const { user , loder } = useContext(globalContext);
    if (loder) {
        return <div className=" flex justify-center mt-16">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if(user){
        return children;
    }
    return  <Navigate state={location.pathname} to={"/login"}></Navigate> ;
};

Private.propTypes = {
    children: PropTypes.node
  };

export default Private;