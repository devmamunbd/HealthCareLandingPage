import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../navbar/Navbar'
import Footer from '../Footer/Footer'

const RootLayout = () => {
  return (
    <div>
        <div className='w-[1100px] mx-auto py-10'>
            <Navbar/>
            <Outlet/>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default RootLayout