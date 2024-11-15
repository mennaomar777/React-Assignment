import React, { useState } from "react";
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import img1 from '../../assets/poert1.png';
import img2 from '../../assets/port2.png';
import img3 from '../../assets/port3.png';

export default function Portfolio() {
  const [show, setShow] = useState(false);
  const [src, setSrc] = useState("");

  return (
    <>
      <Navbar />
      <Outlet />
      <div className='bg-white pt-32 pb-7'>
        <div className="container">
          <h2 className='title mb-2 text-sky-950 font-bold text-4xl'>PORTFOLIO COMPONENT</h2>
          <div className='flex justify-center mb-10'>
            <div className='w-20 h-1 bg-sky-950 mt-2'></div>
            <i className='fa-solid fa-star mx-4 text-sky-950'></i>
            <div className='w-20 h-1 bg-sky-950 mt-2'></div>
          </div>

          <div className='flex flex-wrap portfolioImgs mx-auto'>
            
            <div className='w-full sm:w-1/3 p-3'>
              <a href="#" onClick={() => { setShow(true); setSrc(img1); }}>
                <div className='relative group'>
                  <img src={img1} alt="" className='rounded-lg w-full'/>
                  <div className="layer bg-teal-400 opacity-0 absolute top-0 left-0 right-0 bottom-0 rounded-lg group-hover:opacity-90 transition-opacity duration-700 flex justify-center items-center text-8xl">
                    <i className='fa-solid fa-plus text-white'></i>
                  </div>
                </div>
              </a>
            </div>

            <div className='w-full sm:w-1/3 p-3'>
              <a href="#" onClick={() => { setShow(true); setSrc(img2); }}>
                <div className='relative group'>
                  <img src={img2} alt="" className='rounded-lg w-full'/>
                  <div className="layer bg-teal-400 opacity-0 absolute top-0 left-0 right-0 bottom-0 rounded-lg group-hover:opacity-90 transition-opacity duration-700 flex justify-center items-center text-8xl">
                    <i className='fa-solid fa-plus text-white'></i>
                  </div>
                </div>
              </a>
            </div>

            
            <div className='w-full sm:w-1/3 p-3'>
              <a href="#" onClick={() => { setShow(true); setSrc(img3); }}>
                <div className='relative group'>
                  <img src={img3} alt="" className='rounded-lg w-full'/>
                  <div className="layer bg-teal-400 opacity-0 absolute top-0 left-0 right-0 bottom-0 rounded-lg group-hover:opacity-90 transition-opacity duration-700 flex justify-center items-center text-8xl">
                    <i className='fa-solid fa-plus text-white'></i>
                  </div>
                </div>
              </a>
            </div>

            
            <div className='w-full sm:w-1/3 p-3'>
              <a href="#" onClick={() => { setShow(true); setSrc(img1); }}>
                <div className='relative group'>
                  <img src={img1} alt="" className='rounded-lg w-full'/>
                  <div className="layer bg-teal-400 opacity-0 absolute top-0 left-0 right-0 bottom-0 rounded-lg group-hover:opacity-90 transition-opacity duration-700 flex justify-center items-center text-8xl">
                    <i className='fa-solid fa-plus text-white'></i>
                  </div>
                </div>
              </a>
            </div>

            <div className='w-full sm:w-1/3 p-3'>
              <a href="#" onClick={() => { setShow(true); setSrc(img2); }}>
                <div className='relative group'>
                  <img src={img2} alt="" className='rounded-lg w-full'/>
                  <div className="layer bg-teal-400 opacity-0 absolute top-0 left-0 right-0 bottom-0 rounded-lg group-hover:opacity-90 transition-opacity duration-700 flex justify-center items-center text-8xl">
                    <i className='fa-solid fa-plus text-white'></i>
                  </div>
                </div>
              </a>
            </div>

            <div className='w-full sm:w-1/3 p-3'>
              <a href="#" onClick={() => { setShow(true); setSrc(img3); }}>
                <div className='relative group'>
                  <img src={img3} alt="" className='rounded-lg w-full'/>
                  <div className="layer bg-teal-400 opacity-0 absolute top-0 left-0 right-0 bottom-0 rounded-lg group-hover:opacity-90 transition-opacity duration-700 flex justify-center items-center text-8xl">
                    <i className='fa-solid fa-plus text-white'></i>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {show && (
            <div 
              onClick={(e) => e.target.id === "screen" && setShow(false)} 
              id="screen" 
              className="screen bg-blue-500/25 fixed top-0 left-0 h-full w-full flex justify-center items-center z-50"
            >
              <img src={src} className="w-3/4 md:w-2/4" alt="" />
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
