import React from "react";
import {house, skyscrapper, solar } from "../images";

const Home = () => {
  return (
    <div className="my-20">
      <div className="border-b mx-20 border-[#313A47]" />
      <article className="flex flex-col items-center justify-center lg:flex-row lg:space-x-10 m-5">
        <section className="lg:flex space-x-10">
          <div className=" flex-col space-y-4">
            <h3 className="text-[#313A47] mt-6 mb-2 font-semibold text-xl">
              Communities
            </h3>
            <img src={solar} className="" alt="" />
            <button className="w-max py-1.5 px-3 text-white  bg-[#313A47] capitalize">
              more
            </button>
          </div>
          <div className="hidden lg:inline-block border-r-2 py-20 border-[#313A47]/60" />
        </section>
        <section className="lg:flex space-x-10">
          <div className=" flex-col space-y-4">
            <h3 className="text-[#313A47] mt-6 mb-2 font-semibold text-xl">
              Condos
            </h3>
            <img src={skyscrapper} className="" alt="" />
            <button className="w-max py-1.5 px-3 text-white  bg-[#313A47] capitalize">
              more
            </button>
          </div>
          <div className="hidden lg:inline-block border-r-2 py-20 border-[#313A47]/60" />
        </section>
        <section className="lg:flex space-x-10">
          <div className=" flex-col space-y-4">
            <h3 className="text-[#313A47] mt-6 mb-2 font-semibold text-xl">
              Inventory
            </h3>
            <img src={house} className="" alt="" />
            <button className="w-max py-1.5 px-3 text-white  bg-[#313A47] capitalize">
              more
            </button>
          </div>
        </section>
      </article>
      <div className="border-b mx-20 border-[#313A47]" />
    </div>
  );
};

export default Home;
