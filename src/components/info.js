import React from "react";
import { home5, small } from "../images";

const Info = () => {
  return (
    <div className="mx-20 flex flex-col lg:flex-row lg:items-start lg:space-x-2 lg:mx-24">
      <section className="flex justify-center relative -z-10 w-full lg:w-1/2">
        <div className="">
          <img src={home5} className="" alt="" />
        </div>
        <div className="absolute top-48 left-52 z-30 lg:left-72">
          <img src={small} className="w-3/4" alt="" />
        </div>
      </section>
      <section className="mt-32 lg:mt-0 lg:w-1/2">
        <h2 className="text-xl">
          <span className="border-t-2 border-[#313A47] w-20">About Us,</span>
        </h2>
        <h2 className="text-2xl font-bold my-5 lg:text-3xl"> Lorem ipsum dolor sit amet,</h2>
        <div className="pl-10">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
          </p>
          <p className="my-3">
            velit esse molestie Ut wisi enim ad minim veniam, quis nostrud
            exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
            commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
            vulputate velit esse molestie
          </p>
          <button className=" bg-[#313A47]  text-white py-1.5 px-6 my-4 w-max ">READ MORE</button>
        </div>
      </section>
    </div>
  );
};

export default Info;
