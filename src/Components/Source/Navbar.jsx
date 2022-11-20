import React from 'react'

import Logo from "../../Assets/Images/App Logo.svg";

import "./Navbar.css";

import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Menu = ({setMobileMenu}) => {
  return (
      <>
        <p onClick={()=>{setMobileMenu(false)}}><a href="#home">Home</a></p>
        <p onClick={()=>{setMobileMenu(false)}}><a href="#about">What App ?</a></p>
        <p onClick={()=>{setMobileMenu(false)}}><a href="#features">Features</a></p>
        <p onClick={()=>{setMobileMenu(false)}}><a href="#possibility">Possibility</a></p>
        <p onClick={()=>{setMobileMenu(false)}}><a href="#blog">Blog</a></p>
      </>
  )
}

const Navbar = () => {

  const [mobileMenu , setMobileMenu] = React.useState(false);

  return (
    <div className="App__navbar">
      <div className="App__navbar-links">
        <div className="App__navbar-links_logo">
          <a href="/"><img src={Logo} alt="Logo" /></a>
        </div>
        <div className="App__navbar-links_container">
          <Menu setMobileMenu={setMobileMenu}/>
        </div>
      </div>
      <div className="App__navbar-acc">
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className="App__navbar-menu">
        {
          mobileMenu 
          ? <RiCloseLine color='#FAFAFA' onClick={()=>{setMobileMenu(false)}} cursor="pointer" size={24}/> 
          : <RiMenu3Line color='#FAFAFA' onClick={()=>{setMobileMenu(true)}} cursor="pointer" size={24}/>
        }
        {
          mobileMenu && (
            <div className='App__navbar-menu_container scale-up-center'>
              <div className="App__navbar-menu_container-links">
                <Menu setMobileMenu={setMobileMenu}/>
              </div>
              <div className='App__navbar-menu_container-acc'>
                <p>Sign In</p>
                <button type='button'>Sign Up</button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar