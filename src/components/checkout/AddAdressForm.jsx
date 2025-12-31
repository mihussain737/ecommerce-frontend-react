import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { AiOutlineLogin } from 'react-icons/ai';
import InputField from '../shared/InputField';
import Spinners from '../shared/Spinners';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaAddressCard } from 'react-icons/fa';
import { addUpdateUserAddress } from '../../store/actions';
import toast from 'react-hot-toast';

const AddAdressForm = ({address,setOpenAddressModal}) => {
     const dispatch=useDispatch();
     const navigate = useNavigate();
     const [loader, setLoader] = useState(false);

     const {btnLoader}=useSelector((state)=>state.errors);

     const {
         register,
         handleSubmit,
         reset,
         formState: { errors },
       } = useForm({
         mode: "onTouched",
       });

       const onSaveAddressHandler = async (data) => {
            dispatch(addUpdateUserAddress(data,toast,address?.addressId,setOpenAddressModal))
         };
     
  return (
    <div className="">
      <form onSubmit={handleSubmit(onSaveAddressHandler)}
      className="">
          <div className="flex justify-center items-center mb-4 font-semibold text-2xl text-slate-800 py-2 px-4">
               <FaAddressCard className="mr-2 text-3xl"/>
               <h1 className="text-slate-800 text-center font-sans lg:text-3xl text-2xl font-bold">
                    Add Address Here
               </h1>
          </div>
          <hr className="mt-2 mb-5 text-black" />
          <div>
               <InputField className="flex flex-col gap-4"
               label="Building Name"
               required
               id="buildingName"
               type="text"
               message="*Building Name is required"
               placeholder="Enter your Building Name"
               register={register}
               errors={errors}
               />
               <InputField className="flex flex-col gap-4"
               label="Street"
               required
               id="street"
               type="text"
               message="*Street Name is required"
               placeholder="Enter your Street Name"
               register={register}
               errors={errors}
               />
               <InputField 
               label="City"
               required
               id="cityName"
               type="text"
               message="*City is required"
               placeholder="Enter your City Name"
               register={register}
               errors={errors}
               />
               <InputField 
               label="State"
               required
               id="state"
               type="text"
               message="*State is required"
               placeholder="Enter your State Name"
               register={register}
               errors={errors}
               />
               <InputField 
               label="Pincode"
               required
               id="pincode"
               type="number"
               message="*Pincode is required"
               placeholder="Enter your Pincode"
               register={register}
               errors={errors}
               />
               <InputField 
               label="Country"
               required
               id="country"
               type="text"
               message="*Country is required"
               placeholder="Enter your Country Name"
               register={register}
               errors={errors}
               />
               <button
                     disabled={btnLoader}
                    className={`bg-blue-600 flex items-center justify-center gap-2 font-semibold text-white w-full px-4 mt-4
                          py-2 rounded-md my-3
                    ${btnLoader ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-800"}
                         `}
               >
                    {loader ?(
                        <Spinners/>
                    ):(
                         <>Save</>
                    )}
               </button>
          </div>
      </form>
    </div>
  )
}

export default AddAdressForm