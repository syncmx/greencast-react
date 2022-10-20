import React from 'react'
import { sea } from '../images';

const Cards = ({img, title, date}) => {
  return (
    <div className="bg-[#313A47] h-max p-5 w-[305px] m-3 text-white">
      <img src={img} alt="" />
      <p className="my-6">
      {title}
      </p>
      <h3 className='font-semiboldtext-xl'>{date}</h3>
      <h5 className="text-[#52a15e] text-lg font-light">Read Article</h5>
    </div>
  );
}

export default Cards
