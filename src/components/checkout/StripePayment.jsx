import { Elements } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import PaymentForm from "./PaymentForm";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import { createStripePaymentSecret } from "../../store/actions";
import Skeleton from "@mui/material/Skeleton";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const StripePayment = () => {
  const dispatch = useDispatch();
  const { clientSecret } = useSelector((state) => state.auth);
  const { totalPrice } = useSelector((state) => state.carts);
  const { isLoading ,errorMessage } = useSelector((state) => state.errors);
  const { user ,selectedUserCheckoutAddress } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!clientSecret) {
      const sendData={
        amount: Number(totalPrice)*100,
        currency:"USD",
        email:user.email,
        name:`${user.username}`,
        address:selectedUserCheckoutAddress,
        description: `Order for ${user.email}`,
        metadata:{
          test:"1"
        }
      }
      dispatch(createStripePaymentSecret(sendData));
    }
  }, [clientSecret, totalPrice, dispatch]);

  const options = {
    clientSecret,
  };

  if(isLoading){
    <div className="max-w-lg mx-auto">
      <Skeleton/>
    </div>
  }

  return (
    <>
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <PaymentForm clientSecret={clientSecret} totalPrice={totalPrice} />
        </Elements>
      )}
    </>
  );
};

export default StripePayment;
