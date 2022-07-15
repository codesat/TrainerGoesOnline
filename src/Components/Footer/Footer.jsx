import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="foot">
      <div className="footwrapper">
      <div className="top">
      <div className="footitem">
          <span>Services</span>
          <p>Online Coaching</p>
          <p>1-2-1 Personal Training</p>
          <p>Small Group Personal Training</p>
        </div>
        <div className="footitem">
          <span>Company</span>
          <p>About</p>
          <p>Blog</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="footitem">
          <span>Support</span>
          <p>Contact</p>
        </div>
        <div className="footitem">
          <span>Address</span>
        </div>
      </div>
      <div className="mid"></div>
      <div className="bottom">
        <div className="copyright">
          @COPYRIGHT 2020. ALL RIGHTS RESERVED.
        </div>
        <div className="designer">
        Website Design by My Personal Trainer Website
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer