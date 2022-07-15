import React from 'react'
import './testimonials.css'

const Testimonials = () => {
  return (
    <div className="test">
      <div className="testwrapper">
        <div className="top">
          <h1>
          What My Amazing Clients Say
          </h1>
        </div>
        <div className="cards">
          <div className="carditem">
            <p>
            "Rob is great, always there with help and advise which you can trust to talk to. I can now train at home saving time whilst being more efficient."
            </p>
            <h4>​Lucy Eagles</h4>
          </div>
          <div className="carditem">
            <p>
            "Robs online coaching has helped me feel more comfortable within myself and given me the confidence to eat better foods and train with my goals in mind."
            </p>
            <h4>Alison Salkeld-Brown</h4>
          </div>
          <div className="carditem">
            <p>
            "During my plan with Rob, I exceeded even my own expectations by losing 13lb and dropping 2 dress sizes from a size 12 to a size 8!"
            </p>
            <h4>Beth Price</h4>
          </div>
        </div>
        <div className="bottom">
          <button className="readfull">READ THE FULL STORIES</button>
        </div>
      </div>
    </div>
  )
}


export default Testimonials