import React from 'react'
import '../styles/App.css'
import ListOfGifs from './ListOfGifs'

import { Link, Route } from 'wouter'

function App () {
  return (
    <div className='app'>
      <section className='app-content'>
        <h1>App</h1>
        <Link to='/gif/xbox'>Gifs de Xbox</Link>
        <Link to='/gif/nintendo'>Gifs de Nintendo</Link>
        <Link to='/gif/playstation'>Gifs de PlayStation</Link>
        <Route
          component={ListOfGifs}
          path='/gif/:keyword'
        />
        {/* Al presionar el boton, se usa setGifs para cambiar de estado usando ahora el arreglo differntGifs */}
        {/* <button onClick={() => setKeyword('halo')}>Cambiar GIFS</button> */}
        {/* Y al cambiar de estado, el componenete se vuelve a renderizar con la nueva información */}
      </section>
    </div>
  )
}

export default App
