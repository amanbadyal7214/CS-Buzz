import React from 'react'

const Offer = () => {
  return (
    <>
    <div className='flex flex-wrap justify-around py-10 bg-cover'
     style={{
        backgroundImage: "url(./public/image/Background.png)",
      }}>
        <div className='flex'>
            <img src=".\public\image\User.png" alt="" width="50px" />
            <p className='px-2 text-white font-bold'>Registered User <br /><span className='text-[#FBC108]'>1000+</span></p>
        </div>
        <div className='flex'>
            <img src=".\public\image\build.png" alt="" width="50px" />
            <p className='px-2 text-white font-bold'>Towns And Cities<br /><span className='text-[#FBC108]'>600+</span></p>
        </div>
        <div className='flex'>
            <img src=".\public\image\test.png" alt="" width="50px"/>
            <p className='px-2 text-white font-bold'>Question and test papers<br /><span className='text-[#FBC108]'>30,000+</span></p>
        </div>
    </div>
    </>
  )
}

export default Offer