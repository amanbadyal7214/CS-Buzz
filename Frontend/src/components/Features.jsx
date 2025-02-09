import React from 'react'

const Features = () => {
  return (
    <>
    <div className='text-center pb-4'>
    <div className='text-2xl mt-12 p-4 font-bold text-center'><h2>Features</h2></div>
    <p>We invest in personnel, technological innovations and infrastructure and have established regional and international offices. </p>
    </div>
    <div className='flex flex-wrap'>
        <div className='w-1/2 ml-2 mt-2'>
        <div className="collapse shadow-5xl bg-[#efeae5]">
  <input type="radio" name="my-accordion-1" defaultChecked />
  <div className="collapse-title text-xl font-medium flex "><img src="./public/image/S.png" width="25px" alt="" />Study Material</div>
  <div className="collapse-content">
    <p>Get ready to learn with our easy-to-understand study materials. We have everything you need for Olympiads,CBSE,ICSE,UGC NET, and more. Our Materials will help help you understand important ideas and improve your skills.</p>
  </div>
</div>
<div className="collapse shadow-5xl">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium flex"><img src="./public/image/S.png" width="25px" alt="" />Question Bank</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse shadow-5xl ">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium flex"><img src="./public/image/S.png" width="25px" alt="" />Test Series</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse shadow-5xl ">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium flex"><img src="./public/image/S.png" width="25px" alt="" />Previous Solved Paper</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse shadow-5xl ">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium flex"><img src="./public/image/S.png" width="25px" alt="" />Leaderboard</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>

        </div>
    
<div className='mx-12 mt-2'>
    <img src="./public/image/study.png" alt="" width="500px"  />
</div>
</div>
    </>
  )
}

export default Features