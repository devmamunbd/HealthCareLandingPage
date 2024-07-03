import React from 'react'
import { FaStar } from "react-icons/fa6";
import { GiTwoCoins } from "react-icons/gi";
import { IoIosVideocam } from 'react-icons/io';


const Home = () => {
  return (
    <div>
      <div>
        <div className='home-img py-6 '>
          <div>

          </div>
        <div>
        <img className='' src="/public/Rectangle 5.png" alt="" />
        </div>
        </div>


      {/* care for every */}

      <div className='relative'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 py-8'>

          <div className='bg-white shadow-lg px-4 py-2 rounded-lg border-[1px] border-gray-600'>
          <h1 className='text-black font-bold text-3xl'>90%</h1>
          <p>Patient satisfication <br /> rate, reflection our commitet</p>
          <img className='w-32' src="https://i.postimg.cc/SRgYLTYL/4890-png-860-1-removebg-preview-1.png" alt="" />
          </div>

          <div className='bg-gray-100 shadow-lg px-4 py-2 rounded-lg h-44 mt-20 border-[1px] border-gray-600'>
          <h1 className='text-black font-bold text-3xl'>500+</h1>
          <p>Border-certified <br /> doctor</p>
         <div className='flex justify-end'>
         <img className='w-20' src="https://i.postimg.cc/TwX9pVn4/pngtree-gold-color-award-ribbon-batch-logo-icon-vector-graphic-designing-for-png-image-9169483-remov.png" alt="" />
         </div>
          </div>


          <div className='bg-white shadow-lg px-4 py-2 rounded-lg h-36 mt-[7rem] border-[1px] border-gray-600'>
         <div className='flex gap-2 items-center'>
          <h1 className='text-black font-bold text-3xl'>4.8</h1>
          <FaStar className='text-yellow-500 text-2xl' />
         </div>
          <p>Over 20.000 patirnt</p>
         <div className='mt-6'>
        <div className='flex'>
          <img className='w-8 rounded-full' src="https://i.postimg.cc/brw9j2QT/images-12.jpg" alt="" />
          <img className='w-8 rounded-full' src="https://i.postimg.cc/28JFPy3Q/images-13.jpg" alt="" />
          <img className='w-8 rounded-full' src="https://i.postimg.cc/Jzkcm8B9/images-14.jpg" alt="" />
        </div>
         </div>
          </div>


          <div className='bg-gray-100 shadow-lg px-4 py-2 rounded-lg h-44 mt-20 border-[1px] border-gray-600'>
          <h1 className='text-black font-bold text-3xl'>$5000</h1>
          <p>Money speend <br /> for poor patient</p>
         <div className='flex justify-end'>
         <GiTwoCoins className='text-7xl text-yellow-500' />
         </div>
          </div>


          <div className='bg-white shadow-lg px-4 py-2 rounded-lg border-[1px] border-gray-600'>
          <h1 className='text-black font-bold text-3xl'>50+</h1>
          <p>Free lession video <br /> for patient</p>
          <div className='flex justify-center items-center mt-7'>
          <IoIosVideocam className='text-black text-7xl' />
          </div>

          </div>


        </div>

      <div className='text-center absolute bottom-60 left-[23rem]'>
        <h1 className='text-4xl text-black font-bold'>Comperehsive Care <br /> for Every Patient</h1>
      </div>
      </div>

        {/* 3rd-section */}


      </div>
    </div>
  )
}

export default Home