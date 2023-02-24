import React from 'react'
import { Link } from 'react-router-dom'
import { BiUser, BiCategory, BiDoorOpen, BiPhoneCall} from 'react-icons/bi'
const Header = () => {
  const menuItem = (
    <>
      <li className="mb-3 menu-btn custom-btn">
        <Link to="/">Home</Link>
      </li>
      <li className="mb-3 menu-btn custom-btn">
        <Link to="/about">About</Link>
      </li>
      <li className="mb-3 menu-btn custom-btn">
        <Link to="/resume">Resume</Link>
      </li>

      <li className="mb-3 menu-btn custom-btn">
        <Link to="/work">Work</Link>
      </li>

      <li className="mb-3 menu-btn custom-btn">
        <Link to="/blog">Blog</Link>
      </li>

      <li className="mb-3 menu-btn custom-btn">
        <Link to="/contact">Contact</Link>
      </li>
    </>
  )

  return (
    <div className=" bg-black fixed ">
      <div className="md:hidden">
        {/* <div className="navbar-start"> */}
        {/* <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItem}
      </ul>
    </div> */}
        {/* <div className="navbar-center ">
    <ul className="menu menu-horizontal px-1">
      {menuItem}
    </ul>
  </div>  */}

        <div className="btm-nav">
          <Link to="/about">
            <span className="text-xl">
              <BiUser />
            </span>
            <span className="btm-nav-label">About</span>
          </Link>

          <Link to="/work">
            <span className="text-xl">
              <BiCategory />
            </span>
            <span className="btm-nav-label">Portfolio</span>
          </Link>

          <Link to="/blog">
            <span className="text-xl">
              <BiDoorOpen />
            </span>
            <span className="btm-nav-label">Blog</span>
          </Link>

          <Link to="/contact">
            <span className="text-xl">
              <BiPhoneCall />
            </span>
            <span className="btm-nav-label">Contact</span>
          </Link>
        </div>
      </div>

      {/* <div className="navbar-end">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {menuItem}
    </ul>
  </div> 
  </div> */}
      {/* </div> */}
    </div>
  )
}

export default Header
