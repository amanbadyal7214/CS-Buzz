import React from 'react'

const Footer2 = () => {
  return (
    <>
    <footer className="footer flex justify-between bg-base-200 text-base-content p-10">
  <aside className='w-96 mr-48'>
    <a>
        <img src="./public/image/ficon.png" alt="" width="70" />
    </a>
    
      <h1 className='font-bold'>About CS Buzz</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas esse culpa ducimus neque, nobis autem laboriosam dignissimos sapiente beatae sint magnam molestias in eius consectetur ipsam. Beatae, amet explicabo?

    </p>
    
  </aside>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Works</a>
    <a className="link link-hover">Career</a>
  </nav>
  <nav>
    <h6 className="footer-title">Help</h6>
    <a className="link link-hover">Customer Support</a>
    <a className="link link-hover">Delivery Detials</a>
    <a className="link link-hover">Term & Conditions</a>
    <a className="link link-hover">Privacy policy</a>
  </nav>
  <nav className='pr-6'>
    <h6 className="footer-title">Resounces</h6>
    <a className="link link-hover">Free eBooks</a>
    <a className="link link-hover">Development Tutoiral</a>
    <a className="link link-hover">How to Blog</a>
    <a className="link link-hover">YouTube Playlist</a>
  </nav>

</footer>
<hr />
<footer className="footer bg-base-200 text-base-content flex items-center p-4">
  <aside className="grid-flow-col pr-48 items-center">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt doloremque atque, totam suscipit, error officia in recusandae dolorum ratione optio laborum blanditiis temporibus vel esse nisi quos, quia repellendus omnis.
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
      </svg>
    </a>
   
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
      </svg>
    </a>
    <a>
      <img src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" alt="" width="60" />
    </a>
    <a>
        <img src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png" alt="" width="60" />
    </a>
  </nav>
</footer>
    </>
  )
}

export default Footer2