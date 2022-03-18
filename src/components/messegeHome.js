import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Messege() {
    return(
        <div className='messege'>
            <h1>Echos con todo el amor, las mejores prendas para los engreidos del hogar</h1>
            <h2>¿Qué esperas para comprar una prenda?</h2>
            <h3>¡No te quedes con la prenda que no te gusta!</h3>
            <div>
                <button>
                    <NavLink to='/contacto'>
                        Start <ion-icon name="play-skip-forward-circle-outline"></ion-icon>
                    </NavLink>
                </button>
            </div>
                
        </div>
    );
}