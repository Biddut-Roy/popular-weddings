import { useContext } from "react";
import { globalContext } from "../../Context/GlobalContex";
import swal from 'sweetalert';
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/Fc';



const Login = () => {

  const { signIn ,signInGoogle }= useContext(globalContext)
  

  const handelLogin = (e)=>{

     e.preventDefault();
      const form = new FormData(e.currentTarget)
      const email = form.get('email')
      const password = form.get('password')

      signIn(email, password)
            .then((result) => {
              swal({
                title: "Log in success!",
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

  const handelGoogle = ()=>{
    signInGoogle()
    .then((result) => {
      swal({
        title: "Log in success!",
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
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handelLogin} className="card-body">
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
          <input type="submit" className="btn btn-primary" value="Login" />
        </div>
      </form>
      <div onClick={handelGoogle} className=" mx-auto mb-1"><FcGoogle className=" w-16 h-16" /></div>
      <div>
        <p href="#" className="label-text-alt link link-hover mx-5">Don't have an account?<span className=" font-semibold text-xl  text-green-600"><Link to={"/register"}>Register</Link></span></p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;