import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Resume from "../pages/Resume/Resume";
import Work from "../pages/Work/Work";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/resume",
                element:<Resume/>
            },
            {
                path:"/work",
                element:<Work/>
            },
            {
                path:"/blog",
                element:<Blog/>
            },
            {
                path:"contact", 
                element:<Contact/>
            }
        ]
    }
])