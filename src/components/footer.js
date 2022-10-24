import React from 'react'
import { logo } from '../images';

const Footer = () => {
  return (
    <div className="bg-[#E4E4E4] p-10">
      <div className="">
        <h2 className="text-center text-xl lg:text-3xl font-semibold">
          GET IN TOUCH
        </h2>
      </div>
      <section className="flex col-span-2 w-full flex-col lg:items-center my-10 lg:flex-row sm:mx-auto lg:justify-center">
        <div className="text-[#2c1717] lg:w-2/3  2xl:pl-72">
          <p>+1 800-635-0523</p>
          <p>+1 289-275-5579</p>
          <p>hello@greencresthomes.ca</p>
          <p>6 Indell Ln Brampton, L6T 3Y3 Canada</p>
        </div>
        <form className="flex flex-col w-full lg:flex-row lg:space-x-10 -ml-2 lg:ml-0">
          <section className="flex flex-col  sm:w-1/2">
            <div className="flex items-center space-x-3 ">
              <input
                type="text"
                className="p-3 rounded-lg bg-[#F6F6F6] w-3/4 m-3 border-black"
                placeholder="Name"
              />
              <input
                type="number"
                className="p-3 rounded-lg bg-[#F6F6F6] w-3/4 m-3 border-black"
                placeholder="Phone"
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                className="p-3 rounded-lg bg-[#F6F6F6] w-full m-3 border-black"
                placeholder="Email"
              />
            </div>
          </section>

          <div className="flex flex-col flex-1 w-full sm:w-1/2">
            <textarea
              className="p-3 rounded-lg bg-[#F6F6F6] resize-none sm:w-3/4 m-3 border-black"
              placeholder="Message"
            />
            <button className="bg-[#313A47] py-1 px-3 text-white w-max ml-6 lg:ml-[8em] xl:ml-[14em] 2xl:ml-[28em]">
              SEND
            </button>
          </div>
        </form>
      </section>
      <div className="border-b border-[#313A47]" />
      <section className="flex mt-10 justify-around flex-col -ml-3 lg:ml-0 lg:flex-row lg:space-x-10">
        <div>
          <img src={logo} className="w-1/3  lg:w-3/4" alt="" />
        </div>
        <div className="flex space-x-4 font-semibold">
          <p className="capitalize cursor-pointer text-[#313A47] p-1">home</p>
          <p className="capitalize cursor-pointer text-[#313A47] p-1">about</p>
          <p className="capitalize cursor-pointer text-[#313A47] p-1">
            gallery
          </p>
          <p className="capitalize cursor-pointer text-[#313A47] p-1">Blog</p>
          <p className="capitalize cursor-pointer text-[#313A47] p-1">
            Contact
          </p>
        </div>
        <div>
          <p>Copyright © 2022 All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}

export default Footer
