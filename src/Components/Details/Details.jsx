import React from 'react'
import './details.css'
import athimg from '../../assets/athfig.png'
import confiboost from '../../assets/confiboost.png'
import qualitylife from '../../assets/qualitylife.png'

const Details = () => {
  return (
    <div className="detail">
      <div className="detailwrapper">

        <div className="topdetail">
        <div className="left"></div>
        <div className="top">
          <span>BE A BETTER YOU</span>
          <h2>PERSONAL TRAINING IN FAREHAM</h2>
          <p className='para'>
          Whether you want to lose weight, tone up, gain lean muscle or you are happy as you are but would like a healthier lifestyle, RCotterill PT is the right choice for you. Everyone wants to feel comfortable in their own skin, therefore, even if you are working a busy schedule, finding it hard to meet your fitness goals or would like to get fit, RCotterill PT gives you the flexibility to reach your full potential with a variety of different online and individual personal training plans.
          </p>
        </div>
        <div className="right"></div>
        </div>

        <div className="bottomdetail">

        <div className="carditem">
          <img src={athimg} alt="" />
          <span className="title">
          ATHLETIC FIGURE
          </span>
          <p className='cardinfo'>
          If your busy professional life pushed your physical fitness to the backseat, there is a solution. The RCotterill PT  online plans will help you achieve your desired body image in no time
          </p>
          <span className="learnmore">
            LEARN MORE
          </span>
        </div>
        <div className="carditem">
          <img src={confiboost} alt="" />
          <span className="title">
          CONFIDENCE BOOST
          </span>
          <span className='cardinfo'>
          We don't only focus on the image in the mirror, but also how you feel in your skin. Achieving milestones with your body will transfer into your daily life as increased confidence.
          </span>
          <span className="learnmore">
            LEARN MORE
          </span>
        </div>
        <div className="carditem">
          <img src={qualitylife} alt="" />
          <span className="title">
          QUALITY OF LIFE
          </span>
          <span className='cardinfo'>
          The ultimate goal is for you to enjoy your life to the fullest, engage in social situations confidently and take up events you always wanted without limitations of your body.
          </span>
          <span className="learnmore">
            LEARN MORE
          </span>
        </div>

        </div>
      </div>

    </div>
  )
}

export default Details