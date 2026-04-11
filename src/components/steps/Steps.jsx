import React from "react";

const Steps = () => {
  return (
    <div>
      <div className="flex justify-center items-center container  mx-auto my-[70px] font-sans">
        <div>
          <h2 className="font-black text-center text-5xl">
            Get Started in 3 Steps
          </h2>
          <p className="text-center py-3">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
      </div>
      <div className="flex flex-1 lg:justify-center items-center container  mx-auto gap-3 my-[50px] font-sans">
        <div className="card bg-base-100 w-96 shadow-sm">
          <p className="text-right text-[#4F39F6] font-black ">01</p>
          <figure className="px-10 pt-10">
            <img
              src={"/src/assets/user.png"}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Create Account</h2>
            <p>
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <p className="text-right text-[#4F39F6] font-black ">02</p>
          <figure className="px-10 pt-10">
            <img
              src={"/src/assets/package.png"}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Choose Products</h2>
            <p>
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <p className="text-right text-[#4F39F6] font-black ">03</p>
          <figure className="px-10 pt-10">
            <img
              src={"/src/assets/rocket.png"}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Choose Products</h2>
            <p>
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
