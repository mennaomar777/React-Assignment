import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

export default function Contact() {
  const [topName, setTopName] = useState(false);
  const [topAge, setTopAge] = useState(false);
  const [topMail, setTopMail] = useState(false);
  const [topPass, setTopPass] = useState(false);

  return (
    <>
      <Navbar />
      <Outlet />
      <div className='bg-white pt-32 pb-7'>
        <div className='container'>
          <h2 className='title mb-2 text-sky-950 font-bold text-4xl'>CONTACT SECTION</h2>
          <div className='flex justify-center mb-10'>
            <div className='w-20 h-1 bg-sky-950 mt-2'></div>
            <i className='fa-solid fa-star mx-4 text-sky-950'></i>
            <div className='w-20 h-1 bg-sky-950 mt-2'></div>
          </div>

          <div className='formPart flex flex-col mx-auto p-5'>
            <div className="name my-2">
              <label htmlFor="name" className={`block text-teal-500 relative duration-500 ${topName ? "top-0 z-10" : "top-10 -z-10"} text-left`}>
                userName:
              </label>
              <input
                onInput={(e) => e.target.value === "" ? setTopName(false) : setTopName(true)}
                id="name"
                type="text"
                placeholder="userName"
                className="z-30 w-full border-b p-4 focus:outline-none"/>
            </div>
            <div className="age my-2">
              <label htmlFor="age" className={`block  text-teal-500  relative duration-500 ${topAge ? "top-0 z-10" : "top-10 -z-10"} text-left`}>
                userAge:
              </label>
              <input
                onInput={(e) => e.target.value === "" ? setTopAge(false) : setTopAge(true)}
                id="age"
                type="text"
                placeholder="userAge"
                className="z-30 w-full border-b p-4 focus:outline-none" />
            </div>
            <div className="mail my-2">
              <label htmlFor="mail" className={`block  text-teal-500  relative duration-500 ${topMail ? "top-0 z-10" : "top-10 -z-10"} text-left`}>
                userEmail:
              </label>
              <input
                onInput={(e) => e.target.value === "" ? setTopMail(false) : setTopMail(true)}
                id="mail"
                type="text"
                placeholder="userEmail"
                className="z-30 w-full border-b p-4 focus:outline-none"/>
            </div>
            <div className="pass my-2">
              <label htmlFor="pass" className={`block  text-teal-500  relative duration-500 ${topPass ? "top-0 z-10" : "top-10 -z-10"} text-left`}>
                userPassword:
              </label>
              <input
                onInput={(e) => e.target.value === "" ? setTopPass(false) : setTopPass(true)}
                id="pass"
                type="text"
                placeholder="userPassword"
                className="z-30 w-full border-b p-4 focus:outline-none"/>
            </div>
            <button className="bg-teal-500 rounded-md px-3 py-2 text-white w-fit mt-4">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
