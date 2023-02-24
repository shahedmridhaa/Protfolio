import React from 'react';
import "../DefaultCss/default.css"

const AboutCard = () => {
    return (
        <div className=''>
               <div className='pb-14'>
              <h2 className='inline bg-gradient-to-r from-indigo-200 via-sky-300 to-indigo-200 bg-clip-text text-3xl tracking-tight text-transparent font-bold'>What I am Doing</h2>
            {/*card  */}
            <div className='grid gird-cols-1 lg:grid-cols-2 gap-10 pt-8'>
                <div className='flex shadow-lg shadow-black border border-gray-800 rounded-xl  py-7 px-5 aboutCard'>
                <div>
                    <img src="https://placeimg.com/192/192/people"  alt="" />
                </div>
                <div className='pl-5'>
                    <h3 className='text-xl font-semibold pb-3'>Full Stack Web Development</h3>
                    <p className='text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga ut in nesciunt repellendus odio vero dolor nostrum fugit cumque provident unde error cupiditate ad soluta,</p>
                </div>
                </div>
                <div className=' flex shadow-lg shadow-black border border-gray-800 rounded-xl  py-7 px-5 aboutCard'>
                <div>
                    <img src="https://placeimg.com/192/192/people"  alt="" />
                </div>
                <div className='pl-5'>
                    <h3 className='text-xl font-semibold pb-3'>Wordpress Customaization</h3>
                    <p className='text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga ut in nesciunt repellendus odio vero dolor nostrum fugit cumque provident unde error cupiditate ad soluta,</p>
                </div>
                </div>
                <div className='flex shadow-lg shadow-black border border-gray-800 rounded-xl  py-7 px-5 aboutCard '>
                <div>
                    <img src="https://placeimg.com/192/192/people"  alt="" />
                </div>
                <div className='pl-5'>
                    <h3 className='text-xl font-semibold pb-3'>Hobbies</h3>
                    <p className='text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga ut in nesciunt repellendus odio vero dolor nostrum fugit cumque provident unde error cupiditate ad soluta,</p>
                </div>
                </div>
                <div className='flex shadow-lg shadow-black border border-gray-800 rounded-xl py-7 px-5 aboutCard'>
                <div>
                    <img src="https://placeimg.com/192/192/people"  alt="" />
                </div>
                <div className='pl-5'>
                    <h3 className='text-xl font-semibold pb-3'>other Work</h3>
                    <p className='text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga ut in nesciunt repellendus odio vero dolor nostrum fugit cumque provident unde error cupiditate ad soluta,</p>
                </div>
                </div>
                </div>
              
            </div>
        </div>
    );
};

export default AboutCard;