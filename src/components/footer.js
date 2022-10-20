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
      <section className="flex col-span-2 flex-col my-10">
        <div className="text-[#777777]">
          <p>+1 (123) 456-78-90</p>
          <p>+1 (123) 456-78-90</p>
          <p>info@gmail.com</p>
          <p>Canada, Vancouver British Columbia, 606 Broadway W</p>
        </div>
        <form className="flex flex-col w-full">
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
          <input
            type="email"
            className="p-3 rounded-lg bg-[#F6F6F6] w-3/4 m-3 border-black"
            placeholder="Email"
          />
          <textarea
            className="p-3 rounded-lg bg-[#F6F6F6] w-3/4 m-3 border-black"
            placeholder="Message"
          />
          <button className="bg-[#313A47] py-1 px-3 text-white w-max ml-4">
            SEND
          </button>
        </form>
      </section>
      <div className="border-b border-[#313A47]" />
      <section className='flex mt-10 justify-around'>
        <div>
          <img src={logo} className='w-1/3 lg:w-3/4' alt="" />
        </div>
        <div className='flex space-x-4'>
          <p className="capitalize cursor-pointer text-[#313A47] p-1">
            home
          </p>
          <p className="capitalize cursor-pointer text-[#313A47] p-1">
            about
          </p>
          <p className="capitalize cursor-pointer text-[#313A47] p-1">
            gallery
          </p>
          <p className="capitalize cursor-pointer text-[#313A47 p-1">
            {" "}
            Blog
          </p>
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
