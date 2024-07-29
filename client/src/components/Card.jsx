import React from "react";

export default function Card({
  name,
  email,
  id,
  deleteUser,
  editUser,
  phone,
  admin,
  img,
}) {
  return (
    <div className="">
      <div
        aria-label="card-item-v3"
        className="text-xs  tracking-wide font-medium h-full flex flex-col w-full rounded-xl bg-white border border-gray-100 p-3 text-black"
      >
        <div className="relative flex-shrink-0 mb-2 ">
          <img
            src={img}
            alt=""
            className="object-contain w-[100%] aspect-[1/0.7] rounded-lg "
          />
        </div>
        <div className="flex flex-col flex-1">
          <h3 className="mb-2  ">Name:{name}</h3>
          <h3 className="mb-2  ">Email: {email}</h3>
          <h3 className="mb-2  text-black ">Admin: {`${admin}`}</h3>
          <h3 className="mb-2  ">Phone: {phone}</h3>
          <div className="btncon">
           
            <div className=" lg:space-x-0  lg:justify-between pt-4 sm:grid sm:grid-cols-2 gap-3 flex">
              <button
                className="btn btn-sm  btn-error btn-outline w-[40%] sm:w-[100%] "
                onClick={(e) => deleteUser(e, id)}
              >
                Delete
              </button>
              
              <button
                onClick={() => editUser(id)}
                className="btn btn-sm btn-outline btn-primary border-2 bg-primary primary-button  hover:text-white w-[40%] sm:w-[100%]"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
