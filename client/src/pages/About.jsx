import React from 'react'

export default function About() {
  return (
    <div className='wrapper'>
  

<div className="container2 mx-auto p-4 sm:pt-20 pt-6 ">
  <h1 className="text-3xl text-blue-500 font-bold mb-4">About PanalPro</h1>
  <p className="text-lg text-gray-600 mb-4">PanalPro is a user data management system built using the MERN Stack (MongoDB, Express, React, and Node.js). Our goal is to provide a secure and efficient way to manage user data, making it easier for businesses to focus on what matters most.</p>
  <div className="flex flex-wrap -mx-4">
    <div className="w-full  p-4">
      <h2 className="text-xl text-blue-500 font-bold mb-2">Our Mission</h2>
      <p className="text-lg text-gray-600">Our mission is to provide a reliable and scalable solution for user data management, empowering businesses to make data-driven decisions and drive growth.</p>
    </div>
    {/* <div className="w-full md:w-1/2 xl:w-1/3 p-4">
      <h2 className="text-xl text-blue-500 font-bold mb-2">Our Values</h2>
      <ul className="list-disc text-lg text-gray-600">
        <li>Security and compliance</li>
        <li>Scalability and performance</li>
        <li>User-centric design</li>
        <li>Innovation and continuous improvement</li>
      </ul>
    </div> */}
    {/* <div className="w-full md:w-1/2 xl:w-1/3 p-4">
      <h2 className="text-xl text-blue-500 font-bold mb-2">Our Team</h2>
      <p className="text-lg text-gray-600">Our team consists of experienced professionals with expertise in software development, data management, and cybersecurity. We're passionate about delivering high-quality solutions that meet the needs of our clients.</p>
    </div> */}
  </div>
</div>
    </div>
  )
}
