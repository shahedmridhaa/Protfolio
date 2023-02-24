import React from 'react'
import "../DefaultCss/default.css"
import html from "../../assest/html.png"
import css from "../../assest/css-3.png"
import javaScript from "../../assest/js.png"
import TypeScript from "../../assest/typescript.png"
import firebase from "../../assest/database.png"
import github from "../../assest/githubm.png"
import vercel from "../../assest/vercel.png"
import netlify from "../../assest/netlify.png"
import vsCode from "../../assest/visual-studio.png"
import devtool from "../../assest/devtool.png"
import notion from "../../assest/notion1.png"
import google from "../../assest/google drive.png"
import mx from "../../assest/mx excel.png"
import chrome from "../../assest/chrome.png"
import edge from "../../assest/microsoft.png"
import firefox from "../../assest/firefox.png"
import bootstrap from "../../assest/firefox.png"
import tailwind from "../../assest/tailwind css.png"
import react from "../../assest/reactjs.png"
import redux from "../../assest/redux.png"
import next  from "../../assest/nextjs.png"
import node from "../../assest/node-js.png"
import express from "../../assest/express.png"
import responsive from "../../assest/responsive.png"
import npm from "../../assest/npm.png"
import json from "../../assest/json.png"
import router from "../../assest/react-router.png"
import tenstack from "../../assest/tenstack.png"
import jwt from "../../assest/jwt.png"
import mongodb from "../../assest/mongodb.png"
import windows from "../../assest/windows.png"








const MySkill = () => {
  return (
    <div>
      <div>
      <h2 className="inline bg-gradient-to-r from-indigo-200 via-sky-300 to-indigo-200 bg-clip-text text-3xl tracking-tight text-transparent font-bold ">
        My Skill
      </h2>
      </div>

      <div className="mt-10  skill rounded-lg shadow-slate-700 p-10">
        <div className="grid grid-cols-2 ">
          <div>
            <h4 className="text-xl font-semibold text-white py-2">Language</h4>
            <ul >
              <li className='py-1'><img className='w-5 inline' src={html} alt="" /><span className='pl-4'>Html</span></li>
              <li className='py-1'><img className='w-5 inline' src={css} alt="" /><span className='pl-4'>Css</span></li>
              <li className='py-1'><img className='w-5 inline' src={javaScript} alt="" /><span className='pl-4'>JavaScript</span></li>
              <li className='py-1'><img className='w-5 inline' src={TypeScript} alt="" /><span className='pl-4'>TypeScript</span></li>
            </ul>

            <h4 className="text-xl font-semibold text-white py-2 mt-4">Tools</h4>
            <ul>
              <li className='py-1'><img className='w-5 inline' src={github} alt="" /><span className='pl-4'>Github</span></li>
              <li className='py-1'><img className='w-5 inline' src={firebase} alt="" /><span className='pl-4'>Firebase</span></li>
              <li className='py-1'><img className='w-5 inline' src={netlify} alt="" /><span className='pl-4'>Netlify</span></li>
              <li className='py-1'><img className='w-5 inline' src={vercel} alt="" /><span className='pl-4'>Vercel</span></li>
              <li className='py-1'><img className='w-5 inline' src={vsCode} alt="" /><span className='pl-4'>Vs code</span></li>
              <li className='py-1'><img className='w-5 inline' src={devtool} alt="" /><span className='pl-4'>Dev Tool</span></li>
              <li className='py-1'><img className='w-5 inline' src={notion} alt="" /><span className='pl-4'>Notion</span></li>
              <li className='py-1'><img className='w-5 inline' src={google} alt="" /><span className='pl-4'>Google drive</span></li>
              <li className='py-1'><img className='w-5 inline' src={mx} alt="" /><span className='pl-4'>Mx Excel</span></li>
            </ul>

            <h4 className="text-xl font-semibold text-white py-2 mt-4">Browser</h4>
            <ul>
              <li className='py-1'><img className='w-5 inline' src={chrome} alt="" /><span className='pl-4'>Chrome</span></li>
              <li className='py-1'><img className='w-5 inline' src={edge} alt="" /><span className='pl-4'>Edge</span></li>
              <li className='py-1'><img className='w-5 inline' src={firefox} alt="" /><span className='pl-4'>Firefox</span></li>
            </ul>


          </div>
          <div>
            <h4 className="text-xl font-semibold text-white py-2"> Frameworks Library's</h4>
            <ul >
              <li className='py-1'><img className='w-5 inline' src={bootstrap} alt="" /><span className='pl-4'>Bootstrap</span></li>
              <li className='py-1'><img className='w-5 inline' src={tailwind} alt="" /><span className='pl-4'>Tailwind css</span></li>
              <li className='py-1'><img className='w-5 inline' src={react} alt="" /><span className='pl-4'>React js</span></li>
              <li className='py-1'><img className='w-5 inline' src={redux} alt="" /><span className='pl-4'>Redux</span></li>
              <li className='py-1'><img className='w-5 inline' src={next} alt="" /><span className='pl-4'>Next JS</span></li>
              <li className='py-1'><img className='w-5 inline' src={node} alt="" /><span className='pl-4'>Node Js</span></li>
              <li className='py-1'><img className='w-5 inline' src={express} alt="" /><span className='pl-4'>Express js</span></li>
            </ul>

            <h4 className="text-xl font-semibold text-white py-2 mt-4"> Frameworks Library's</h4>
            <ul >
              <li className='py-1'><img className='w-5 inline' src={responsive} alt="" /><span className='pl-4'>Responsice Layout</span></li>
              <li className='py-1'><img className='w-5 inline' src={npm} alt="" /><span className='pl-4'>NPM</span></li>
              <li className='py-1'><img className='w-5 inline' src={json} alt="" /><span className='pl-4'>Json, rest api</span></li>
              <li className='py-1'><img className='w-5 inline' src={router} alt="" /><span className='pl-4'>React router dom</span></li>
              <li className='py-1'><img className='w-5 inline' src={tenstack} alt="" /><span className='pl-4'>TenStack Query</span></li>
              <li className='py-1'><img className='w-5 inline' src={jwt} alt="" /><span className='pl-4'>Jwt</span></li>
            </ul>

            <h4 className="text-xl font-semibold text-white py-2 mt-4"> Frameworks Library's</h4>
            <ul >
              <li className='py-1'><img className='w-5 inline' src={responsive} alt="" /><span className='pl-4'>Mongodb</span></li>
              <li className='py-1'><img className='w-5 inline' src={mongodb} alt="" /><span className='pl-4'>Mongoose</span></li>
            </ul>

            <h4 className="text-xl font-semibold text-white py-2 mt-4"> Operation System</h4>
            <ul >
              <li className='py-1'><img className='w-5 inline' src={windows} alt="" /><span className='pl-4'>Windows</span></li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  )
}

export default MySkill
