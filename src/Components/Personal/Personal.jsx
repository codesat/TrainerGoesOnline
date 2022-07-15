import React from 'react'
import './personal.css'
import trainer from '../../assets/trainer.jpg'

const Personal = () => {
  return (
  <>
   <div className="person">
    <div className="personwrapper">
      <div className="left">
        <h1>
        Online &#38; Individual Personal Trainer in Fareham
        </h1>
        <p className='first'>
        Throughout my fitness journey, I,ve helped hundreds of people to improve their relationship with food and their bodies. But more than that, they've extended their lives and put the spark back into their training. While variety is essential to keep you interested - too much variety might inhibit your progress. That's why, as a personal trainer in Fareham, I want to help you stick with a training programme long enough that you see real results.
        </p>
        <p className="second">
        When my clients start training, they see their time in the gym as something else to juggle. But they soon learn that the flexibility, nutritional coaching and support they receive has a positive knock-on effect into the rest of their lives. They're more productive at work, they're more present for their families and importantly, they start to like themselves again.
        </p>
        <button className="about">
          ABOUT
        </button>
      </div>
      <div className="right">
        <img src={trainer} alt="" />
      </div>
    </div>
   </div>
  </>
  )
}

export default Personal