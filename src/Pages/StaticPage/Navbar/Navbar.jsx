import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { globalContext } from "../../../Context/GlobalContex";
import swal from 'sweetalert';



const Navbar = () => {
  const { user , logOut } = useContext(globalContext)
  console.log(user);

  const handelOut = ()=>{
    logOut()
    .then(() => {
      swal({
        title: "Log out success!",
        text: "",
        icon: "success",
        button: "Ok",
      });
      // Sign-out successful.
    }).catch(() => {
      // An error happened.
    });
  }

    const list = <>
    
        <li><NavLink to={"/"}>Home</NavLink></li>                   
        <li><NavLink to={"/favorite"}>Favorite point</NavLink></li>                   
        <li><NavLink to={"/food"}>Food</NavLink></li>                   
        <li><NavLink to={"/card"}>Wedding Card</NavLink></li>                   
        <li><NavLink to={"/register"}>Register</NavLink></li>                   
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {list}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl"><img src="https://i.ibb.co/GFxFvvx/popular-2.png" alt="Logo" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {list}
    </ul>
  </div>
  <div className="navbar-end space-x-2">
    <div className="hidden md:flex lg:flex">
         <p>{user&& user.displayName}</p>
    </div>
    <div className=" w-10 h-10  ">
         <img className=" rounded-full" src={user? user.photoURL:`https://i.ibb.co/mTk3cfk/P.png`} alt="" />
    </div>
    {
      user?
      <NavLink ><button onClick={handelOut} className=" btn btn-neutral">Log out</button></NavLink>
      :
      <NavLink to={"/login"}><button className=" btn btn-neutral">Login</button></NavLink>
    }
  </div>
</div>
    );
};

export default Navbar;