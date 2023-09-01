import React from 'react'
import { feedback } from "../constants";
import style from "../style";
import FeedbackCard from './FeedbackCard'


const Testimonials = () =>  (
    <section id='clients' className={`${style.flexCenter} ${style.paddingY} flex-col relative`}>
      <div className="absolute z-0 w-[60%] h-[60%] -right-[60%] blue__gradient" />
      <div className="w-full flex justify-between md:flex-row flex-col items-center sm:mb-16 mb-6 relative z-[1]">
        <h1 className={style.heading2}>What people are <br className='sm:block hidden' /> saying about us</h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${style.paragraph} text-left max-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card)=>(
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  )


export default Testimonials
