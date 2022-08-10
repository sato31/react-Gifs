import React, { useState } from 'react'
import './App.css'

const GIFS = ['https://media.giphy.com/media/jEBj3mhsUICgk9Q9h9/giphy.gif', 'https://media.giphy.com/media/vpvhDCSoPpQ5i/giphy.gif']

function App () {
  const [gifs, setGifs] = useState(GIFS)
  return (
    <div className='app'>
      <section className='app-content'>
        <img src={gifs} alt='GIF' />
      </section>
    </div>
  )
}

export default App
