import React from 'react'

import "./Article.css";

const Article = ({title , date , img}) => {
  return (
    <div className='App__article'>
      <div className="App__article-image">
        <img src={img} alt="Blog" />
      </div>
      <div className="App__article-content">
        <div className="App__article-content_head">
          <p>{date}</p>
          <h1>{title}</h1>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article