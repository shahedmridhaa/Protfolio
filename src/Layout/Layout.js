import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Header/Header';
import LeftSideBar from '../pages/LeftSideBar/LeftSideBar';
import "../pages/DefaultCss/default.css"

const Layout = () => {
     return (
       <div className='container mx-auto '>
           <Header/>
         <div className='md:mt-[9%] lg:mt-[5%] '>
         <div className='grid grid-cols-4'>

        <div data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" data-aos-duration="500" className='hidden md:flex bg-[#080c17]  shadow-lg Leftsidebar rounded-xl '><LeftSideBar/>
        </div>

            <div data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" data-aos-duration="500" className='col-span-full hidden md:flex md:col-span-3 mx-5 bg-[#080c17] shadow-xl RightSideBar rounded-xl'><Outlet/>
        </div>

            <div className='col-span-full md:hidden md:col-span-3 mx-5  shadow-xl bg-[#080c17] MobileRightSideBar rounded-xl'><Outlet/></div>
          </div>
         </div>
       </div>

    );
};

export default Layout;