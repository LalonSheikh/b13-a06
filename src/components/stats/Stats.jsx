import React from "react";

const Stats = () => {
  return (
    <div className="bg-[#4f39f6] flex items-center justify-center text-white py-7 gap-16 font-sans">
      <div className="stats shadow mr-5 ">
        <div className="stat place-items-center">
          <div className="stat-value">50K+</div>
          <div className="">Active Users</div>
        </div>

        <div className="stat place-items-center mr-5">
          <div className="stat-value ">200+</div>
          <div className="">Premium Tools</div>
        </div>

        <div className="stat place-items-center ">
          <div className="stat-value">4.9</div>
          <div className="">Rating</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
