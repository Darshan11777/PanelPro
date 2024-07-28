import React, { useState } from 'react'
import { useAuth } from '../../store/Auth'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate
 } from 'react-router-dom';
export default function Login() {


  const [formData, setFormData] = useState(
    {
      userName: "",

      email: "",
      password: ""

    }
  )
  const notify = (str)=> {toast.success(str);
  }
  const navigate=useNavigate()


  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }
  console.log("formData", formData);

  const { storeTokenInLS,notifyW ,base_url} = useAuth()
  

  async function handleSubmit(event) {
    event.preventDefault()
   
    // submitToApi(formData)
    console.log(formData)
    try {
      const responce = await fetch( `${base_url}user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      if (responce.ok) {
        const result = await responce.json()
        console.log("login response SUCCES", result);
        storeTokenInLS(result.token)
        notify("login successfully")

        navigate('/admin/user')

      } else {
        console.log("error inside response ", "error");
        notifyW('incorrect userName or password')
      }
    } catch (error) {
      console.log("error", error);
    }



  }

    


  return (
    <section className="wrapper sm:mt-10 sm:pt-10 min-h-[80vh]">
      <div className="container2  flex justify-center items-center">

        <div className="g-6 flex h-full w-[30%] sm:w-full flex-wrap items-center justify-center ">

          {/* <!-- Left column container with background--> */}
          

          {/* <!-- Right column container with form --> */}
          <div className=" w-full">
        <h2 className='text-3xl text-center border-b-4 border-blue-500 pb-2 mb-6'>
          Login Form
        </h2>
            <form onSubmit={handleSubmit} className="min-w-[100%]">
              {/* <!-- Email input --> */}
              <div className="username w-full flex justify-between gap-1 flex-col  mb-4">
                <label htmlFor="userName" className="text-black-100">userName</label>
                <input
                list='userNameSuggestions'
                  type="text"
                  className="w-[100%] text-black  border-[5px] bord bg-white px-2 rounded h-10"
                  placeholder="userName"
                  onChange={handleChange}
                  name="userName"
                  value={formData.userName}
                  id="userName"
                />
                <datalist id="userNameSuggestions">
                  <option value="randomUser" />
                </datalist>
              </div>
              <div className="email w-full flex justify-between gap-1  mb-4 flex-col">
                <label htmlFor="email" className="text-black">email</label>
                <input
                list="emailSuggestion"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
                  id="email"
                  className="w-[100%] text-black  border-[5px] bord bg-white px-2 rounded h-10"
                />
                <datalist id="emailSuggestion">
                  <option value="aaa@111.COM" />
                 
                </datalist>
              </div>
              <div className="password w-full flex justify-between gap-1  mb-10 flex-col">
                <label htmlFor="password" className="text-black">Password</label>
                <input
                  list="passwordSuggestions"
                  type="text"
                  placeholder="Password"
                  onChange={handleChange}
                  name="password"
                  value={formData.password}
                  id="password"
                  // autoComplete="new-password"
                  className="w-[100%] text-black  border-[5px] bord bg-white px-2 rounded h-10"
                />
                
                <datalist id="passwordSuggestions">
                  <option value="eytutyuyr" />
                 
                </datalist>
              </div>
              
            
            

              <button
                onClick={ (e) => {handleSubmit(e); notify()}}
                type="submit"
                className=" bg-blue-400 inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Submit
              </button>
            
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
