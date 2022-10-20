import React from 'react'
import { fine, glass, home, home2, home3, home4, sky, sky2, water, white, wood } from '../images';

const Gallery = () => {
  return (
    <div className="w-full bg-[#313A47] h-max py-10 px-10 lg:px-20 my-10 flex items-center justify-center flex-col">
      <section className="px-10 py-5 flex items-center justify-center">
        <div className="h-0.5 w-[200px] lg:w-[300px] bg-white " />
        <h3 className="mx-5 text-white text-xl lg:text-2xl">Gallery</h3>
        <div className="h-0.5 w-[200px] lg:w-[300px] bg-white" />
      </section>
      <section className=" flex flex-col space-y-4">
        <div className="flex col-span-2 space-x-3 lg:flex-row">
          <img
            src={glass}
            className="w-1/2 object-cover lg:object-contain lg:w-full"
            alt=""
          />
          <img src={white} className="" alt="" />
        </div>
        <div className="flex items-center col-span-3 w-full space-x-4">
          <img src={water} className="w-1/3 lg:w-full" alt="" />
          <img src={wood} className="w-1/3 lg:w-full" alt="" />
          <img src={home4} className="w-1/3 lg:w-full" alt="" />
        </div>
        <div className="flex col-span-2 space-x-3 lg:flex-row">
          <img src={home2} alt="" />
          <img
            src={home}
            className="w-1/2 object-cover lg:object-contain lg:w-full"
            alt=""
          />
        </div>
        <div className="flex items-center col-span-3 w-full space-x-4">
          <img src={home3} className="w-1/3 lg:w-full" alt="" />
          <img src={fine} className="w-1/3 lg:w-full" alt="" />
          <img src={sky2} className="w-1/3 lg:w-full" alt="" />
        </div>
      </section>
      <button className=" bg-[#2FE24B] py-1.5 px-6 mt-10 w-max ">
        READ MORE
      </button>
    </div>
  );
}

export default Gallery
