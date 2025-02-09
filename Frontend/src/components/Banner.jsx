import React from 'react'

const Banner = () => {
  return (
    <>
   <div className="hero  min-h-screen"
   style={{
    backgroundImage: "url(./public/image/Background.png)",
  }}>

  <div className="hero-content flex-col lg:flex-row">
    
    <img
      src=".\public\image\Banner.png"
      className="w-1/2 relative top-3" />
     
    <div className='text-white'>
    <button className="btn outline-none bg-[#FBC108]">EXPERT INSTRUCTION</button>
      <h1 className="text-5xl font-bold">Build Skills With Experts Time,Anywhere</h1>
      <p className=" text-xl pt-6">
        We invest in personel, technological innovations and infrastructure and have established regional and international offices.
      </p>
     
      
    </div>
    </div>
  </div>

    </>
  )
}

export default Banner