import React from 'react'
import list from "../../public/list.json"
import Reviewcard from './Reviewcard'
const Review = () => {
  const review=list.filter((data)=> data.category==="Review")
  return (
   <>
    <h1 className='text-xl mt-12  text-center font-bold text-[#072F53] mb-8 '>What Our Student Say</h1>
    <div className="carousel carousel-center bg-[url(./public/image/dot.png)] rounded-box  space-x-4 p-4">
  <div className="carousel-item">
    {review.map(function(elem,idx){
      return<Reviewcard key={idx} img={elem.image} name={elem.name} title={elem.title} subtitle={elem.subtitle}/>
    })}

  </div>
  
</div>
   </>
  )
}

export default Review