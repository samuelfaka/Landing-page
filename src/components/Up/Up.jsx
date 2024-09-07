import React from 'react'
import "./Up.css"
import Img1 from "../../assets/Images/intro-mobile.jpg"
import Img2 from "../../assets/Images/intro-desktop.jpg"
import Img3 from "../../assets/Images/intro-right-desktop.svg"
import Img4 from "../../assets/Images/intro-right-mobile.svg"
import Img5 from "../../assets/Images/left-desktop.svg"


const Up = () => {
  return (
    <div className='main'>
        <div>
            <div className='kill1'>
              <picture>
                  <source media='(max-width:767px)' srcSet={Img3} />
                  <img src={Img4} alt="" />
                 </picture>
            </div>
            <div className='kill2'>
            <img src={Img5} alt="" />
            </div>
        </div>
        <div className='container'>
           <div className='many'>
            <div className='all'>
                <h1 className='many1'>  Humanizing <br /> your insurance.</h1>
                <p className='many2'>
                  Get your life insurance coverage easier and faster. We blend our expertise 
                 and technology to help you find the plan that’s right for you. Ensure you 
                 and your loved ones are protected.
                </p>
               <div>
               <button className='btn'>  View plans</button>
               </div>
            </div>
            <div className='kill'>
               <picture>
                  <source media='(max-width:767px)' srcSet={Img1} />
                  <img src={Img2} alt="" />
                 </picture>
               </div>
           </div>
        </div>
    </div>
  )
}

export default Up