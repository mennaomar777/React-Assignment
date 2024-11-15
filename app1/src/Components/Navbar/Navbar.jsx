import React, { useEffect, useState } from "react";
import {Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
  
      <nav className={`fixed top-0 left-0 w-full z-50 ${scrolled ? "py-3 bg-customDarkBlue" : "py-6 bg-customDarkBlue"} duration-500`}>
        <div className="container flex justify-between items-center">
         
          <h2 className="text-white text-4xl font-bold ms-20">
            <Link to="/">START FRAMEWORK</Link>
          </h2>

          <div onClick={() => setShow(!show)} className="px-3 py-1 border rounded-md cursor-pointer md:hidden">
            <i className="fa-solid fa-bars text-2xl"></i>
          </div>

          <ul id="links" className={`me-20 text-lg md:flex flex-col md:flex-row md:basis-auto ${show ? "flex" : "hidden"}`}
          >
            <li className="md:p-2 my-4 md:my-0" onClick={() => setShow(false)}>
              <NavLink to="/about" className="p-2 text-white font-bold">
                About
              </NavLink>
            </li>
            <li className="md:p-2 my-4 md:my-0" onClick={() => setShow(false)}>
              <NavLink to="/portfolio" className="p-2 text-white font-bold">
                Portfolio
              </NavLink>
            </li>
            <li className="md:p-2 my-4 md:my-0" onClick={() => setShow(false)}>
              <NavLink to="/contact" className="p-2 text-white font-bold">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
