import React, { Component, Fragment,useState } from 'react';
import Movie from "./components/Movie"
import Cart from "./components/Cart"
import Nav from "./components/Nav"
const App = () => {

  // Estado de las peliculas con listados

  const [movies,setMovies] = useState([
        {id: 1 , name:'Avengers', description : 'accion'},
        {id: 2 , name:'Narnia', description : 'Fantasia'},
        {id: 3 , name:'The Simpsons', description : 'Humor'},
        
        ])

        // Estado del carrito de peliculas
        const [cart,setCart]= useState([]);

  return (

<Fragment>
<Nav/>

<h3>Movies</h3>
{movies.map((movie)=>(
<Movie

key = {movie.id}
movie = {movie}
cart ={cart}
setCart={setCart}
movies={movies}
/>
))}

<Cart
cart={cart}
setCart={setCart}

/>

</Fragment>
  );
}
export default App;
