import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../navbar/Navbar'

const RootLayout = () => {
  return (
    <div>
        <div className='w-[1100px] mx-auto py-10'>
            <Navbar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default RootLayout