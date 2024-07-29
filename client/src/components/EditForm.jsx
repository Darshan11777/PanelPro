import React, { useState } from "react";
import { useAuth } from "../../store/Auth";

export default function EditForm({ userData, userEdit }) {
  const{notify}=useAuth()
  const intialFormData = userData || {
    userName: "",
    email: "",
    password: "",
    admin: false,
    phone: "",
    _id: "",
  };

  const [formData, setFormData] = useState(intialFormData);

  React.useEffect(() => {
    if (userData) {
      setFormData({ ...userData });
    }
  }, [userData]);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // submitToApi(formData)
    console.log("submitting form");
    userEdit(formData);
  }

  return (
    <section className="wrapper sm:mt-10 sm:pt-10 ">
      <div className="container2  flex justify-center items-center w-[100%]">
        <div className="g-6 flex h-full  flex-wrap items-center justify-center w-[70%] sm:w-[100%]  ">
         
          <div className="min-w-[50%] md:w-full">
            <h2 className="text-3xl text-center border-b-4 border-blue-500 pb-2 mb-6">
              Edit User
            </h2>
            <form onSubmit={handleSubmit} className="min-w-[100%] md:w-full">
             
              <div className="username w-full flex justify-between gap-1 flex-col  mb-4">
                <label
                  htmlFor="userName"
                  className="text-black-100 tracking-wide"
                >
                  UserName
                </label>
                <input
                  list="userNameSuggestions"
                  type="text"
                  className="w-[100%] text-black  border-[5px] bord bg-white px-2 rounded h-10"
                  placeholder="userName"
                  onChange={handleChange}
                  name="userName"
                  value={formData.userName}
                  id="userName"
                />
                <datalist id="userNameSuggestions">
                  <option value="Darshan" />
                </datalist>
              </div>
              <div className="email w-full flex justify-between gap-1 mb-4   flex-col">
                <label htmlFor="email" className="text-black tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
                  id="email"
                  className="w-[100%] text-black  border-[5px] bord bg-white px-2 rounded h-10"
                />
              </div>
              <div className="phone w-full flex justify-between gap-1 mb-4   flex-col">
                <label htmlFor="phone" className="text-black tracking-wide">
                  phone
                </label>
                <input
                  type="number"
                  placeholder="phone"
                  onChange={handleChange}
                  name="phone"
                  value={formData.phone}
                  id="phone"
                  className="w-[100%] text-black  border-[5px] bord bg-white px-2 rounded h-10"
                />
              </div>

              <div className="mb-6 flex items-center justify-between">
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    value={formData.admin}
                    onChange={handleChange}
                    name="admin"
                    id="admin"
                  />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="admin"
                  >
                    Admin
                  </label>
                </div>
              </div>

              <button
                onClick={(e) => {
                  handleSubmit(e);
                  notify();
                }}
                type="submit"
                className="btn btn-outline btn-primary border-2 bg-primary primary-button  hover:text-white sm:w-[100%]"
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
