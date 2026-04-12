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

const tagColors = (color) => {
  if (color === "new") return "bg-green-400";
  if (color === "popular") return "bg-gray-400";
  if (color === "best seller") return "bg-orange-400";
};

const DigiTools = ({ digiTools, selectedProduct }) => {
  console.log("DigiTools", digiTools);
  return (
    <div className="container mx-auto">
      {" "}
      {selectedProduct === "cart" ? (
        <h3 className="text-2xl  font-bold">Your Cart</h3>
      ) : (
        ""
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {digiTools.map((digiTool) => {
          const Icon = icons[digiTool.icon];
          console.log(digiTool);
          return (
            <div className="container mx-auto">
              {/* <h2>Digital Tools : {digiTools.length}</h2> */}
              <div className="flex justify-center items-center container  mx-auto my-[50px] font-sans">
                <div className="card w-96 bg-base-100 shadow-sm">
                  <div className="card-body">
                    <p className=" text-right  font-bold text-xl">
                      {" "}
                      <span
                        className={` px-2 rounded-xl ${tagColors(digiTool.tagType)} `}
                      >
                        {digiTool.tagType}
                      </span>
                    </p>
                    {Icon && <Icon className="text-4xl text-green-400 "></Icon>}

                    <div className="">
                      <h2 className="text-3xl font-bold">{digiTool.name}</h2>
                      <p>{digiTool.description}</p>
                      <span className="text-3xl font-bold ">
                        ${digiTool.price}
                      </span>
                      /{digiTool.period}
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                      {digiTool.features.map((feature) => {
                        return (
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-4 me-2 inline-block text-success"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>

                            <span>{feature}</span>
                          </li>
                        );
                      })}

                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 me-2 inline-block text-success"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Customizable style templates</span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 me-2 inline-block text-success"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Batch processing capabilities</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <button className="btn bg-[#4F39F6] text-white rounded-2xl btn-block">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DigiTools;
