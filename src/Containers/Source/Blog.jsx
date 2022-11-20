import React from 'react'

import { Article } from '../../Components';

import "./Blog.css";

import { Img1 , Img2 , Img3 , Img4 , Img5 } from "../../Assets";

const articles = [
  {
    id:1,
    title : 'App and Open  AI is the future. Let us exlore how it is?',
    date : 'Aug 18, 2023',
    img:Img2
  },
  {
    id:2,
    title : 'App and Open  AI is the future. Let us exlore how it is?',
    date : 'Aug 18, 2023',
    img:Img3
  },
  {
    id:3,
    title : 'App and Open  AI is the future. Let us exlore how it is?',
    date : 'Aug 18, 2023',
    img:Img4
  },
  {
    id:4,
    title : 'App and Open  AI is the future. Let us exlore how it is?',
    date : 'Aug 18, 2023',
    img:Img5
  }
]

const Blog = () => {
  return (
    <div className='App__blog' id='blog'>
      <div className="App__blog-head">
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="App__blog-blogs">
        <div className="App__blog-blogs_one">
          <Article title="GPT-3 and Open  AI is the future. Let us exlore how it is?" date="Aug 18, 2023" img={Img1}/>
        </div>
        <div className="App__blogs-blogs_rem">
          {
            articles.map((each)=>{
              return (
                <Article key={each.id} title={each.title} date={each.date} img={each.img}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Blog