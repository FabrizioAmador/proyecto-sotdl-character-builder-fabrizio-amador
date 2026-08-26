import React from "react";


function Encabezado(){
    return 
        <> 
            <header>
                <h1><img class="logo" src="..\imagenes\logo.png" alt="Logo de SotDL">Character Builder</h1>
                <nav>
                    <ul class="barra__navegación">
                        <li><a href="#">Página Principal</a></li>
                        <li><a href="#">Personajes</a></li>
                        <li><a href=".\contacto.html">Contacto</a></li>
                    </ul>
                </nav>
            </header>
        </>
};


export default Encabezado;