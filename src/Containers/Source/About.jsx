import React from 'react'
import Feature from '../../Components/Source/Feature';

import "./About.css";

const About = () => {
  return (
    <div className="App__about" id='about'>
      <div className="App__about-app">
        <Feature title="What APP ?" desc="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
      </div>
      <div className="App__about-head">
        <h1 className='App__about-head_title gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="App__about-features">
        <div className="App__about-features_each">
          <Feature title="Chatbots" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex necessitatibus nostrum eligendi quasi quos veniam modi voluptas neque aspernatur consectetur, quibusdam vero ipsa nobis quo." />
        </div>
        <div className="App__about-features_each">
          <Feature title="Knowledgebase" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex necessitatibus nostrum eligendi quasi quos veniam modi voluptas neque aspernatur consectetur, quibusdam vero ipsa nobis quo." />
        </div>
        <div className="App__about-features_each">
          <Feature title="Education" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex necessitatibus nostrum eligendi quasi quos veniam modi voluptas neque aspernatur consectetur, quibusdam vero ipsa nobis quo." />
        </div>
      </div>
    </div>
  )
}

export default About

