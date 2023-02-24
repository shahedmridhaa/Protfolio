import React from 'react';
import "../DefaultCss/default.css"

const Aboutme = () => {
    return (
        <div className='about'>
              <div className='pb-14'>
            <h2 className='inline bg-gradient-to-r from-indigo-200 via-sky-300 to-indigo-200 bg-clip-text text-3xl tracking-tight text-transparent font-bold'>About Me</h2>
        
            <p className='text-lg pt-8'>I am a full stack developer, and currently I am working with the MERN stack. I develop professional-level web applications using this stack. I use the MERN stack because it is currently one of the best full stacks available. I developed several projects using them. I have an interest in learning Redux, Next JS, and other frameworks like Angular and Vue. I am on my way, and one day I see myself there. <br />
                I built also a couple of personal projects, available on my GitHub  profile, and probably the list will grow in the future. I Love   connecting with new people.
                </p>
              </div>
        </div>
    );
};

export default Aboutme;