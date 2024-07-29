import React from "react";

export default function Count() {
  return (
    <div className="wrapper ">
      <div className="container2">
        <div className="w-full mx-auto p-4 pb-2 bg-[#f4f3ff] rounded shadow-md md:text-base ">
          <div className="flex  md:flex-wrap  sm:grid-cols-1 md:grid-cols-2 justify-center mb-4 md:mb-0  ">
            <div className="w-1/2 md:w-full  p-4 text-center">
              <h3 className="text-3xl font-bold mb-2 md:text-2lg">500+</h3>
              <p className="text-gray-600 tracking-wide ">
                Registered Companies
              </p>
            </div>
            <hr className="h-[6rem] w-[0.1rem] bg-black md:w-0 md:hidden  " />
            <div className="w-1/2 md:w-full  p-4 text-center ">
              <h3 className="text-3xl font-bold mb-2 md:text-2lg ">50,000+</h3>
              <p className="text-gray-600 tracking-wide">Happy Clients</p>
            </div>
            <hr className="h-[6rem] w-[0.1rem] bg-black md:hidden" />
            <div className="w-1/2 md:w-full p-4 text-center">
              <h3 className="text-3xl font-bold mb-2 md:text-2lg">1,000+</h3>
              <p className="text-gray-600 tracking-wide">
                Well-known Developers
              </p>
            </div>
            <hr className="h-[6rem] w-[0.1rem] bg-black md:hidden" />
            <div className="w-1/2 md:w-full  p-4 text-center">
              <h3 className="text-3xl font-bold mb-2 md:text-2lg">24/7</h3>
              <p className="text-gray-600 tracking-wide">Service Number</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
