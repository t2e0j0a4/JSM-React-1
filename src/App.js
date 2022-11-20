import React from 'react'

import "./App.css";

import { Footer , Header , Possibility , Blog , Features , About } from './Containers';

import { CTA , Navbar , Brand } from "./Components";

const App = () => {
  return (
    <div className="App">
      <div className="App__gradiant-bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <About/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App