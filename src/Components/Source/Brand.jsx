import React from 'react'

import "./Brand.css";

import { Google , Shopify , Slack , DropBox } from "../../Assets"

const Brand = () => {
  return (
    <div className="App__brand">
      <div className='App__brand-img'>
        <img src={Google} alt="Google" />
      </div>
      <div className='App__brand-img'>
        <img src={DropBox} alt="DropBox" />
      </div>
      <div className='App__brand-img'>
        <img src={Slack} alt="Slack" />
      </div>
      <div className='App__brand-img'>
        <img src={Shopify} alt="Shopify" />
      </div>
    </div>
  )
}

export default Brand