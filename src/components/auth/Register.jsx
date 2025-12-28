import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaUserPlus } from 'react-icons/fa';
import InputField from '../shared/InputField';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerNewUser } from '../../store/actions';
import toast from 'react-hot-toast';
import Spinners from '../shared/Spinners';

const Register = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [loader, setLoader] = useState(false);

  const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm({
      mode: "onTouched",
    });

    const registerHandler = async (data) => {
     console.log("Register clicked")
     dispatch(registerNewUser(data,toast,reset,navigate,setLoader));
  };

  return (
      <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
        <form onSubmit={handleSubmit(registerHandler)}
        className="sm:w-[450px] w-[360px] shadow-lg py-8 sm:px-8 px-4 rounded-md">
            <div className="flex flex-col items-center justify-center">
                 <FaUserPlus className="text-slate-800 text-5xl"/>
                 <h1 className="text-slate-800 text-center font-sans lg:text-3xl text-2xl font-bold">
                      Register Here
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
                 <InputField className="flex flex-col gap-3"
                 label="Email"
                 required
                 id="email"
                 type="email"
                 message="*Email is required"
                 placeholder="Enter your email"
                 register={register}
                 errors={errors}
                 />
                 <InputField 
                 label="Password"
                 required
                 id="password"
                 min={6}
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
                           <>Register</>
                      )}
                 </button>
                 <p className="text-center text-sm text-slate-700 mt-6">
                      Already have an account? 
                      <Link to="/login" className="font-semibold underline px-1">
                           <span className="text-blue-600 hover:text-blue-800">Login</span>
                      </Link>
                 </p>
            </div>
        </form>
      </div>
    );
}

export default Register