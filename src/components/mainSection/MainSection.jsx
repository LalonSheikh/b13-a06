import React, { use, useState } from "react";
import DigiTools from "./DigiTools";
import SelectedCart from "./SelectedCart";

const MainSection = ({ digiToolsPromise, setTotalCount, totalCount }) => {
  const digiTools = use(digiToolsPromise);

  const [selectedProduct, setSelectedProduct] = useState("product");
  const [selectedTools, setSelectedTools] = useState([]);
  // console.log(selectedProduct, "SelectedProduct");
  const handleRemoveButton = (id) => {
    const remove = selectedTools.filter((tool) => tool.id !== id);
    setSelectedTools(remove);
  };
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
            <button
              onClick={() => setSelectedProduct("product")}
              className={`btn text-center ${selectedProduct === "product" ? "bg-[#4F39F6] " : " bg-blue-200 text-black"} text-white rounded-4xl my-2`}
            >
              Products
            </button>
            <button
              onClick={() => setSelectedProduct("cart")}
              className={`btn text-center ${
                selectedProduct === "cart"
                  ? "bg-[#4F39F6] "
                  : "bg-blue-200 text-black"
              } text-white rounded-4xl my-2`}
            >
              Cart({totalCount})
            </button>
          </div>
        </div>
      </div>
      {selectedProduct === "product" ? (
        <DigiTools
          digiTools={digiTools}
          selectedProduct={selectedProduct}
          setTotalCount={setTotalCount}
          totalCount={totalCount}
          selectedTools={selectedTools}
          setSelectedTools={setSelectedTools}
          key={digiTools.id}
        ></DigiTools>
      ) : (
        <SelectedCart
          digiTools={digiTools}
          selectedTools={selectedTools}
          handleRemoveButton={handleRemoveButton}
        ></SelectedCart>
      )}
    </div>
  );
};

export default MainSection;
