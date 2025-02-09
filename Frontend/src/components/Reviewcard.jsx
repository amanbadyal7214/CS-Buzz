import React from 'react'

const Reviewcard = (props) => {
  return (
    <>
    <div className='p-10'>
   <div className='relative '>
    <img src="./public/image/b2.png" alt="" className=' ml-14 w-82' />
    
     <div className=" w-82 absolute top-0 left-10 h-full">
      <div className='relative'>
      <img src="./public/image/b3.png"  alt="" />
      <div className='absolute top-0 left-6'>
  <figure className="">
    <img
      src={props.img}
      alt="Shoes" width="60px"
      className="rounded-full -mt-4 ml-30" />
  </figure>
  <div className=" text-center ">
    <h2 className='font-bold'>{props.name}</h2>
    <h2>{props.title}</h2>
    <p  className='p-2'>{props.subtitle}</p>
  </div>
  </div>
  </div>
</div>
</div>
</div>
    </>
  )
}

export default Reviewcard