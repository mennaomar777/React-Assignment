import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <Outlet />
      <div>
        <div className="container text-white bg-teal-500 px-6 md:px-20 pt-52 mt-39">
          <h2 className="title mb-2 font-bold text-4xl">ABOUT COMPONENT</h2>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-white mt-2"></div>
            <i className="fa-solid fa-star mx-4"></i>
            <div className="w-20 h-1 bg-white mt-2"></div>
          </div>
          <div className="flex flex-col md:flex-row pt-5 pb-32 text-start md:px-20">
           
            <p className="mb-4 md:mb-0 md:me-6 w-full md:w-auto sm:w-[90%] sm:mx-auto">
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
           
            <p className="w-full md:w-auto sm:w-[90%] sm:mx-auto">
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
