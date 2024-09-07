import React from 'react'
import "./Info.css"
import Img1 from "../../assets/Images/icon-snappy-process.svg"
import Img2 from "../../assets/Images/icon-affordable-prices.svg"
import Img3 from "../../assets/Images/icon-people-first.svg"

const Info = () => {
  return (
    <div className='different'>
      <div className='container'>
        <div>
        <hr className='w-[19vw] lg:w-[5vw] font-bold'/>
        </div>
        <h2 className='title1'>We’re different</h2>
        <div className='content'>
          <div className='nappy'>
            <div className='img'>
            <img src={Img1} alt="" />
            </div>
            <h3>Snappy Process</h3>
            <p>Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.</p>
          </div>
          <div className='affordable'>
            <div className='img'>
            <img src={Img2} alt="" />
            </div>
            <h3>Affordable Prices</h3>
            <p> We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
          </div>
          <div className='People'>
            <div className='img'>
            <img src={Img3} alt="" />
            </div>
            <h3>People First</h3>
            <p>Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info