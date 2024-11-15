import React from 'react';
export default function Footer() {
  return (
    <>
      <div className='container text-white py-12 sm:px-10 md:px-10 lg:px-20'>
        <div className='flex flex-col md:flex-row justify-between'>

          <div className='py-6 w-full md:w-1/3'>
            <h3 className='text-3xl mb-4'>LOCATION</h3>
            <p className='my-2'>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          <div className='py-6 w-full md:w-1/3'>
            <h3 className='text-3xl mb-4'>AROUND THE WEB</h3>
            <div className='flex justify-center mt-2 '>
              <div className='border border-1 rounded-full py-1 px-2 me-2'>
                <i className='fa-brands fa-facebook'></i>
              </div>
              <div className='border border-1 rounded-full py-1 px-2 me-2'>
                <i className='fa-brands fa-twitter'></i>
              </div>
              <div className='border border-1 rounded-full py-1 px-2 me-2'>
                <i className='fa-brands fa-linkedin'></i>
              </div>
              <div className='border border-1 rounded-full py-1 px-2 me-2'>
                <i className='fa-solid fa-globe'></i>
              </div>
            </div>
          </div>

       
          <div className='py-6 w-full md:w-1/3'>
            <h3 className='text-3xl mb-4'>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>

     
      <div className='text-center text-white bg-slate-900 py-5'>
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  );
}

