/** ==========USANDO AXIOS ========== */
// import axios from 'axios'

// const getGifs = async (query = 'scarlett+johansson') => { // Consumo de la API con axios en una función asincrona
//   return await axios.get(`
//     https://api.giphy.com/v1/gifs/search?api_key=BRy2nssJx02Kf7EGS2QhGmgvgOZ1Wm8V&q=${query}&limit=15&offset=0&rating=r&lang=en
//     `)
// }

// const getData = async () => { // Se usa otra función asincrona para extraer los datos
//   const { data } = await getGifs()
//   setGifs(data.data)
// }

/** ==========USANDO FETCH ========== */
const key = 'BRy2nssJx02Kf7EGS2QhGmgvgOZ1Wm8V'

export default function getGifs ({ keyword = 'halo' } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${keyword}&limit=15&offset=0&rating=r&lang=en`

  return fetch(apiURL)
    .then(response => response.json())
    .then(response => {
      const { data } = response
      const gifs = data.map(image => {
        const { images, title, id } = image
        const { url } = images.downsized_medium
        return { title, id, url }
      })
      return gifs
    })
}
