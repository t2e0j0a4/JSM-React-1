import React from 'react'

import "./Possibility.css";

import possibility from "../../Assets/Images/Possibility.png";

const Possibility = () => {
  return (
    <div className="App__possibility" id='possibility'>
      <div className="App__possibility-image">
        <img src={possibility} alt="possibility" />
      </div>
      <div className="App__possibility-content">
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility