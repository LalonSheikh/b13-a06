import React, { use, useState } from "react";
import DigiTools from "./DigiTools";
import SelectedCart from "./SelectedCart";
import { toast } from "react-toastify";
import Empty from "./Empty";

const MainSection = ({
  digiToolsPromise,
  selectedTools,
  setSelectedTools,
  setTotalCount,
  totalCount,
}) => {
  const digiTools = use(digiToolsPromise);

  const [selectedProduct, setSelectedProduct] = useState("product");

  // console.log(selectedProduct, "SelectedProduct");
  const handleRemoveButton = (id) => {
    const remove = selectedTools.filter((tool) => tool.id !== id);
    setSelectedTools(remove);
    setTotalCount(remove.length);
    toast(`One item is removed`);
  };
  const handleClearsAllCartItems = () => {
    toast("All items removed");
    setSelectedTools([]);
    setTotalCount(0);
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
      ) : selectedTools.length === 0 ? (
        <Empty></Empty>
      ) : (
        <SelectedCart
          digiTools={digiTools}
          selectedTools={selectedTools}
          handleRemoveButton={handleRemoveButton}
          handleClearsAllCartItems={handleClearsAllCartItems}
        ></SelectedCart>
      )}
    </div>
  );
};

export default MainSection;
