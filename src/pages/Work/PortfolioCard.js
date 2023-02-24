import React from 'react'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'

const PortfolioCard = ({ projectList }) => {
  const { title, image, github, liveLink, language } = projectList

  return (
    <div>
      
      <div data-aos="zoom-in" data-aos-duration="1000" className="max-w-full rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between ">
          <div className="p-4 ">
            <h3 className="text-md font-bold text-gray-800 dark:text-white">
              {title}
            </h3>
            <div className=" flex item-center flex-wrap margin-y-5 py-1">
              {language.map((technology) => (
                <span className="mr-2 my-1 bg-[#092034] px-2 rounded-md text-sm">
                  {technology}
                </span>
              ))}
            </div>
            <div className="flex justify-between py-2">
              <a href={github}>
                <span className="bg-[#092034] px-2 mr-2 flex items-center rounded-md">
                  <span className="pr-3">
                    <AiFillGithub />
                  </span>
                  <span className="text-green-800">Github</span>
                </span>
              </a>
              <a href={liveLink}>
                <span className="bg-[#092034] px-2 flex items-center rounded-md">
                  <span className="pr-3">
                    <AiOutlineLink />
                  </span>
                  <span className="text-green-800">Live </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
