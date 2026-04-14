import React from "react";

const Empty = () => {
  return (
    <div>
      <div className="flex items-center  justify-center gap-4 flex-col h-[700px] ">
        <h2 className="font-semibold text-xl">No Tool Selected Yet</h2>
        <p>Go to Products to select a Tool</p>
      </div>
    </div>
  );
};

export default Empty;
