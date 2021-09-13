import React, { Component } from 'react';
import Cardwidget from './cardWidget';
class Navbar extends Component {

  render() { 

    // Esto es el navbar

    return ( <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
  <img src='./imagenes/palomitas-de-maiz.png' alt='logo' width='50'/>
    
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

{/* Esta parte es del carrito (logo)*/}
  <Cardwidget/>


      </div>
    </div>
  </nav>);

  }
}
 
export default Navbar;