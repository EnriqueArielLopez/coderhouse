import React from 'react'
import {Link} from 'react-router-dom'
const navbar = ()=>{

    return (

        <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link to ='/'>
<img src='./imagenes/palomitas-de-maiz.png' width='50'/>
  
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav mx-auto">
        <a className="nav-link " href="#">Home</a>
        <a className="nav-link" href="#">Movies</a>
        <a className="nav-link" href="#">About us</a>
        <a className="nav-link" href="#">Contact</a>

      </div>
      <Link to ='/'>
      <img src='./imagenes/carrito-de-compras.png' width='40' />
      </Link>

    </div>
  </div>

</nav>

        </div>
    )

}
export default navbar