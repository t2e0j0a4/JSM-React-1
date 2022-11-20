import React from 'react'

import "./Footer.css";

import Logo from "../../Assets/Images/App Logo.svg"

const footerLinks = [
  {
    id:1,
    title:"Links",
    links:['Overons','Social Media', 'Counters' ,'Contact']
  },
  {
    id:2,
    title:"Company",
    links:['Tearms & Conditions','Privacy Policy','Contact']
  },
  {
    id:3,
    title:"Get In Touch",
    links:['Crechterwoord K12 182 DK Alknjkcb','085-132567', 'info@payme.net']
  },
]

const Footer = () => {
  return (
    <div className="App__footer">
      <div className="App__footer-head">
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
        <button type='button'>Request Early Assess</button>
      </div>
      <div className="App__footer-foot_links">
        <div className="App__footer-foot_links-1">
          <a href="/"><img src={Logo} alt="Logo" /></a>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, sequi.</p>
        </div>
        {
          footerLinks.map((each)=>{
            return (
              <div key={each.id} className="App__footer-foot_links-2">
                <div className="App__footer-foot_links-2_head">{each.title}</div>
                <ul>
                  {
                    each.links.map((eachLink)=>{
                      return (
                        <li key={eachLink}>{eachLink}</li>
                      )
                    })
                  }
                </ul>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Footer