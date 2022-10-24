import React from "react";
import { man, sea, sky } from "../images";
import Cards from "./cards";

const Blog = () => {
  const dummy = [
    {
      id: 1,
      title:
        "Specializing in custom exterior and interior designing, built to suit by selecting appropriate land, elevation and community-based team to represent a home like no other. Our active projects are situated in Guelph, Campbellville, Moffat, Erin and several new locations to be released in Fall of 2022.",
      date: "January 25, 2022",
      img: man,
    },
    {
      id: 2,
      title:
        "Greencrest homes specializes in location-based architecture, that nestles in perfectly with the surrounding properties while offering the utmost character to the build. Custom designs are worked on by multiple design specialists that cohesively deliver a modern and warm feel to compliment your lifestyle. ",
      date: "Oct 15, 2021",
      img: sea,
    },
    {
      id: 3,
      title:
        "Greencrest Homes specializes in the complete life cycle of property development. From land acquisition to retail sales, we have expertise that give us the edge in financing, rezoning, site plan approvals, permits and build all the way to pre-construction sales for larger size projects.",
      date: "June 18, 2023",
      img: sky,
    },
  ];
  return (
    <div className="mx-20 flex items-center justify-center flex-col">
      <section className="sm:px-10 py-5 flex items-center justify-center">
        <div className="h-0.5 w-[100px] sm:w-[200px] lg:w-[300px] bg-[#313A47] " />
        <h3 className="mx-5 text-[#313A47] text-xl lg:text-2xl">Blogs</h3>
        <div className="h-0.5 w-[100px] sm:w-[200px] lg:w-[300px] bg-[#313A47] " />
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
