import DigiTool from "./DigiTool";
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

const DigiTools = ({
  digiTools,
  setTotalCount,
  selectedProduct,
  totalCount,
  selectedTools,
  setSelectedTools,
}) => {
  // console.log("DigiTools", digiTools);

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
          // console.log(digiTool);
          return (
            <DigiTool
              Icon={Icon}
              tagColors={tagColors}
              digiTool={digiTool}
              setTotalCount={setTotalCount}
              totalCount={totalCount}
              key={digiTool.id}
              selectedTools={selectedTools}
              setSelectedTools={setSelectedTools}
            ></DigiTool>
          );
        })}
      </div>
    </div>
  );
};

export default DigiTools;
