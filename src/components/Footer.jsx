import React from 'react'
import facebook from '../images/facebook.jpg'
import wappsApp from '../images/wappsApp.jpg'
import insta from '../images/insta.jpg'

const Footer = () => {
  return (
    <div className="footer ">
      <div className='sb_footer section_padding'>
        <div className='sb_footer-links-div'>
          <h4>For Bussiness</h4>
          <a href="/employer">
            <p>Employer</p>
          </a>
          <a href="/healthplan">
            <p>health plan</p>
          </a>
          <a href="/Individual">
            <p>Individual</p>
          </a>
          <a href="/employer">
            <p>Employer</p>
          </a> 
        </div>
        <div className='sb_footer-links_div'>
          <h4>Resources</h4>
          <a href="resource">
            <p>Resource center</p>
          </a>
          <a href="resource">
            <p>Testimonals</p>
          </a>
          <a href="resource">
            <p>STV</p>
          </a>
        </div>
        <div className='sb_footer-links_div'>
          <h4>Partners</h4>
          <a href="/employer">
            <p>Swing Tech</p>
          </a>
        </div>
        <div className='sb_footer-links_div'>
          <h4>Company</h4>
          <a href="/About">
            <p>About</p>
          </a>
          <a href="/press">
            <p>Press</p>
          </a>
          <a href="/career">
            <p>Career</p>
          </a>
          <a href="/contact">
            <p>Contact</p>
          </a>
        </div>
        <div className='sb_footer-links_div'>
          <h4>Coming soon on</h4>
          <div className='socialmedia'>
            <p><img src={facebook} alt=''/></p>
            <p><img src={wappsApp} alt=''/></p>
            <p><img src={insta} alt=''/></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer