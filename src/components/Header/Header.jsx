import React, {useState} from 'react'
import "./Header.css";
import Img1 from "../../assets/Images/logo.svg"
import Img2 from "../../assets/Images/icon-hamburger.svg"

const Header = () => {
  
  const [open, setOpen] = useState(false);
  const handleClick = e=>{
    e.preventDefault();
    setOpen(!open);
  }
  return (
    <div>
      <header className='header'>
        <nav className='navbar container'>
          <div className='logo'>
            <img src={Img1} alt="" />
          </div>
          <ul className={open ? "nav-items active" : "nav-items"}>
            <li>How we work</li>
            <li>Blog</li>
            <li>Account</li>
            <li className='btn btn--nav-btn'>View plans</li>
          </ul>
          <div className='hamburger'>
            <img src={Img2} alt=""  onClick={handleClick}/>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header