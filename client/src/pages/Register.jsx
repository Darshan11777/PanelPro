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
//     <section className="mt-10">
//       <div className="container h-full px-6 py-24">
//         <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
//           {/* <!-- Left column container with background--> */}
//           <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
//             <img
//               src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
//               className="w-full"
//               alt="Phone image"
//             />
//           </div>

//           {/* <!-- Right column container with form --> */}
//           <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
//             <form onSubmit={handleSubmit}>
//               {/* <!-- Email input --> */}
// <div className="username w-full flex justify-between gap-4 h-10 ">
//   <label htmlFor="userName" className="text-zinc-100">userName</label>
//               <input
//                 type="text"
//                 className="w-[100%]"
//                 placeholder="userName"
//                 onChange={handleChange}
//                 name="userName"
//                 value={formData.userName}
//                 id="userName"
//             />
//             </div>
//             <div className="password w-full flex justify-between gap-4 h-10">
//               <label htmlFor="password " className="text-zinc-100">Password</label>
//             <input
//                 type="text"
//                 placeholder="Password"
//                 onChange={handleChange}
//                 name="password"
//                 value={formData.password}
//                 id="password"
//                 className="w-[100%]"
//             />
//             </div>
// <div className="email w-full flex justify-between gap-4 h-10">
//   <label htmlFor="email" className="text-zinc-100">email</label>
//              <input
//                 type="email"
//                 placeholder="Email"
//                 onChange={handleChange}
//                 name="email"
//                 value={formData.email}
//                 id="email"
//                 className="w-[100%]"
//             />
//             </div>
// <div className="phone w-full flex justify-between gap-4 h-10">
//   <label htmlFor="phone" className="text-zinc-100">phone</label>
//              <input
//                 type="number"
//                 placeholder="phone"
//                 onChange={handleChange}
//                 name="phone"
//                 value={formData.phone}
//                 id="phone"
//                 className="w-[100%]"
//             />
//             </div>
//               {/* <!-- Remember me checkbox --> */}
//               <div className="mb-6 flex items-center justify-between">
//                 <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
//                   <input
//                     className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
//                     type="checkbox"
//                     value=""
//                     id="exampleCheck3"
//                     defaultChecked
//                   />
//                   <label
//                     className="inline-block pl-[0.15rem] hover:cursor-pointer"
//                     htmlFor="exampleCheck3"
//                   >
//                     Remember me
//                   </label>
//                 </div>

//                 {/* <!-- Forgot password link --> */}
//                 <a
//                   href="#!"
//                   className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
//                 >
//                   Terms and conditions
//                 </a>
//               </div>

//               {/* <!-- Submit button --> */}


//               {/* <TERipple rippleColor="light" className="w-full"> */}

//                 <button
//                 // onClick={handleSubmit}
//                   type="submit"
//                   className=" bg-blue-400 inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//                 >
//                   Sign up
//                 </button>
//               {/* </TERipple> */}

//               {/* <!-- Divider --> */}
//               <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
//                 <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
//                   OR
//                 </p>
//               </div>

//               {/* <!-- Social login buttons --> */}
              
//                 <a
//                   className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//                   style={{ backgroundColor: "#3b5998" }}
//                   href="#!"
//                   role="button"
//                 >
//                   {/* <!-- Facebook --> */}
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="mr-2 h-3.5 w-3.5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
//                   </svg>
//                   Continue with Facebook
//                 </a>
             
//                 <a
//                   className="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
//                   style={{ backgroundColor: "#55acee" }}
//                   href="#!"
//                   role="button"
//                 >
//                   {/* <!-- Twitter --> */}
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="mr-2 h-3.5 w-3.5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                   </svg>
//                   Continue with Twitter
//                 </a>
            
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
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
            {/* <div className="message w-full flex justify-between gap-1 mb-6  flex-col">
              <label htmlFor="message" className="text-black  tracking-wide">Message</label>
              <textarea
                rows='6 '
                type="text"
                placeholder="message "
                onChange={handleChange}
                name="message"
                value={formData.message}
                id="message"
                
                  
                
                
                // autoComplete="new-message"
                className="w-[100%] text-black   border-[5px] bord bg-white px-2 rounded"
              />
              
              
            </div> */}
            
          
            {/* <div className="mb-6 flex items-center justify-between">
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    value=""
                    id="exampleCheck3"
                    defaultChecked
                  />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="exampleCheck3"
                  >
                    Admin
                  </label>
                </div>

                {/* <!-- Forgot password link --> */}
                {/* <a
                  href="#!"
                  className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >
                  Admin
                </a>
              // </div> */} */}

    
           
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









































































































































































































































































































