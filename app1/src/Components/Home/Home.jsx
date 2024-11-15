import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import logo from '../../assets/avataaars.svg'
export default function Home() {
  return (
    <>
    <h1>hello from Home</h1>
   <Navbar />
   <Outlet/>
   <div className=' bg-teal-500 px-20 pt-20 mt-39 py-3'>
   <div className='container text-white '>
          <div>
          <img src = {logo} alt="" className = 'w-64 mx-auto mb-7' />
          </div>
          <h2 className='title mb-2 font-bold text-4xl'>START FRAMEWORK</h2>
          <div className='flex justify-center'>
            <div className='w-20 h-1 bg-white mt-2'></div>
            <i className='fa-solid fa-star mx-4'></i>
            <div className='w-20 h-1 bg-white mt-2 mb-5'></div>
          </div>
          <span className=''>Graphic Artist - Web Designer - Illustrator</span>
          
         </div>
   </div>
   <Footer/>
    </>
  )
}
