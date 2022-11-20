import React from 'react'

import "./Feature.css";

const Feature = ({ title , desc }) => {
  return (
    <>
      <div className="App__feature-head">
        <div className='App__feature-div'/>
        <div className="App__feature-title">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="App__feature-desc">
        <p>{desc}</p>
      </div>
    </>
  )
}

export default Feature