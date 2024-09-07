import React from 'react'
import "./Banner.css"
import Img1 from "../../assets/Images/bg-how-work-mobile.svg"
import Img2 from "../../assets/Images/bg-how-desktop.svg"

const Banner = () => {
  return (
    <div className='container banner'>
      <picture>
        <source media='(max-width:767px)' srcSet={Img1} />
        <img src={Img2} alt="" />
      </picture>

      <div className='wrapper'>
        <div className='title'>
          <h2 className='title1'>Find out more <br /> about how we work</h2>
        </div>
        <button className='btn'>How we work</button>
      </div>
    </div>
  )
}

export default Banner