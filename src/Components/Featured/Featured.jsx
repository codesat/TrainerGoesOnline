import React from 'react'
import './featured.css'
import abc from '../../assets/abc.png'

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredwrapper">
        <div className="logos">
            <img src={abc} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Featured