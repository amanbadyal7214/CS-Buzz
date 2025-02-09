import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='relative p-16 bg-cover'
    style={{
        backgroundImage: "url(./public/image/dot.png)",
      }}>
    <button className="btn outline-none bg-[#FBC108] font-bold text-[#072F53] mb-4">Who we are</button>
    <h1 className='text-2xl font-bold text-[#072F53] mb-8 '>India's Largest Online Preparation Platform for Olympiad Exams</h1>
    <p className='text-xl my-5'>Our preparation platform help in Olympiad exam excellence through comprehensive practice and mock test papers. It consists of more than 3,00,000 questions, provides extensive practice to students to handle difficult and tricky questions that come in various Olympiads. Moreover, you receive continuous feedback of your child's performance. It's an initiative by graduates from Indian Institute of Technology (IITs) and universities in US to create personalised and in-depth online learning experience.</p>
    <button className='btn bg-[#072F53]  text-white rounded-full '>Read More</button>
    
    <img src="./public/image/star.png" alt="" width="50px" className='absolute top-0 left-0' />
    <img src="./public/image/ps.png" alt="" width="80px" className='absolute bottom-0 right-0' />
    </div>
    </>
  )
}

export default Hero