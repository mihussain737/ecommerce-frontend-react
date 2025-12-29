import React, { useState } from "react";
import Skeleton from "../shared/Skeleton";
import { FaAddressBook } from "react-icons/fa";
import AddressInfoModal from "./AddressInfoModal";
import AddAdressForm from "./AddAdressForm";

const AddressInfo = () => {

  const [openAddressModal, setOpenAddressModal]=useState(false);
  const [selectedAddress,setSelectedAddress]=useState("");

  const addNewAddressHandler=()=>{
    setSelectedAddress("");
    setOpenAddressModal(true);
  }
  const noAddressExist = true;
  const isLoading = false;
  return (
    <div className="pt-4">
      {noAddressExist ? (
        <div className="">
          <div className="pt-6 rounded-lg max-w-md mx-auto flex flex-col items-center justify-center">
            <FaAddressBook size={50} className="text-gray-500 mb-4" />
            <h1 className="mb-2 text-slate-900 text-center font-semibold text-2xl">
              No Address Yet!
            </h1>
            <p className="mb-2 text-slate-800 text-center text-xl">
              Please add your address to complete purchase
            </p>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition cursor-pointer"
              onClick={addNewAddressHandler}>
              Add Address
            </button>
          </div>
        </div>
      ) : (
        <div className="relative p06 rounded-lg max-w-md mx-auto">
          <h1 className="text-slate-800 text-center font-bold text-2xl">
            Select Address
          </h1>
          {isLoading ? (
            <div className="py-4 px-8">
              <Skeleton />
            </div>
          ) : (
            <div className="space-y-4 pt-6">
              <p>Address List Here</p>
            </div>
          )}
        </div>
      )}

      <AddressInfoModal 
        open={openAddressModal}
        setOpen={setOpenAddressModal}>
        <AddAdressForm/>
        </AddressInfoModal>
    </div>
  );
};

export default AddressInfo;
