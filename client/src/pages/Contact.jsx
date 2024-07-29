import React, { useState } from "react";
import { useAuth } from "../../store/Auth";

export default function Contact() {
  let { userdata, notify, notifyW, base_url } = useAuth();
  console.log("userdata", userdata);

  let initialFormData = {
    userName: "",
    message: "",
    email: "",
    phone: "",
  };

  const [data, setData] = React.useState({});
  const [formData, setFormData] = useState(initialFormData);
  React.useEffect(() => {
    if (userdata.msg) {
      const { userName, email, phone } = userdata.msg;
      setFormData({ userName, message: "", email, phone });
    } else {
      setFormData(initialFormData);
    }
  }, [userdata.msg]);
  function handleChange(event) {
    // if key is enter submit form
    if (event.key === "Enter") {
      handleSubmit(event);
    }
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  console.log("formData", formData);
  async function handleSubmit(event) {
    event.preventDefault();

    if (formData.message.length === 0) {
      notifyW("please write something");
      return;
    }

    try {
      const responce = await fetch(`${base_url}form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (responce.ok) {
        const result = await responce.json();
        console.log("login response SUCCES", result);
        setData(result);
        notify("message sent successfully");
      } else {
        console.log("error inside response ", "error");
        notifyW("message not sent");
      }
    } catch (error) {
      console.log("error", error);
    }
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        ["message"]: "",
      };
    });
  }
  console.log(formData);

  return (
    <section className="wrapper sm:mt-10 sm:pt-10 sm:w-full ">
      <div className="container2  flex justify-center items-center w-full  md:w-[100%]">
        <div className="g-6 flex h-full  flex-wrap items-center justify-center w-[60%] sm:w-[100%]  ">
          <div className="min-w-[50%] sm:w-[100%]">
            <h2 className="text-3xl text-center border-b-4 border-blue-500 pb-2 mb-6">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="min-w-[100%]">
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
              <div className="message w-full flex justify-between gap-1 mb-6  flex-col">
                <label htmlFor="message" className="text-black  tracking-wide">
                  Message
                </label>
                <textarea
                  rows="6 "
                  type="text"
                  placeholder="message "
                  onChange={handleChange}
                  name="message"
                  value={formData.message}
                  id="message"
                  className="w-[100%] text-black   border-[5px] bord bg-white px-2 rounded"
                />
              </div>

              <button
                onClick={(e) => {
                  handleSubmit(e);
                  notify();
                }}
                type="submit"
                className="btn btn-outline btn-primary border-2 bg-primary primary-button  hover:text-white sm:w-[100%]"
              >
                Submit{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
