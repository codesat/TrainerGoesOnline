import React from 'react'
import './mission.css'
import missions from '../../assets/mission.jpg'

const Mission = () => {
  return (
    <div className="mission">
      <div className="missionwrapper">
        <div className="left">
          <img src={missions} alt="" />
        </div>
        <div className="right">
          <span>My Mission</span>
          <p>I love helping people stick with something that they not only get great results from but that they enjoy too. Nowadays, people know that their physical and mental health is worth investing in, recognising the benefits of outsourcing all the management of their health and fitness to a professional. I am 100% committed to helping you build better relationships with food and your own body, while building strength and confidence that will take not just your fitness, but your whole life to the next level</p>
          <button className="readfull">
            CONTACT AN EXPERT
          </button>


        </div>
      </div>
    </div>
  )
}


export default Mission