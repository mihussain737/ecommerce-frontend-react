import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import InputField from "../shared/InputField";
import { useDispatch } from "react-redux";
import { authenticatSignInUser } from "../../store/actions";
import toast from "react-hot-toast";
import Spinners from "../shared/Spinners";

const Login = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const loginHandler = async (data) => {
     console.log("Login clicked")
     dispatch(authenticatSignInUser(data,toast, reset, navigate, setLoader))
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
      <form onSubmit={handleSubmit(loginHandler)}
      className="sm:w-[450px] w-[360px] shadow-lg py-8 sm:px-8 px-4 rounded-md">
          <div className="flex flex-col items-center justify-center">
               <AiOutlineLogin className="text-slate-800 text-5xl"/>
               <h1 className="text-slate-800 text-center font-sans lg:text-3xl text-2xl font-bold">
                    Login Here
               </h1>
          </div>
          <hr className="mt-2 mb-5 text-black" />
          <div>
               <InputField className="flex flex-col gap-3"
               label="UserName"
               required
               id="username"
               type="text"
               message="*UserName is required"
               placeholder="Enter your username"
               register={register}
               errors={errors}
               />
               <InputField 
               label="Password"
               required
               id="password"
               type="password"
               message="*Password is required"
               placeholder="Enter your password"
               register={register}
               errors={errors}
               />
               <button
                     disabled={loader}
                    className={`bg-blue-600 flex items-center justify-center gap-2 font-semibold text-white w-full py-2 rounded-md my-3
                    ${loader ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-800"}
                         `}
               >
                    {loader ?(
                        <Spinners/>
                    ):(
                         <>Login</>
                    )}
               </button>
               <p className="text-center text-sm text-slate-700 mt-6">
                    Don't have an account? 
                    <Link to="/register" className="font-semibold underline px-1">
                         <span className="text-blue-600 hover:text-blue-800">SignUp</span>
                    </Link>
               </p>
          </div>
      </form>
    </div>
  );
};

export default Login;
