import React from 'react'

export default function Card({name,email,id,deleteUser,editUser,phone,admin,img}) {
  
  return (
    <div className=''>
     

      <div
        aria-label="card-item-v3"
        className="text-base tracking-wide font-medium h-full flex flex-col w-full rounded-xl bg-white border border-gray-100 p-5 text-black"
      >
        <div className="relative flex-shrink-0 mb-5 ">
          <img
            src={img}
            alt=""
            className="object-cover w-full aspect-square rounded-lg"
          />
        </div>
        <div className="flex flex-col flex-1">
          <h3 className="mb-3  ">
            
            Name:{name}
           
          </h3>
          <h3 className="mb-3  ">
            
           
            Email: {email}
          </h3>
          <h3 className="mb-3  text-black ">
            
           
            Admin: {`${admin}`}
          </h3>
          <h3 className="mb-3  ">
            
           
            Phone: {phone}
          </h3>
          <div className="btncon">

           
                    {/* <div
                      className="flex items-center gap-x-5"
                      aria-label="button-combination"
                    >
                      <button
                      onClick={(e) => deleteUser(e,id)}
                      className="inline-flex items-center justify-center w-[40%] font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px] hover:bg-[#eb0f0f]">
                        delete
                      </button>
                      <button 
                      onClick={() => editUser(id)}
                      className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-blue-500 border border-blue-500 rounded-lg h-[60px] hover:bg-blue-500 hover:text-white">
                        edit
                      </button>
                    </div> */}
                    <div className=' lg:space-x-0  lg:justify-between pt-6 sm:grid sm:grid-cols-2 gap-3 flex'>
    <button className='btn btn-md  btn-error btn-outline w-[40%] sm:w-[100%] '
      onClick={(e) => deleteUser(e,id)}
                    
    >Delete</button>
    {/* <button className='font-semibold bg-sky-500 px-4 py-2 text-[0.9rem] tracking-wide rounded-lg hover:-white border-4'> Connect Now</button> */}
    <button
      onClick={() => editUser(id)}
    className='btn btn-md btn-outline btn-primary border-2 bg-primary primary-button  hover:text-white w-[40%] sm:w-[100%]'>Edit</button>
    </div>
                    
          </div>
        </div>
      </div>
    </div>
  )
}
