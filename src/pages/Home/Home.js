import React from 'react';
import bannervideo from "../../assest/bannervideo.mp4"
import "../DefaultCss/default.css"

const Home = () => {
    return (
        <div className='banner' >
        <video autoPlay loop muted>
            <source src={bannervideo} type="video/mp4"/>
        </video>
      <div className='flex justify-center items-center content '>
     <h1 className='banner-text  font-extrabold text-transparent text-3xl md:text-5xl xl:text-7xl text-[#c7d0e9]'>Let's Start Journy_ <br/>With Shahed</h1>
      </div>
    </div>
    );
};

export default Home;