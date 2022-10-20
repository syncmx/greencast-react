import React from 'react'
import { banner } from '../images'

const Banner = () => {
  return (
    <div className='relative'>
      <img src={banner} alt="" className="w-full lg:h-[626px] lg:object-cover" />
      <div className="absolute bg-[#313A47] rounded w-[300px]  text-white p-3 lg:w-[414px] lg:h-[273px] top-1/3 mx-32">
        <h3 className="font-semibold text-2xl lg:text-4xl mb-4">Lorem ipsum dolor sit amet.</h3>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          expedita maiores repellat beatae, repudiandae inventore non assumenda,
          vero perspiciatis veniam voluptas optio earum! Odio quis ratione
          officiis quae et? Distinctio.
        </p>
      </div>
    </div>
  );
}

export default Banner
