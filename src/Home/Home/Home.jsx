import React from 'react'
import { FaStar } from "react-icons/fa6";
import { GiTwoCoins } from "react-icons/gi";
import { IoIosVideocam } from 'react-icons/io';
import { GoArrowUpRight } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


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

        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-14'>
          <div className='space-y-2'>
            <button className='border-[1px] border-black text-black px-8 py-2 bg-transparent rounded-full'>Who we are</button>
            <div className='space-y-3'>
              <h1 className='text-3xl font-bold text-black'>We Help To Go <br />Solutios</h1>
              <p className='text-xl text-black'>A solution is a mixture of two or more species that form a homogeneous single phase. Solutions are normally thought of in terms of liquids; however, solutions may include solids and even gases. Virtually all-industrial crystallization processes involve solutions.</p>
           <div className='flex gap-2 items-center bg-yellow-500 px-8 py-2 w-44 rounded-lg '>
           <button className='text-black font-bold'>Learn More</button>
           <GoArrowUpRight className='text-black font-bold' />

           </div>
            </div>
          </div>

        <div className='relative'>
          <div>
            <img src="/public//Rectangle 24.png" alt="" />
          </div>
          <div className='absolute -bottom-10 -left-10'>
            <div className='bg-violet-900 w-96 rounded-2xl p-4'>
            <h1 className='text-2xl text-white'>Our mission is simple</h1>
            <p className='text-gray-200'>To provide high-quality healthcare services <br /> that are accessible, personalized, and <br /> patient-centered</p>
            </div>
          </div>
        </div>

          </div>
        </div>


        {/* four-section */}

        <div className='mt-60'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

        <div className='space-y-2'>
            <button className='border-[1px] border-black text-black px-8 py-2 bg-transparent rounded-full'>Service</button>
            <div className='space-y-3'>
              <h1 className='text-3xl font-semibold text-black'>Empoering Health, <br />Enriching Lives</h1>
              <p className='text-xl text-black'>A solution is a mixture of two or more species that form a homogeneous single phase. Solutions are normally thought of in terms of liquids; however, solutions may include solids and even gases. Virtually all-industrial crystallization processes involve solutions.</p>
           <div className='flex gap-2 items-center bg-yellow-500 px-8 py-2 w-44 rounded-lg '>
           <button className='text-black font-bold'>Appoinment</button>
           <FiArrowUpRight className='text-4xl font-bold text-black'/>
           </div>
            </div>
          </div>


        <div className='relative'>
          <div className=''>
            <img className='rounded-2xl' src="/public/Rectangle 27-2.png" alt="" />
          </div>
          <div className='bg-[#020043] absolute bottom-8 left-8 opacity-80 rounded-2xl p-4 w-80'>
          <h1 className='text-white text-2xl'>Advance Technology</h1>
          <p className='text-white'>Our sergeons are trained in the latest <br /> robotic surgical techniques, which <br />allow for greater precision</p>
          <div className='flex justify-end mt-3 bg-yellow-500 rounded-full w-10 h-10'>
          <div className='mt-3 mr-3 text-white'>
          <GoArrowUpRight className=''/>
          </div>

          </div>
          </div>
        </div>

        <div className='relative'>
          <div className=''>
            <img className='rounded-2xl' src="/public/Rectangle 27-1.png" alt="" />
          </div>
          <div className='bg-[#020043] absolute bottom-8 left-8 opacity-80 rounded-2xl p-4 w-80'>
          <h1 className='text-white text-2xl'>Advance Technology</h1>
          <p className='text-white'>Our sergeons are trained in the latest <br /> robotic surgical techniques, which <br />allow for greater precision</p>
          <div className='flex justify-end mt-3 bg-yellow-500 rounded-full w-10 h-10'>
          <div className='mt-3 mr-3 text-white'>
          <GoArrowUpRight className=''/>
          </div>

          </div>
          </div>
        </div>


        <div className='relative'>
          <div className=''>
            <img className='rounded-2xl' src="/public/Rectangle 27.png" alt="" />
          </div>
          <div className='bg-[#020043] absolute bottom-8 left-8 opacity-80 rounded-2xl p-4 w-80'>
          <h1 className='text-white text-2xl'>Advance Technology</h1>
          <p className='text-white'>Our sergeons are trained in the latest <br /> robotic surgical techniques, which <br />allow for greater precision</p>
          <div className='flex justify-end mt-3 bg-yellow-500 rounded-full w-10 h-10'>
          <div className='mt-3 mr-3 text-white'>
          <GoArrowUpRight className=''/>
          </div>

          </div>
          </div>
        </div>



        </div>
        </div>


      {/* testimonial */}

      <div className='mt-40'>
        <div>
          <button className='bg-transparent px-8 py-2 border-[1px] border-black rounded-full'>Testimonial</button>
          <h1 className='text-3xl text-black font-bold mt-7'>What the say about us</h1>
        </div>

        <div className='mt-12 '>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='bg-[#FFFFF5] p-3'>
            <div>
              <h1 className='text-xl font-bold text-black'>Expertise and Compassion <br /> Combined</h1>
              <p>In this post, you will learn how to combine two articles on your blog to website to improve SEO, boost content authority, and increase</p>
            </div>
            <div className='flex gap-3 items-center mt-2'>
              <div>
                <img className='w-10 h-10 rounded-full' src="https://i.postimg.cc/CxmqD99D/istockphoto-1437816897-612x612.jpg" alt="" />
              </div>
              <div>
                <h1><span className='font-bold text-black'>Sarah D,</span> It Professional</h1>
                <div className='flex text-yellow-500'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>

              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='bg-[#FFFFF5] p-3'>
            <div>
              <h1 className='text-xl font-bold text-black'>A Partner In health and  <br /> Wellness</h1>
              <p>In this post, you will learn how to combine two articles on your blog to website to improve SEO, boost content authority, and increase</p>
            </div>
            <div className='flex gap-3 items-center mt-2'>
              <div>
                <img className='w-10 h-10 rounded-full' src="https://i.postimg.cc/4xzxv29D/stock-photo-doubtful-hispanic-man-looking-with-disbelief-expression.jpg" alt="" />
              </div>
              <div>
                <h1><span className='font-bold text-black'>Micheal R,</span> Business Executive</h1>
                <div className='flex text-yellow-500'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>

              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='bg-[#FFFFF5] p-3'>
            <div>
              <h1 className='text-xl font-bold text-black'>Life-Saving Care, Life-Changing <br /> Experience</h1>
              <p>In this post, you will learn how to combine two articles on your blog to website to improve SEO, boost content authority, and increase</p>
            </div>
            <div className='flex gap-3 items-center mt-2'>
              <div>
                <img className='w-10 h-10 rounded-full' src="https://i.postimg.cc/HsFr97Py/images-15.jpg" alt="" />
              </div>
              <div>
                <h1><span className='font-bold text-black'>David Smith,</span> Lawyer</h1>
                <div className='flex text-yellow-500'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>

              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='bg-[#FFFFF5] p-3'>
            <div>
              <h1 className='text-xl font-bold text-black'>Expertise and Compassion <br /> Combined</h1>
              <p>In this post, you will learn how to combine two articles on your blog to website to improve SEO, boost content authority, and increase</p>
            </div>
            <div className='flex gap-3 items-center mt-2'>
              <div>
                <img className='w-10 h-10 rounded-full' src="https://i.postimg.cc/CxmqD99D/istockphoto-1437816897-612x612.jpg" alt="" />
              </div>
              <div>
                <h1><span className='font-bold text-black'>Sarah D,</span> It Professional</h1>
                <div className='flex text-yellow-500'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>

              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-[#FFFFF5] p-3'>
            <div>
              <h1 className='text-xl font-bold text-black'>Expertise and Compassion <br /> Combined</h1>
              <p>In this post, you will learn how to combine two articles on your blog to website to improve SEO, boost content authority, and increase</p>
            </div>
            <div className='flex gap-3 items-center mt-2'>
              <div>
                <img className='w-10 h-10 rounded-full' src="https://i.postimg.cc/CxmqD99D/istockphoto-1437816897-612x612.jpg" alt="" />
              </div>
              <div>
                <h1><span className='font-bold text-black'>Sarah D,</span> It Professional</h1>
                <div className='flex text-yellow-500'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>

              </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
        </div>

      </div>


      </div>
    </div>
  )
}

export default Home