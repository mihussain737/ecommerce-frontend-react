import React from "react";
import { FormatPriceCalculation } from "../utils/FormatPrice";

const OrderSummary = ({ totalPrice, cart, address, paymentMethod }) => {
  return (
    <div className="container mx-auto px-4 mb-8">
      <div className="flex flex-wrap">
        {/* LEFT SECTION */}
        <div className="w-full lg:w-8/12 pr-4">
          <div className="space-y-4">
            {/* Billing Address */}
            <div className="p-4 border rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-2">Billing Address</h2>
              <p><strong>Building Name:</strong> {address?.buildingName}</p>
              <p><strong>City:</strong> {address?.cityName}</p>
              <p><strong>Street:</strong> {address?.street}</p>
              <p><strong>Pincode:</strong> {address?.pincode}</p>
              <p><strong>Country:</strong> {address?.country}</p>
            </div>

            {/* Payment Method */}
            <div className="p-4 border rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-2">Payment Method</h2>
              <p><strong>Method:</strong> {paymentMethod}</p>
            </div>

            {/* Order Items */}
            <div className="p-4 border rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-2">Order Items</h2>

              <div className="space-y-3">
                {cart?.map((item) => (
                  <div
                    key={item.productId}
                    className="flex items-center gap-4"
                  >
                    <img
                      src={`${import.meta.env.VITE_BACK_END_URL}/images/${item?.image}`}
                      alt={item?.productName}
                      className="w-12 h-12 rounded object-cover"
                    />

                    <div className="flex-1">
                      <p className="font-medium">{item?.productName}</p>
                      <p className="text-gray-500 text-sm">
                        {item?.quantity} × ${item?.specialPrice} = 
                        ${FormatPriceCalculation(item?.quantity , item?.specialPrice)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full lg:w-4/12 mt-4 lg:mt-0">
          <div className="border rounded-lg shadow-sm p-4 space-y-4">
            <h2 className="text-2xl font-semibold">Order Summary</h2>

            <div className="flex justify-between">
              <span>Products</span>
              <span>${FormatPriceCalculation(totalPrice, 1)}</span>
            </div>

            <div className="flex justify-between">
              <span>Tax (0%)</span>
              <span>$0.00</span>
            </div>

            <hr />

            <div className="flex justify-between font-semibold text-lg">
              <span>SubTotal</span>
              <span>${FormatPriceCalculation(totalPrice, 1)}</span>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
