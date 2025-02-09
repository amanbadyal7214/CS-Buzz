import React from 'react'

const Work = () => {
  return (
    <>
    <div className='relative'>
      <img src="./public/image/sch.png" width="70px" alt=""  className='absolute top-0 right-0'/>
    <div className='pt-12'>
    <h1 className='p-3 text-2xl font-bold '>How It Works</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab autem iste, itaque dolor laudantium repellendus minima exercitationem odit quaerat temporibus aliquam accusamus commodi dolorem? Doloribus beatae explicabo similique voluptas laudantium?</p>
    </div>
 <div className='mt-12 bg-transparent overflow-scroll '>
<ul className="timeline timeline-snap-icon pl-5 max-md:timeline-compact max-md:timeline-vertical">
<li>
    <div className="timeline-middle">
    <button className=' border-[#FBC108] border-4 rounded-full overflow-hidden px-2'>1</button>
    </div>

    <div className="timeline-start  w-96 mb-10">
      <div className="text-lg font-black">Sign Up:</div>
      Create your account in just a few clicks. Register with CS  BUZZ to start your journey into the world of computer science. Just enter your details and you’re ready to go
    </div>
  
    <hr  className='bg-[#072F53]'/>
  </li>
  <li>
  <hr  className='bg-[#072F53]'/>
    <div className="timeline-middle">
    <button className=' border-[#FBC108] border-4 rounded-full overflow-hidden px-2'>2</button>
    </div>
    <div className="timeline-end  w-96 md:mb-10">
      <div className="text-lg font-black">Choose Your Course:</div>
      Browse through our extensive catalog of computer science courses. Whether you’re interested in learning the basics of programming, data science , or diving deep into artificial intelligence, we have something for every level of expertise.
    </div>
    <hr  className='bg-[#072F53]'/>
  </li>
  <li>
  <hr  className='bg-[#072F53]'/>
    <div className="timeline-middle">
    <button className=' border-[#FBC108] border-4 rounded-full overflow-hidden px-2'>3</button>
    </div>

    <div className="timeline-start  w-96 mb-10 ">
      <div className="text-lg font-black">Personalize Your Learning Experience:</div>
      Set your learning goals and preferences. Our adaptive learning system will suggest the most effective path for you, adjusting to your pace and style. You can also choose to focus on specific topics or projects that interest you the most.
    </div>
  
    <hr  className='bg-[#072F53]'/>
  </li>
  <li>
  <hr  className='bg-[#072F53]'/>
    <div className="timeline-middle">
    <button className=' border-[#FBC108] border-4 rounded-full overflow-hidden px-2'>4</button>
    </div>
    <div className="timeline-end  w-96 md:mb-10">
    <div className="text-lg font-black">Sign Up:</div>
      Start learning through interactive lessons that make complex concepts easy to understand. Engage with video tutorials, practical coding exercises, and quizzes that ensure you grasp and retain knowledge effectively.
    </div>
    <hr  className='bg-[#072F53]'/>
  </li>
  <li>
  <hr  className='bg-[#072F53]'/>
    <div className="timeline-middle">
    <button className=' border-[#FBC108] border-4 rounded-full overflow-hidden px-2'>5</button>
    </div>
    <div className="timeline-start  w-96 mb-10 ">
    <div className="text-lg font-black">Apply Your Skills</div>
      Put your skills to the test with hands-on projects and coding challenges. Build your software, apps, or algorithms with the guidance of our expert mentors and share your projects with peers for collaborative learning and feedback.
    </div>
    <hr  className='bg-[#072F53]'/>
  </li>
  <li>
  <hr  className='bg-[#072F53]'/>
    <div className="timeline-middle">
    <button className=' border-[#FBC108] border-4 rounded-full overflow-hidden px-2'>6</button>
    </div>
    <div className="timeline-end  w-96 md:mb-10">
    <div className="text-lg font-black">Track Your Progress</div>
    Monitor your learning progress with our built-in tracking tools. See how much you’ve achieved and what’s left to master. Adjust your learning plan at any time to focus on areas that need more attention.
    </div>
  </li>
  
</ul>
</div>
</div>
    </>
  )
}

export default Work