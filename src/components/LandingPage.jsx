import React from 'react';
import colora from './beautifull.mp4';
import Navbar from './Navbar';
import {useState,useEffect} from 'react'
const LandingPage = () => {
  const [scroll,setScroll] =useState(false)
  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY>1){
        setScroll(true)
      }else{
        setScroll(false)
      }
    }
    window.addEventListener(scroll , handleScroll)
    return()=>{
      window.removeEventListener(scroll,handleScroll)
    }
  },[])
  return (
    <div id='first' className="landigpage w-full h-full relative">
      <div className="video">
        <video src={colora} autoPlay loop muted></video>
      </div>
      <div className="absolute top-0 w-full py-3 px-3 z-20">
        <Navbar />
      </div>
      <div className="color w-full h-screen bg-black absolute top-0 opacity-45"></div>
      <div className="content w-full h-full absolute top-0 flex justify-center items-center mt">
        <div className="text center centerContent">
          <h1 className="text-white text-center text-4xl PT-5">
            VISIT THE LAND OF A THOUSAND HILLS
          </h1>
          <div className="h1andp block ">
            <h2 className="text-white text-center text-4xl  pt-10">
              The safesty Country in Africa
            </h2>
            <br></br>
            <h3 className="text text-white text-center text-4xl honetwo">
              {' '}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
