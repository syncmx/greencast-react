import React from 'react'
import { banner } from '../images'

const Banner = () => {
  return (
    <div className="relative">
      <img src={banner} alt="" className="w-full object-cover h-[626px]" />
      <div className="absolute bg-[#313A47] rounded w-[300px]  text-white -left-20 sm:left-0 p-3 h-max lg:w-[414px] lg:p-10 lg:h-[370px] top-1/3 mx-32">
        <h3 className="font-semibold text-xl lg:text-4xl mb-4">
          Helping you build your home.
        </h3>
        <p className="text-sm">
          Welcome to Greencrest Homes, a Real Estate Developer with the sole
          purpose of working on projects that are both sustainable and made to
          last. Built upon a strong financial foundation, we’re highly regarded
          throughout Canada for our unwavering commitment to quality, as well as
          our creative use of building materials to help keep costs low. Get in
          touch today to find out more about our company’s history and
          everything we have planned for the future.
        </p>
      </div>
    </div>
  );
}

export default Banner
