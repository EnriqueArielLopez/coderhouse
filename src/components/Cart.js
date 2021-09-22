import React from 'react';
import Movie from './Movie';
import './cart.css'
const Cart = ({ cart, setCart }) => {



    return (

        <div className="cart">
            <h3>Carrito</h3>

            {cart.length === 0 ? (
                <p>0</p>) : (cart.map((movie => <Movie
                    key={movie.id}
                    movie={movie}
                    cart={cart}
                    setCart={setCart}
                />
                )))

            }

        </div>



    )
};
export default Cart;