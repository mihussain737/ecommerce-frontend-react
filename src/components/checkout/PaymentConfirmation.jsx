import { Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { stripePaymentConfirmation } from '../../store/actions';
import toast from 'react-hot-toast';

const PaymentConfirmation = () => {
     const location =useLocation();
     const searchParams = new URLSearchParams(location.search);
     const dispatch=useDispatch();
     const [errorMessage, setErrorMessage] = useState("");
     const { cart } = useSelector((state) => state.carts);
     const {loading, setLoading}=useState(false);
     
     const paymentIntent=searchParams.get("payment_intent");
     const clientSecret=searchParams.get("payment_intent_client_secret");
     const redirectStatus=searchParams.get("redirect_status");

     useEffect(() => {
        if(paymentIntent && clientSecret && redirectStatus && cart && cart?.length >0){
               dispatch(stripePaymentConfirmation(setErrorMessage,setLoading,toast));
        }
     }, [paymentIntent,clientSecret, redirectStatus,cart]);

  return (
    <div className='min-h-screen flex items-center justify-center'>
     {loading ? (
          <div className='max-w-xl mx-auto'><Skeleton></Skeleton></div>
     ):(<div className='rounded-lg shadow-lg text-whitejustify-center text-center max-w-md mx-auto p-8'>
          <div className='flex justify-center mb-4 text-green-500'>
               <FaCheckCircle size={64} />
          </div>
          <h2 className='text-3xl font-bold text-gray-800 mb-2'>Payment Successfull!</h2>
          <p>
               Thank you for your purchase. Your payment has been successfully processed.
          </p>
     </div>)}
    </div>
  )
}

export default PaymentConfirmation