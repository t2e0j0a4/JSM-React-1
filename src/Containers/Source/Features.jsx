import React from 'react'
import { Feature } from '../../Components';

import "./Features.css";

const features = [
  {
    id:1,
    title : "Improving end distrusts instantly ",
    info : "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
  },
  
  {
    id:2,
    title : "Become the tended active",
    info : "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
  },
  
  {
    id:3,
    title : "Message or am nothing",
    info : "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
  },
  
  {
    id:4,
    title : "Really boy law county",
    info : "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
  }
]

const Features = () => {
  return (
    <div className="App__features" id='features'>
      <div className="App__features-head">
        <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="App__features-disc">
        {
          features.map((each)=>{
            return (
              <div key={each.id} className="App__features-disc_feat">
                <Feature title={each.title} desc={each.info}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Features