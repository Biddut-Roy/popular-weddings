import { useContext, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import swal from 'sweetalert';
import { globalContext } from "../../Context/GlobalContex";
import { FcGoogle } from 'react-icons/Fc';


const Register = () => {
  const {signUp , signInGoogle} = useContext(globalContext)
  const [error , setError]= useState()
  const navigate = useNavigate();

  const handelSignUp =(e)=>{
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    setError(" ");
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.')
      return;
  }
    if (!/[A-Z]/.test(password)) {
      setError("Password must be 1 Uppercase latter")
      return;
  }
    if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
      setError("Password must Special character")
      return;
  }
  
    signUp(email , password)
    .then(() => {
      swal({
        title: "Log in success!",
        text: " ",
        icon: "success",
        button: "Ok",
      });
      navigate("/")

    })
    .catch((error) => {
      swal({
        title: `${error.message}`,
        text: " ",
        icon: "warning",
        button: "Ok",
      });
    });
  }

  const handelGoogle = ()=>{
    signInGoogle()
   .then((result) => {
      swal({
        title: "Register success!",
        text: " ",
        icon: "success",
        button: "Ok",
      });
      console.log(result.user);
    })
   .catch((error) => {
      swal({
        title: `${error.message}`,
        text: " ",
        icon: "warning",
        button: "Ok",
      });
    });
  }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Please Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary" value="Register" />
        </div>
        <div className=" text-center text-red-700 font-medium text-xl">
          <p>{error}</p>
        </div>
      </form>
            <div onClick={handelGoogle} className=" mx-auto mb-1"><FcGoogle className=" w-16 h-16" /></div>
            <div>
        <p className="label-text-alt link link-hover mx-5">Already have an account?<span className=" font-semibold text-xl  text-green-600"><Link to={"/login"}>Login</Link></span></p>
      </div>
          </div>
        </div>
      </div>
    );
};

export default Register;