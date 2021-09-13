import React, { useState } from 'react';

const Counter= ({valor,funcion}) =>{
    const funcionRestar = () =>{
        if (valor <= 0) {
           console.log("Valor menor a 0");
        }
    else {
      funcion (valor - 1);
    }
      }

    return(
        <div>
        
     <h1 style={{color: 'black'}}>{valor}</h1>  
     <button onClick={()=>funcionRestar(valor-1)}>Restar</button>
     <button onClick={()=>funcion(valor+1)}>Sumar</button>

        </div>
        )
    }

    export default Counter;
