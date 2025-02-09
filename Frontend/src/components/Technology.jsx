import React from 'react'

const Technology = () => {
  return (
    <>
    <div className='bg-[#F1F1F1] flex'>
        <h1 className='p-3 text-2xl font-bold '>Trending Technology</h1>
        <div className="carousel carousel-center bg-[#F1F1F1] rounded-box  space-x-10 p-4">
    <div className="carousel-item  rounded-xs bg-white  ">
    <img
      src=".\public\image\Html.png"
      className=" w-1/4 p-2 " />
      <p className='p-3'>HTML</p>
  </div>
  <div className="carousel-item rounded-xs bg-white  ">
    <img
      src=".\public\image\Css.png"
      className=" w-1/4 p-2" />
      <p className='p-3'>CSS</p>
  </div>
  <div className="carousel-item rounded-xs bg-white  ">
    <img
      src=".\public\image\js.png"
      className=" w-1/4 p-2" />
      <p className='p-3'>Javascript</p>
  </div>
  <div className="carousel-item rounded-xs bg-white  ">
    <img
      src=".\public\image\py.png"
      className=" w-1/4 p-2 " />
      <p className='p-3'>Python</p>
  </div>
  <div className="carousel-item rounded-xs bg-white  ">
    <img
      src=".\public\image\React.png"
      className=" w-1/4 p-2" />
      <p className='p-3'>React</p>
  </div>
</div>
    </div>
    </>
  )
}

export default Technology