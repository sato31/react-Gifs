import React from 'react'
import '../styles/Gif.css'

const Gif = ({ title, id, url }) => {
  return (
    <a href={`#${id}`} className='gif'>
      <h4>{title}</h4>
      <img alt={title} src={url} />
    </a>
  )
}

export default Gif
