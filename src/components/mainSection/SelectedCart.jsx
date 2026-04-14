import React from "react";
import {
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaCloud,
  FaDumbbell,
  FaEnvelope,
  FaFileAlt,
  FaFileInvoice,
  FaShoppingCart,
  FaTasks,
  FaUserTie,
} from "react-icons/fa";

const icons = {
  FaFileAlt,
  FaUserTie,
  FaFileInvoice,
  FaShoppingCart,
  FaCalendarAlt,
  FaDumbbell,
  FaChalkboardTeacher,
  FaEnvelope,
  FaTasks,
  FaCloud,
};

const SelectedCart = ({ selectedTools }) => {
  const totalPrice = selectedTools.reduce((total, tool) => {
    return total + Number(tool.price);
  }, 0);

  console.log("selectedTools", selectedTools);
  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-xl">Your Cart</h2>
      <div>
        {selectedTools.map((tool, index) => {
          const Icon = icons[tool.icon];
          return (
            <div
              key={index}
              className="flex  justify-between items-center gap-4 bg-base-100 p-4 rounded-xl "
            >
              <div className="flex">
                {Icon && <Icon className="text-4xl text-green-400 "></Icon>}
                <div>
                  <h2>{tool.name}</h2>
                  <p>${tool.price}</p>
                </div>
              </div>
              <button className="text-red-500">Remove</button>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center gap-4 bg-base-100 p-4 rounded-xl ">
        <p className="font-bold ">Total</p>
        <p>${totalPrice.toFixed(2)}</p>
      </div>
      <div className="mt-6">
        <button className="btn bg-[#4F39F6] text-white rounded-2xl btn-block">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default SelectedCart;
