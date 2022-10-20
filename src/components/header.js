import React from "react";
import { logo, search } from "../images";

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between mx-10">
        <div className="p-4 cursor-pointer">
          <img src={logo} className="w-40 lg:w-full" alt="logo" />
        </div>
        <div className="flex flex-col space-y-4">
          <div className="bg-[#313A47] text-white py-2 px-3 w-max ml-auto">
            <p className="cursor-pointer">Login | Signup</p>
          </div>

          <div className="lg:w-[413px] px-3 bg-[#D9D9D9] flex items-center ">
            <input
              className="bg-transparent p-2 border-none outline-none flex-grow"
              type="text"
              placeholder="Search"
            />
            <img src={search} className="h-5 " alt="" />
          </div>
        </div>
      </div>
      <nav className="h-[92px] w-full bg-[#313A47] flex space-x-4 items-center justify-around">
        <p className="capitalize cursor-pointer text-xl lg:text-2xl text-white active:bg-[#2FE24B] active:text-[#313A47] p-8 ">home</p>
        <p className="capitalize cursor-pointer text-xl lg:text-2xl text-white active:bg-[#2FE24B] active:text-[#313A47] p-8 ">about</p>
        <p className="capitalize cursor-pointer text-xl lg:text-2xl text-white active:bg-[#2FE24B] active:text-[#313A47] p-8 ">gallery</p>
        <p className="capitalize cursor-pointer text-xl lg:text-2xl text-white active:bg-[#2FE24B] active:text-[#313A47] p-8"> Blog</p>
        <p className="capitalize cursor-pointer text-xl lg:text-2xl text-white active:bg-[#2FE24B] active:text-[#313A47] p-8 ">Contact</p>
      </nav>
    </header>
  );
};

export default Header;
