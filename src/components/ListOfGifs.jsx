import React, { useState, useEffect } from 'react'
import Gif from './Gif'
import getGifs from '../utils/getGifs'

const ListOfGifs = ({ params }) => {
  const { keyword } = params

  const [loading, setLoading] = useState(false)

  const [gifs, setGifs] = useState([]) // gifs: estado inicial, setGifs se usa para cambiar el estado

  useEffect(() => { /** Lo que esta en el useEffect se va a ejecutar cada vez que se renderize el componente */
    setLoading(true)
    getGifs({ keyword })
      .then(gifs => {
        setGifs(gifs) // Se ejecuta la funcion importada como una promesa
        setLoading(false)
      })
  }, [keyword]) // useEffect recibe un arreglo de dependencias como segundo parametro
  // En este caso recibe la dependencia keyword, y cada vez que esta cambie, se va a ejecutar el useEffect

  if (loading) return <i>Cargando...</i>

  return (
    <div>
      {
        gifs.map(({ id, title, url }) =>
          <Gif
            key={id}
            title={title}
            url={url}
            id={id}
          />
        )/** Se usa map y no forEach ya que map devuelve el elemento y forEach no devuelve nada */
    }
    </div>
  )
}

export default ListOfGifs
