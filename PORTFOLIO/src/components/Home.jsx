import React from 'react'
import pic from "../../public/prg.jpg"

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";


import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
        <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 '> 
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                  <span className='text-xl'>Welcome In My Feed</span>
                  <div className='flex space-x-1 text-2xl md:text-4xl'>
                      <h1>Hello, I'm a</h1>
                      {/*<span className='text-red-600 font-bold'>Developer</span>*/}
                      <ReactTyped
                          className="text-red-700 font-bold"
                          strings={["Developer", "Programmer", "Coder"]}
                          typeSpeed={40}
                          backSpeed={50}
                          loop={true}
                        />
                  </div>
                  <br/>
                  <br/>
                  <p className='text-sm md:text-m text-justify'>
                    Hello, I'm Pragati Gurjar, a full stack developer.
                     I build  web applications from start to finish. I design, code,
                     and launch projects with care. I'm skilled in Html,CSS,ReactJS,
                     SpriNG and Spring Boot. I turn ideas into working websites 
                     and apps. I'm passionate about building digital solutions.
                  </p>
                  <br/>
                  <br/>
                  {/*social media icons */}
                  <div className='flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 '>
                     <div className='space-y-2'>
                      <h1 className='font-bold'>Available on</h1>
                      <ul className='flex space-x-5'>
                        <li>
                            <a href="https://www.facebook.com/" target="_blank">
                              <FaSquareFacebook className="text-2xl cursor-pointer" />
                            </a>
                            
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/" target="_blank">
                              <FaLinkedin className="text-2xl cursor-pointer" />
                            </a> 
                            
                        </li>
                        <li>
                            <a href="https://www.Instagram.com/" target="_blank">
                               <IoLogoInstagram className="text-2xl cursor-pointer" /> 
                            </a> 
                            
                        </li>
                        <li>
                            <a href="https://t.me/" target="_blank">
                               <FaTelegram className="text-2xl cursor-pointer" />
                            </a> 
                            
                        </li>
                      </ul>
                     </div>
                     <div className='space-y-2'>
                          <h1 className='font-bold'>Currently working on</h1>
                          <div className='flex space-x-5'>
                              <SiMongodb  className='text-xl ms:text-3xl hover:scale-110 duration-200 rounded-full border=[2px]'/>
                              <SiExpress className='text-xl ms:text-3xl hover:scale-110 duration-200 rounded-full border=[2px]' />
                              <FaReact className='text-xl ms:text-3xl hover:scale-110 duration-200 rounded-full border=[2px]'/>
                              <FaNodeJs className='text-xl ms:text-3xl hover:scale-110 duration-200 rounded-full border=[2px]'/>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
                     <img src={pic}  className=" rounded-full w-[450px] h-[450px] " alt=""/>
                </div>
            </div>
        </div>
        <hr/>
    </>
    
  );
}

export default Home