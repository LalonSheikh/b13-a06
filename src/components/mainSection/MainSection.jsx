import React, { use } from "react";
import DigiTools from "./DigiTools";

const MainSection = ({ digiToolsPromise }) => {
  const digiTools = use(digiToolsPromise);
  console.log(digiTools);
  return (
    <div>
      <div className="flex justify-center items-center container  mx-auto my-[50px] font-sans">
        <div>
          {" "}
          <h2 className="font-black text-center text-5xl">
            Premium Digital Tools
          </h2>
          <p className="text-center py-3">
            Choose from our curated collection of premium digital products{" "}
            <br />
            designed to boost your productivity and creativity.
          </p>
          <div className="text-center space-x-2 py-3">
            {" "}
            <button className="btn text-center bg-[#4F39F6] text-white rounded-4xl my-2">
              Products
            </button>
            <button className="btn btn-outline  text-[#4F39F6] border-none rounded-4xl text-xl text-black font-bold ml-2 my-2">
              Cart()
            </button>
          </div>
        </div>
      </div>

      <DigiTools digiTools={digiTools}></DigiTools>
    </div>
  );
};

export default MainSection;
