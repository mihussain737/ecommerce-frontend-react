import React, { useState } from "react";
import Skeleton from "../shared/Skeleton";
import { FaAddressBook } from "react-icons/fa";
import AddressInfoModal from "./AddressInfoModal";
import AddAdressForm from "./AddAdressForm";
import { useDispatch, useSelector } from "react-redux";
import AddressList from "./AddressList";
import { DeleteModal } from "./DeleteModal";
import toast from "react-hot-toast";
import { deleteUserAddress } from "../../store/actions";

const AddressInfo = ({address}) => {

  const [openAddressModal, setOpenAddressModal]=useState(false);
  const [openDeleteModal, setOpenDeleteModal]=useState(false);
  const [selectedAddress,setSelectedAddress]=useState("");
  const dispatch=useDispatch();

  const addNewAddressHandler=()=>{
    setSelectedAddress("");
    setOpenAddressModal(true);
  }

  const deleteAddressHandler=()=>{
    dispatch(deleteUserAddress(toast,selectedAddress?.addressId,setOpenDeleteModal));
  };

  const noAddressExist = !address || address.length ===0;
  // const noAddressExist = true;
  const {isLoading,btnLoader} = useSelector((state)=> state.errors);
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
            <>
            <div className="space-y-4 pt-6">
              <AddressList addresses={address}
              setSelectedAddress={setSelectedAddress}
              setOpenAddressModal={setOpenAddressModal}
              setOpenDeleteModal={setOpenDeleteModal}
              />
            </div>
            {address.length>0 && (
              <button className="px-4 py-2 mt-1 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition cursor-pointer"
              onClick={addNewAddressHandler}>
              Add More
            </button>
            )}
            </>
          )}
        </div>
      )}

      <AddressInfoModal 
        open={openAddressModal}
        setOpen={setOpenAddressModal}>
        <AddAdressForm address={selectedAddress}
          setOpenAddressModal={setOpenAddressModal}/>
        </AddressInfoModal>

        <DeleteModal open={openDeleteModal}
        loader={btnLoader}
        setOpen={setOpenDeleteModal}
        title="Delete Address"
        onDeleteHandler={deleteAddressHandler}
        />
    </div>
  );
};

export default AddressInfo;
