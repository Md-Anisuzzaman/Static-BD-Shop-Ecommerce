import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer__body'>
      <div className='footer__content pb-3'>
        <h5>Let's Connect with our shop</h5>
        <ul>
          <li>Links</li>
          <li >Benefits</li>
          <li>Team</li>
          <li >Career</li>
          <li >Partnar Ship</li>
          <li >Supports</li>
          <li>Privacy & policy</li>
        </ul>
        <h5><i className="fab fa-facebook-square"></i> <i className="fab fa-instagram"></i> <i className="fab fa-linkedin"></i> <i className="fab fa-twitter-square"></i></h5>
        <small>&copy; Copyright 2022 BD Shopping</small>
      </div>

    </div>
  )
}

export default Footer