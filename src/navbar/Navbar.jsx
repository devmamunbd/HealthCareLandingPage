import { Link } from "react-router-dom"
import { MdArrowOutward } from "react-icons/md";


const Navbar = () => {

    const navlinks = <>
         <li><Link to="/" >Home</Link> </li>
         <li><Link to="/service">Service</Link> </li>
         <li><Link to="/blog">Blog</Link> </li>
         <li><Link to="/about">About Us</Link> </li>
    </>


  return (
    <div>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {navlinks}
       
      </ul>
    </div>
    <img className="w-20" src="/public/logo dark.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navlinks}
     
    </ul>
  </div>
  <div className="navbar-end">
    <a className=" border-[1px] cursor-pointer border-r-slate-400 px-8 py-2 
    rounded-lg text-sky-700 font-semibold">Appointment 
    {/* <span><MdArrowOutward /></span> */}
</a>

  </div>
</div>
    </div>
  )
}

export default Navbar