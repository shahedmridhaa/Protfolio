import React, { useState } from 'react'
import data from './db.json'
import PortfolioCard from './PortfolioCard'

const Work = () => {
  const [project, setProject] = useState(data)

  const filterItem = (category) => {
    const updateItems = data.filter((currentItem) => {
      return currentItem.category === category
    })
    setProject(updateItems)
  }
  console.log(project);

  return (
    <div className="p-4">
      <h1 className="inline bg-gradient-to-r from-indigo-200 via-sky-300 to-indigo-200 bg-clip-text text-3xl tracking-tight text-transparent font-bold">
        Portfolio
      </h1>

      <div className="flex flex-wrap pt-10">
        <h1
          onClick={() => setProject(data)}
          className="pr-10 py-3 text-md hover:text-gray-400 duration-300 cursor-pointer"
        >
          All
        </h1>

        <h1
          onClick={() => filterItem('application')}
          className="pr-10 py-3 text-md hover:text-gray-400 duration-300 cursor-pointer"
        >
          Applications
        </h1>

        <h1
          onClick={() => filterItem('short_Project')}
          className="pr-10 py-3 text-md hover:text-gray-400 duration-300 cursor-pointer"
        >
          Small Project
        </h1>

        <h1
          onClick={() => filterItem('template')}
          className="pr-10 py-3 text-md hover:text-gray-400 duration-300 cursor-pointer"
        >
          Template
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {project.map((projectList) => (
          <PortfolioCard key={projectList.id} projectList={projectList} />
        ))}
      </div>
    </div>
  )
}

export default Work
