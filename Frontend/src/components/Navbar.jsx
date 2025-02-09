import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
           <button className=" bg-[#FBC108] p-1 justify-center text-[#072F53] rounded-full flex ">Login <img src="https://cdn-icons-png.flaticon.com/128/1828/1828395.png" alt="" width="25px" /></button>
          <input type="text" placeholder="Search" className="input input-bordered  md:w-auto" />
        <li><a>Home</a></li>
       <li><a>Olympiad</a></li>
       <li><a>CBSE</a></li>
        <li><a>CUET</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost"><img src=".\public\image\image.png" alt="" width='100px'/></a>

  </div>
  <div className="form-control">
      
    </div>
    
  <div className="navbar-center hidden lg:flex">
  <input type="text" placeholder="Search Here" className="input input-bordered pr-96 mr-16 rounded-full md:w-auto bg-[#F1F1F1] " />
    <ul className="menu menu-horizontal rounded-full bg-[#F1F1F1] mr-24 px-8">
    
    <li><a className='font-bold'>Home</a></li>
       <li><a>Olympiad</a></li>
       <li><a>CBSE</a></li>
        <li><a>CUET</a></li>
    </ul>
    <button className=" bg-[#FBC108] p-1  text-[#072F53] rounded-full flex ">Login <img src="https://cdn-icons-png.flaticon.com/128/1828/1828395.png" alt="" width="25px" /></button>
  </div>
 
 
</div>
<div className="">
        <ul className="flex bg-[#F1F1F1] justify-around  overflow-x-scroll items-center mb-4"> 
          <li><a>Trending Now</a></li>
          <li><a>HTML</a></li>
          <li><a>CSS</a></li>
          <li><a>Java Script</a></li>
          <li><a>Python</a></li>
          <li><a>Bootstrap</a></li>
          <li><a>Java</a></li>
          <li><a>C</a></li>
          <li><a>C++</a></li>
          <li><a>React Js</a></li>
          <li><a>Node Js</a></li>
          <li>Web Development</li>
          <li>Practice Problem</li>
          <li>Test</li>
          </ul>
     </div>
    </>
  )
}

export default Navbar