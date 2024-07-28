import React, { useState } from "react";
import { useAuth } from "../../store/Auth";
import { useNavigate } from "react-router-dom";

// import { TEInput, TERipple } from "tw-elements-react";

export default function Register() {
  const navigate =useNavigate()
  const [formData, setFormData] = useState(
    {
      userName: "",
      password: "",
      email: "",
      phone: "",

    }
  )
  const {notify,notifyW,storeTokenInLS}=useAuth()

 console.log( "formData",formData);
  console.log( "formData",formData);
console.log( "form",formData);
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
  const [data, setData] = React.useState({

  });
  const tryB= {
    "userName":"dsrefefef",
    "email":"jas@fverfdg.com",
    "phone":"555555dfsds",
    "password":"sudsfsd"
}
  // async function createItem() {
  //     try {
          
     
  //     const res =  await fetch("http://localhost:3000/user/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: tryB,
  //     });
  //     console.log( "register response",res);
  //     // if(res.ok){
  //     //   const result=await res.json()
  //     //   setData(result)

  //     // }else{
  //     //   console.log("error inside response ", "error");
  //     // }
       
  //   } catch (error) {
  //     // log error with detailes

  //       console.log( " register error",error.response);

  //   }
  // }
  
  async function handleSubmit (event) {
    event.preventDefault()


    try {
      const response = await fetch("http://localhost:3000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const responseData = await response.json();
      
      if (response.ok) {
        // alert("registration successful");
        // setFormData({ userName: "", email: "", phone: "", password: "" });
       
        notify("registration successful")
        navigate('/admin/user')
        storeTokenInLS(responseData.token)

      } else {
        // log error with detailes
      const text = await response.json;
notifyW(responseData.extraDetails[0])
        console.log("error inside response just json ",responseData.extraDetails[0]);
        
       
      }
    } catch (error) {
      console.log("Error of register", error);
    }


// createItem()



    // console.log("register form data",JSON.stringify(formData))
    // submitToApi(formData)
  }



  return (
    
    <section className="wrapper sm:mt-10 sm:pt-10 ">
    <div className="container2  flex justify-center items-center w-[100%]">
    
      <div className="g-6 flex h-full  flex-wrap items-center justify-center w-[70%] sm:w-[100%]  ">
    
        {/* <!-- Left column container with background--> */}
        
    
        {/* <!-- Right column container with form --> */}
        <div className="min-w-[50%] ">
      <h2 className='text-3xl text-center border-b-4 border-blue-500 pb-2 mb-6'>
      Registration Form
      </h2>
          <form onSubmit={handleSubmit} className="min-w-[100%]">
            {/* <!-- Email input --> */}
            <div className="username w-full flex justify-between gap-1 flex-col  mb-4">
              <label htmlFor="userName" className="text-black-100 tracking-wide">UserName</label>
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
                <option value="Darshan" />
              </datalist>
            </div>
            <div className="email w-full flex justify-between gap-1 mb-4   flex-col">
              <label htmlFor="email" className="text-black tracking-wide">Email</label>
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
              <label htmlFor="phone" className="text-black tracking-wide">phone</label>
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
            <div className="password w-full flex justify-between gap-1 mb-4   flex-col">
              <label htmlFor="password" className="text-black tracking-wide">password</label>
              <input
                type="password"
                placeholder="password"
                onChange={handleChange}
                name="password"
                value={formData.password}
                id="password"
                className="w-[100%] text-black  border-[5px] bord bg-white px-2 rounded h-10"
              />
            </div>
          

    
           
    <button onClick={ (e) => {handleSubmit(e); notify()}}
              type="submit" className='btn btn-outline btn-primary border-2 bg-primary primary-button  hover:text-white sm:w-[100%]'>
              Submit   </button>
          
          
    
          </form>
        </div>
      </div>
    </div>
    </section>
  );
}









































































































































































































































































































