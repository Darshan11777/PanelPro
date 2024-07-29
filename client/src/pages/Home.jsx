import React from "react";
import img from "../assets/3d-rendering-website-hosting-concept.jpg";
import Count from "../components/Count";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/Auth";
export default function Home() {
  const navigate = useNavigate();
  const { token, notifyW } = useAuth();
  const adminPanel = () => {
    if (!token) {
      notifyW("please login as admin first");
    } else {
      navigate("/admin/user");
    }
  };
  return (
    <>
      {/* home 1 */}
      <div className=" wrapper  sm:pt-20 sm:pb-4">
        <div className=" container2 ">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:flex-col-reverse sm:mt-[1rem] mt-[2rem] gap-[10rem] lg:gap-[4rem] ">
            <div className=" space-y-4  ">
              <p className="font-small">We are the World Best IT Company</p>
              <h1 className="text-5xl font-bold text-blue-500">
                Welcome to PanelPro
              </h1>
              <p className="font-small">
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At PanelPro, we
                specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
              </p>
              <div className="lg:grid space-x-5  lg:grid-cols-2  lg:space-x-0   pt-6 sm:grid sm:grid-cols-2 gap-3">
                <button className="btn btn-outline btn-primary border-2 bg-primary primary-button  hover:text-white ml-0  sm:w-[100%]">
                  <Link to={"/contact"}>Connect Now</Link>
                </button>

                <button
                  className="btn btn-outline btn-info border-2 hover:border-2 hover:text-white info-button sm:w-[100%]"
                  onClick={() => adminPanel()}
                >
                  Admin Panel
                </button>
              </div>
            </div>
            <div className="h-[100%] mt-[-1rem]">
              <img
                src={img}
                className="h-[85%] sm:h-full sm:w-full rounded-lg pt-1"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Count />
      {/* home 2 */}
      <div className=" wrapper  pt-20 sm:pt-4 mt-16 sm:mt-4">
        <div className=" container2 ">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap  sm:mt-[1rem] mt-[2rem] gap-[10rem] lg:gap-[4rem] ">
            <div className="h-[100%] mt-[-1rem] pt-3 w-full">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="h-[85%] sm:h-full sm:w-full rounded-lg pt-1"
                alt=""
              />
              {/* <a href="https://www.freepik.com/free-photo/3d-rendering-website-hosting-concept_28645203.htm#fromView=search&page=1&position=1&uuid=a754ef4a-db9b-4b75-8687-ea82a6772ab8">Image by freepik</a> */}
            </div>
            <div className="  space-y-4 ">
              <p className="font-small">We are here to help you</p>
              <h1 className="text-5xl font-bold text-blue-500">
                Get Started Today
              </h1>
              <p className="font-small">
                Ready to take the first step towards a more efficient and secure
                IT infrastructure? Contact us today for a free consultation and
                lets discuss how PanelPro can help your business thrive in the
                digital age.
              </p>
              <div className="lg:grid space-x-5  lg:grid-cols-2  lg:space-x-0   pt-6 sm:grid sm:grid-cols-2 gap-3">
                <button className="btn btn-outline btn-primary border-2 bg-primary primary-button  hover:text-white ml-0  sm:w-[100%]">
                  <Link to={"/contact"}>Connect Now</Link>
                </button>

                <button
                  className="btn btn-outline btn-info border-2 hover:border-2 hover:text-white info-button sm:w-[100%]"
                  onClick={() => adminPanel()}
                >
                  Admin Panel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
