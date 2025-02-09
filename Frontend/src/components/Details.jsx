import React from 'react'
import Category from './Category'
import Work from './Work'
const Details = () => {

  return (
    <>
    <div
    style={{
      backgroundImage: "url(./public/image/b1.png)",
    }}>
    <Work/>
    <div className='flex flex-wrap mt-13 justify-between '>
     <div className="card bg-[#F1F1F1]  w-96 mb-3  opacity-70">
  <figure className="px-10 pt-2 bg-[#E44D26]">
     <img
      src="./public/image/Html.png"
      
   alt="image"
      className="h-10 opacity-100 " />
  </figure>
  <div className="card-body items-center opacity-100 text-center">
    <h2 className="card-title ">HTML</h2>
    <p>Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for its appearance </p>
  </div>
</div>
<div className="card bg-[#F1F1F1]  w-96 mb-3  opacity-70">
  <figure className="px-10 pt-2 bg-[#264DE4]">
     <img
      src="./public/image/Css.png"
      
   alt="image"
      className="h-10 opacity-100 " />
  </figure>
  <div className="card-body items-center opacity-100 text-center">
    <h2 className="card-title ">Css</h2>
    <p>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).</p>
  </div>
</div>
<div className="card bg-[#F1F1F1]  w-96 mb-3  opacity-70">
  <figure className="px-10 pt-2 bg-[#FFF8D5]">
     <img
      src="./public/image/js.png"
      
   alt="image"
      className="h-10 opacity-100 " />
  </figure>
  <div className="card-body items-center opacity-100 text-center">
    <h2 className="card-title ">Java Script</h2>
    <p>JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. [11] It has dynamic typing, prototype-based object-orientation, and first-class functions.</p>
  </div>
</div>
<div className="card bg-[#F1F1F1]  w-96 mb-3  opacity-70">
  <figure className="px-10 pt-2 bg-[#EDE0FF]">
     <img
      src="./public/image/java.png"
      
   alt="image"
      className="h-10 opacity-100 " />
  </figure>
  <div className="card-body items-center opacity-100 text-center">
    <h2 className="card-title ">Java</h2>
    <p>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. </p>
  </div>
</div>
<div className="card bg-[#F1F1F1]  w-96 mb-3  opacity-70">
  <figure className="px-10 pt-2 bg-[#FFE6CF]">
     <img
      src="./public/image/bs.png"
      
   alt="image"
      className="h-10 opacity-100 " />
  </figure>
  <div className="card-body items-center opacity-100 text-center">
    <h2 className="card-title ">Bootstrap</h2>
    <p>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.</p>
  </div>
</div>
<div className="card bg-[#F1F1F1]  w-96 mb-3  opacity-70">
  <figure className="px-10 pt-2 bg-[#E8E9FF]">
     <img
      src="./public/image/php.png"
      
   alt="image"
      className="h-10 opacity-100 " />
  </figure>
  <div className="card-body items-center opacity-100 text-center">
    <h2 className="card-title ">PHP</h2>
    <p>PHP is a recursive acronym for PHP Hypertext Preprocessor. PHP is a server side scripting language that is embedde in HTML. It is used to manage dyna content, databases, session tracking, ev build entire e-commerce.</p>
  </div>
</div>
    <Category/>
    </div>
    </div>
    </>
  )
}

export default Details