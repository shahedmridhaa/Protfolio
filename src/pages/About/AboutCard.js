import React from 'react'
import '../DefaultCss/default.css'

const AboutCard = () => {
  return (
    <div className="">
      <div className="pb-14">
        <h2 className="inline bg-gradient-to-r from-indigo-200 via-sky-300 to-indigo-200 bg-clip-text text-3xl tracking-tight text-transparent font-bold">
          What I am Doing
        </h2>
        {/*card  */}
        <div className="grid gird-cols-1 lg:grid-cols-2 gap-10 pt-8">
          <div className="flex shadow-lg shadow-black border border-gray-800 rounded-xl  py-7 px-5 aboutCard">
            <div>
              <img
                className="w-28"
                src="https://i.ibb.co/h8pRD8H/web-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="pl-5">
              <h3 className="text-xl font-semibold pb-3">
                Full Stack Web Development
              </h3>
              <p className="text-md">
                I am a professional web designer who creates visually appealing
                and functional websites using a variety of design tools and
                technologies.
              </p>
            </div>
          </div>
          <div className=" flex shadow-lg shadow-black border border-gray-800 rounded-xl  py-7 px-5 aboutCard">
            <div>
              <img
                className="w-28"
                src="https://i.ibb.co/Gvw95tr/wordpress.png"
                alt=""
              />
            </div>
            <div className="pl-5">
              <h3 className="text-xl font-semibold pb-3">
                Wordpress Customaization
              </h3>
              <p className="text-md">
                I am a WordPress customizer who specializes in modifying and
                customizing WordPress Website and create unique and tailored
                websites for clients.
              </p>
            </div>
          </div>
          <div className="flex shadow-lg shadow-black border border-gray-800 rounded-xl  py-7 px-5 aboutCard ">
            <div>
              <img
                className="w-28"
                src="https://i.ibb.co/PWW7NJZ/images-removebg-preview-1.png"
                alt=""
              />
            </div>
            <div className="pl-5">
              <h3 className="text-xl font-semibold pb-3">My Hobbies</h3>
              <p className="text-md">
                My hobbies include coding and traveling, combining my passion
                for technology and exploration to create new experiences and
                discoveries.
              </p>
            </div>
          </div>
          <div className="flex shadow-lg shadow-black border border-gray-800 rounded-xl py-7 px-5 aboutCard">
            <div>
              <img
                className="w-16"
                src="https://i.ibb.co/yQBZ5mK/1000-F-216424176-u-Tat-NRtlhch-KTLf-DZkavlbi4i1i-Gf-FBP-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="pl-5">
              <h3 className="text-xl font-semibold pb-3">Study</h3>
              <p className="text-md">
                {' '}
                Now I'm study at Chandpur collage in BSC (2nd Semester)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCard
