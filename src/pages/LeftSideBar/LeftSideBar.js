import React from 'react'
import { Link } from 'react-router-dom'
import '../DefaultCss/default.css'
import shahed from '../../assest/shahed.png'
import { BiUser, BiCategory, BiDoorOpen, BiPhoneCall } from 'react-icons/bi'
import {
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
  BsGithub,
} from 'react-icons/bs'

const LeftSideBar = () => {
  return (
    <div className="text-center container mx-auto pt-5">
      {/* === My image=== */}
      <div>
        <div className="avatar">
          <div className="w-52 rounded-full">
            <img src={shahed} alt="shahed" />
          </div>
        </div>
        <h2 className="text-xl font-bold pb-3">
          <Link to="/">Shahed Mridha</Link>
        </h2>
        <p className="bg-[#092034] inline-block py-1 px-4 rounded-lg">
          MERN DEVELOPER
        </p>
      </div>

      {/* ====Menu==== */}
      <div className="flex justify-center">
        <ul className="py-16 ">
          <li className="mb-5 menu-btn custom-btn flex items-center">
            <span className="w-8 text-lg rounded-full shadow-md shadow-gray-700 flex justify-center py-2 ">
              <BiUser />
            </span>
            <Link className="ml-5 text-lg font-normal" to="/about">
              About
            </Link>
          </li>

          <li className="mb-5 menu-btn custom-btn flex items-center">
            <span className="w-8 text-lg rounded-full shadow-md shadow-gray-700 flex justify-center py-2 ">
              <BiCategory />
            </span>{' '}
            <Link className="ml-5 text-lg font-normal" to="/work">
              Portfolio
            </Link>
          </li>

          <li className="mb-5 menu-btn custom-btn flex items-center ">
            <span className="w-8 text-lg rounded-full shadow-md shadow-gray-700 flex justify-center py-2 ">
              <BiDoorOpen />
            </span>{' '}
            <Link className="ml-5 text-lg font-normal" to="/blog">
              Blog
            </Link>
          </li>

          <li className="mb-5 menu-btn custom-btn flex items-center">
            <span className="w-8 text-lg rounded-full shadow-md shadow-gray-700 flex justify-center py-2 ">
              <BiPhoneCall />
            </span>{' '}
            <Link className="ml-5 text-lg font-normal" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex justify-center">
        <span className="px-1.5 text-lg social">
         
          <a href="https://www.facebook.com/shahed.mridha.92/">
          <BsFacebook />
          </a>
        </span>
        <span className="px-1.5 text-lg social">
          <a href="https://www.linkedin.com/in/shahed-mridha/">
          <BsLinkedin />
          </a>
        </span>
        <span className="px-1.5 text-lg social">
          <BsTwitter />
        </span>
        <span className="px-1.5 text-lg social">
          <a href="tel:+4733378901">
          <BsWhatsapp />
          </a>
        </span>
        <span className="px-1.5 text-lg social">
          <a href="https://github.com/shahedmridhaa">
          <BsGithub />
          </a>
        </span>
      </div>
      <div className="py-5">
        <a href="https://drive.google.com/file/d/1OrshSUlPJNG7bTZ07ULx7G2Cg9exUtg6/view?usp=share_link">
          <p className="bg-[#092034] inline-block py-1 px-4   rounded-lg">
            My Resume
          </p>
        </a>
      </div>
    </div>
  )
}

export default LeftSideBar
