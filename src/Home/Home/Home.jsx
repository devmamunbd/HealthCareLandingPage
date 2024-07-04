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
        <div className='home-img py-6 relative'>
        <div className=' '>
        <img className='' src="https://i.postimg.cc/V6wZhRD0/Rectangle-5.png" alt="" />
        </div>
        <div className='absolute rounded-b-[48px] top-5  w-full h-[78vh] bg-gradient-to-t from-[#474473] to-[rgba(2, 0, 67, 0.47)]'>
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
            <img src="https://i.postimg.cc/3NJS8wMK/Rectangle-24.png" alt="" />
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

        <div className='mt-44'>
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
            <img className='rounded-2xl' src="https://i.postimg.cc/NGpCNRTL/Rectangle-27-2.png" alt="" />
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
            <img className='rounded-2xl' src="https://i.postimg.cc/8PcKxsB4/Rectangle-27-1.png" alt="" />
          </div>
          <div className='bg-[#020043] absolute bottom-8 left-8 opacity-80 rounded-2xl p-4 w-80'>
          <h1 className='text-white text-2xl'>Online Doctor Meet</h1>
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
            <img className='rounded-2xl' src="https://i.postimg.cc/Qxz4Dsf3/Rectangle-27.png" alt="" />
          </div>
          <div className='bg-[#020043] absolute bottom-8 left-8 opacity-80 rounded-2xl p-4 w-80'>
          <h1 className='text-white text-2xl'>Consultancy your Health</h1>
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



          {/* FAQ */}

          <div className='mt-24'>
          <div>
            <button className='border-[1px] border-black px-6 py-2 rounded-full'>Faq</button>
            <h1 className='text-black font-bold mt-4 text-3xl'>Frequently Asked Question</h1>
          </div>

          <div className='mt-8'>
          <div className="collapse collapse-arrow bg-base-200 mb-3">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">What Are Your Offer Hour</div>
            <div className="collapse-content">
              <p>I am available to work Monday through Friday, and I am very flexible about the start and end times on those days</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 mb-3">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">How Can I Schedule An Appoinment</div>
            <div className="collapse-content">
              <p>Introduce yourself. The first thing to do in a conversation is to introduce yourself . ...
              Explain why you're contacting them. Once you introduce yourself, the next step is to explain why you're contacting them</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 mb-3">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Do You Accept Insurence?</div>
            <div className="collapse-content">
              <p>Scheduled Personal Property Endorsement: This endorsement is sometimes called a "personal article floater.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 mb-3">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">What Should I bring to My Appointment?</div>
            <div className="collapse-content">
              <p>Some doctors suggest you put all your prescription drugs, over-the-counter medicines, vitamins, and herbal remedies or supplements in a bag and bring them with you. Others recommend you bring a list of everything you take and the dose.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 mb-3">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Do You Offer Telemedecine Appoinments?</div>
            <div className="collapse-content">
              <p>Some clinics can provide virtual appointments with a doctor through online video conferencing. When an in-person visit is not required or necessary.</p>
            </div>
          </div>
          </div>
          </div>


            {/* Appointment */}

            <div className='mt-14 relative'>
              <div className=''>
                <img className='rounded-2xl' src="https://i.postimg.cc/SKFgXd01/Rectangle-32.png" alt="" />
              </div>
              <div className='absolute flex items-center w-full h-full top-0 left-0 bg-gradient-to-r from-[#0B094A] to-[rgba(80, 54, 78, 0.)] rounded-2xl'>
              <div className='pl-10'>
              <h1 className='text-3xl text-white font-semibold'>Get Your <br /> First Appoinmtent <br />at 50% off!</h1>
              <div className='flex gap-6 mt-6 '>
                <button className='bg-yellow-500 px-8 py-2 font-bold text-white rounded-xl'>Appoinments</button>
                <button className='border-[1px] border-white px-8 py-2 font-bold text-white rounded-xl'>Learn More</button>
              </div>
              </div>
              </div>
              <div className='absolute top-16 right-12'>
                <img className='' src="https://i.postimg.cc/fLM5CbRx/logo-light.png" alt="" />
              </div>
            </div>

      </div>
    </div>
  )
}

export default Home