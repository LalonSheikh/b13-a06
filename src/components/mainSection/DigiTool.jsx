import React, { useState } from "react";
import { toast } from "react-toastify";

const DigiTool = ({
  digiTool,
  Icon,
  tagColors,
  setTotalCount,
  totalCount,
  selectedTools,
  setSelectedTools,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  console.log(totalCount);

  const handleSetTool = () => {
    toast(`${digiTool.name} is selected`);
    setIsSelected(true);
    setTotalCount((prev) => prev + 1);
    // setTotalCount(+5);
    setSelectedTools([...selectedTools, digiTool]);
  };

  return (
    <div>
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
                <span className="text-3xl font-bold ">${digiTool.price}</span>/
                {digiTool.period}
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
                <button
                  onClick={handleSetTool}
                  className="btn bg-[#4F39F6] text-white rounded-2xl btn-block"
                  disabled={isSelected ? true : false}
                >
                  {isSelected ? "Added To Cart" : "Buy Now"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigiTool;
