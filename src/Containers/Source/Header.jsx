import React from 'react'

import "./Header.css";

import header from "../../Assets/Images/Header AI.png";

import { TbBrandTelegram } from "react-icons/tb"

const Header = () => {
  return (
    <div className="App__header" id='home'>
      <div className="App__header-content">
        
        <h1 className="gradient__text App__header-content_title">Let's make something COOL with our easy assesible AI <span className='App__header-content_title-app'>APP</span></h1>

        <div className='App__header-content_desc'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, necessitatibus natus. Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, consequatur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, corrupti!
        </div>

        <div className="App__header-content_email">
          <input type="text" name="email" id="email" placeholder='Enter Email Address'/>
          <button type="button">Send <TbBrandTelegram/></button>
        </div>

      </div>
      <div className="App__header-image">
        <img src={header} alt="AI" />
      </div>
    </div>
  )
}

export default Header