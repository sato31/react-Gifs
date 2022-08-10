import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=BRy2nssJx02Kf7EGS2QhGmgvgOZ1Wm8V&q=margot+robbie&limit=25&offset=0&rating=g&lang=en'

function App () {
  const [gifs, setGifs] = useState([]) // gifs: estado inicial, setGifs se usa para cambiar el estado

  const getGifs = async () => {
    return await axios.get(apiURL)
  }

  useEffect(() => { /** Lo que esta en el useEffect se va a ejecutar cada vez que se renderize el componente */
    const getData = async () => {
      const { data } = await getGifs()
      setGifs(data.data)
    }
    getData()
  }, []) // useEffect recibe un arreglo de dependencias como segundo parametro
  // En este caso este arreglo es vacio (sin dependencias), por lo tanto solo se ejecuta la primera vez que se renderiza
  let keyArray = 1
  console.log(gifs)

  return (
    <div className='app'>
      <section className='app-content'>
        {gifs.map(elementGif => <img src={elementGif.images.downsized_medium.url} key={keyArray++} />) /** Se usa map y no forEach ya que map devuelve el elemento y forEach no devuelve nada */}
      </section>
      {/* Al presionar el boton, se usa setGifs para cambiar de estado usando ahora el arreglo differntGifs */}
      {/* <button onClick={() => setGifs(differentGifs)}>Cambiar GIFS</button> */}
      {/* Y al cambiar de estado, el componenete se vuelve a renderizar con la nueva información */}
    </div>
  )
}

export default App
