import React from "react";
import { home5, small } from "../images";

const Info = () => {
  return (
    <div className="mx-20 flex flex-col lg:flex-row lg:items-start lg:space-x-2 lg:mx-24">
      <section className="flex justify-center relative -z-10 w-full lg:w-1/2 mb-10 xl:mb-40">
        <div className="">
          <img src={home5} className="" alt="" />
        </div>
        <div className="w-3/4 sm:w-1/2 absolute top-40 sm:top-48 lg:top-56 -left-10 sm:left-10 z-30 lg:left-52 xl:left-72">
          <img src={small} className="" alt="" />
        </div>
      </section>
      <section className="mt-32 lg:mt-0 lg:w-1/2">
        <h2 className="text-xl">
          <span className="border-t-2 border-[#313A47] w-20">About Us,</span>
        </h2>
        <h2 className="text-2xl font-bold my-5 lg:text-3xl">
          Committed to Excellence
        </h2>
        <div className="sm:pl-10">
          <p>
            Founded in 2000, Greencrest Homes has served the CA area’s growing
            need for new property and real estate projects through impressive
            integrity and a commitment to delivering results with the highest
            quality standards. Our professional team works closely with both
            investors and landowners in order to come up with results that
            exceed expectations.
          </p>
          <p className="my-3">
            Whatever you’re looking for, Greencrest Homes has the experience and
            the ability to deliver outstanding results. Browse the rest of our
            site for more information about the services we provide and to
            browse all our past projects. If you’re interested in working with
            our Real Estate Developer on your next endeavour, schedule your
            initial consultation meeting today.
          </p>
          <button className=" bg-[#313A47]  text-white py-1.5 px-6 my-4 w-max ">
            READ MORE
          </button>
        </div>
      </section>
    </div>
  );
};

export default Info;
