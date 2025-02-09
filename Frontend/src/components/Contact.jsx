import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='flex relative  justify-between bg-[#F1F1F1]'>
    <img src="./public/image/pp.png" alt="" width="70px" className=" absolute top-0 right-0"  />
    <div className=' pt-10 '>
      <img src="./public/image/Contect.png"  alt="" />
    </div>
    <div className='w-full  p-13' >
    <button className="btn outline-none  bg-[#FBC108]">Get in Touch With Us?</button>
    <h1 className='text-2xl font-bold'>Call us on our number</h1>
    <div className="leading-[3]">
    <label className="form-control grid w-full ">
  <div className="label">
    <span className="label-text text-black ">Full Name</span>
  </div>
  <input type="text" placeholder="Input Your Name" className="input border-0 w-full " />
  </label>
<label className="form-control grid w-full ">
  <div className="label">
    <span className="label-text text-black">Email</span>
  </div>
  <input type="email" placeholder="Input Your Email" className="input border-0 w-full " />
  </label>
<label className="form-control grid w-full ">
  <div className="label">
    <span className="label-text text-black">Message</span>
  </div>
  <input type="text" placeholder="Write Messages..." className="input border-0 h-32 w-full " />
  </label>
  </div>
  <button className="btn bg-[#072F53] font-bold m-5 text-white rounded-full ">Enquiry</button>
    </div>
    </div>
    </>
  )
}

export default Contact