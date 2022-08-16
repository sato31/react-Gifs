# Primer aplicación en React: Búsqueda de Gifs

[Ver este proyecto](https://sato31.github.io/react-Gifs/)

Esta aplicación sencilla de react utilizando [Vite](https://vitejs.dev/), consume la API de giphy para obtener imagenes .gif de acuerdo al criterio de búsqueda que se le especifique.

En la página principal de la aplicación se muestran tres enlaces para buscar gifs sugeridos:

* Gifs de Xbox
* Gifs de Nintendo
* Gifs de PlayStation

![1660615305903](image/README/1660615305903.png)

Al hacer click en cualquiera de las opciones se cargará un componente que mostrará una lista de 15 Gifs con su nombre.

![1660615536593](image/README/1660615536593.png)

Se utilizaron props, useState, useEffect y el módulo de npm [wouter](https://www.npmjs.com/package/wouter) para generar los links y las rutas de la aplicación.
