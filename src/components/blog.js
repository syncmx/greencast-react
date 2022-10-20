import React from "react";
import { man, sea, sky } from "../images";
import Cards from "./cards";

const Blog = () => {
  const dummy = [
    {
      id: 1,
      title:
        "Ut wisi  enim ad minim veniam, quis nostrud exerci tation  ullamcorper",
      date: "April 28, 2022",
      img: man,
    },
    {
      id: 2,
      title:
        "Ut wisi  enim ad minim veniam, quis nostrud exerci tation  ullamcorper",
      date: "March 21, 2022",
      img: sea,
    },
    {
      id: 3,
      title:
        "Ut wisi  enim ad minim veniam, quis nostrud exerci tation  ullamcorper",
      date: "Feb 15, 2022",
      img: sky,
    },
  ];
  return (
    <div className="mx-20 flex items-center justify-center flex-col">
      <section className="px-10 py-5 flex items-center justify-center">
        <div className="h-0.5 w-[200px] lg:w-[300px] bg-[#313A47] " />
        <h3 className="mx-5 text-[#313A47] text-xl lg:text-2xl">Blobs</h3>
        <div className="h-0.5 w-[200px] lg:w-[300px] bg-[#313A47]" />
      </section>

      <section className="flex flex-col items-center justify-center lg:flex-row">
        {dummy.map((data) => (
          <Cards key={data.id} {...data} />
        ))}
      </section>
      <button className=" bg-[#313A47]  text-white py-1.5 px-6 my-4 w-max ">
        READ MORE
      </button>
    </div>
  );
};

export default Blog;
