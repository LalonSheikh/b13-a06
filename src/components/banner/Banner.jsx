import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { GrStatusGoodSmall } from "react-icons/gr";

const Banner = () => {
  return (
    <div className="container  mx-auto my-[50px] font-sans">
      <div className="hero my-4  ">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <img
            src={"/src/assets/banner.png"}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="mr-2">
            <p className="flex items-center gap-2 bg-blue-200 w-[350px] rounded-xl px-2 text-[#4F39F6]">
              {" "}
              <GrStatusGoodSmall />
              New: AI-Powered Tools Available
            </p>
            <h1 className="text-7xl font-bold text-[#101727]">
              Supercharge Your <br /> Digital Workflow
            </h1>
            <p className="py-6 text-[#101727]">
              {" "}
              This offer is make your work superfast with more effectiveness.
            </p>
            <button className="btn bg-[#4F39F6] text-white rounded-4xl">
              Explore Products
            </button>
            <button className="btn btn-outline text-[#4F39F6] rounded-4xl ml-2">
              <CiPlay1 /> Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
