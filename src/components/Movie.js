import React from "react";

const Movie = ({ movie, cart, setCart, movies }) => {

    // guardamos las propiedades de las peliculas
    const { name, description, id } = movie;

    // Funcion para agregar Peliculas
    const addMovie = (id) => {
        const movie = movies.filter((movie) => movie.id === id);
        setCart([...cart, ...movie]);

    };

    // Funcion para eliminar una pelicula
    const delMovie = (id) => {
        const movies = cart.filter(movie => movie.id !== id)
        setCart(movies)
    }

    return (
        <div>
            <ul>
                <li>{name}</li>
                <li>{description}</li>

                {movies ? (
                    
                        <button type="button" onClick={() => addMovie(id)} >Agregar pelicula </button>
                    
                ) : (
                    <div>

                        <button type="button" onClick={() => delMovie(id)} >Confirmar </button>

                        <button type="button" onClick={() => delMovie(id)} >Eliminar</button>
                    </div>

                )}

            </ul>
        </div>



    );


};

export default Movie;