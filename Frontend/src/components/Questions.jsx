import React from 'react'

const Questions = () => {
  return (
   <>
   <div>
    <h1 className='text-2xl mt-12 p-4 font-bold text-center text-white'
     style={{
        backgroundImage: "url(./public/image/Background.png)",
      }}>Frequently asked question</h1>
   </div>
   <p className='text-center py-6'>Answers to Your Burning Questions: Unveiling the FAQ Section for Inquistive Minds</p>
   <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-xl font-medium">Is there a fre trial available</div>
  <div className="collapse-content">
    <p>Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">Can I change my plan later?</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">What is your cancellation policy?</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">Can other info be added to an invoice?


</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">How does billing work?  </div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">How do I change my account email?  </div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
   </>
  )
}

export default Questions