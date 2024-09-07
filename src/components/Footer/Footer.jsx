import React from 'react'
import "./Footer.css";
import Img1 from "../../assets/Images/logo.svg"
import Img2 from "../../assets/Images/icon-facebook.svg"
import Img3 from "../../assets/Images/icon-twitter.svg"
import Img4 from "../../assets/Images/icon-pinterest.svg"
import Img5 from "../../assets/Images/icon-instagram.svg"
import Img6 from "../../assets/Images/bg-desktop.svg"
import Img7 from "../../assets/Images/bg-mobile.svg"

const Footer = () => {
  return (
    <div>
      <footer>
        <div className='art'>
        <picture>
        <source media='(max-width:767px)' srcSet={Img6} />
        <img src={Img7} alt="" />
      </picture>
        </div>
        <div className='container'>
          <div className='footer2'>
            <div className='logo'>
              <img src={Img1} alt="" />
            </div>
            <div className='social'>
              <img src={Img2} alt="" />
              <img src={Img3} alt="" />
              <img src={Img4} alt="" />
              <img src={Img5} alt="" />
            </div>
          </div>
          <div className='menu'>
            <div className='company'>
              <h4>Our Company</h4>
              <ul>
                <li>How we work</li>
                <li> Why Insure?</li>
                <li> View plans</li>
                <li>  Reviews</li>
              </ul>
            </div>
            <div className='Help'>
              <h4>  Help me</h4>
              <ul>
                <li>  FAQ</li>
                <li>Terms of use</li>
                <li>Privacy policy</li>
                <li>Cookies</li>
              </ul>
            </div>
            <div className='Contact'>
              <h4>Contact</h4>
              <ul>
                <li>  Sales</li>
                <li>  Support</li>
                <li>  Live chat</li>
              </ul>
            </div>
            <div className='Others'>
              <h4>Our Company</h4>
              <ul>
                <li>  Careers</li>
                <li>Press</li>
                <li>Licenses</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer