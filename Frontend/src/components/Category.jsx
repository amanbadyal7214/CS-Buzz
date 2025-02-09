import React from 'react'

const Category = () => {
  return (
    <>
    
    <div className='relative '>
    <img src="./public/image/np.png" alt="" width="70px absolute top-0 left-0"  />
        <img src="./public/image/career.png" alt="" className='w-2/5  m-5' />
        <div className="card bg-base-100 w-3/5 h-72 absolute  overflow-hidden text-ellipsis top-48 left-2/6 shadow-xl">
  <div className="card-body">
  <button className="btn outline-none bg-[#FBC108] font-bold text-[#072F53] w-1/4 mb-4">Top Categories</button>
    <h2 className="card-title">Career Development</h2>
    <p>Not all changes in an organisation are welcome and even the best ones are not always easy. This is why many employers put a high value on excutives able to lead well under pressure.</p>
   
    <div className="card-actions ">
      <button className="btn bg-[#FBC108]  font-bold text-[#072F53] rounded-full ">Buy Now</button>
     
    </div>
    
  </div>
</div>
    </div>
    </>
  )
}

export default Category