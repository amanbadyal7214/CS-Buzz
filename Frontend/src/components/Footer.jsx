import React from 'react'
import Footer2 from './Footer2'

const Footer = () => {
  return (
    <>
    <div className='flex py-2 justify-between'
    style={{
        backgroundImage: "url(./public/image/Background.png)",  
    }}>
        <h2 className='font-bold px-5 text-white'>Add valuable Feedback</h2>
        <button className=" px-2 bg-[#FBC108]  font-bold text-[#072F53] rounded-full ">Add Feedback</button>
    </div>
    <Footer2/>
    </>
  )
}

export default Footer