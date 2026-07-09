/*Esta será el script raíz pero de momento será donde esté todo*/
//Primero el código y después el modulado, si no se me van las ganas
//Guardar el contenedor en el HTML en una variable en javascript
const contenedorHtml = document.getElementById("contenedor__linajes");

//Crear las cartas dinámicamente
document.addEventListener('DOMContentLoaded', function(){
    //Usar la funcion que que haga el renderizado.
    renderizarLinaje(contenedorHtml);
});


//Llamar a la función para renderizar al clickear
contenedorHtml.addEventListener('click', function(event){
    const cartaMostrando = event.target.closest(".cartaLinajeCualidades");
    if (cartaMostrando){
        mostrarAtributos(cartaMostrando);
    }
})

//Fetchear una sola vez
function obtenerLinajes() {
    return fetch("/baseDatos/linajes.json")
}

//Funcion de renderizado
function renderizarLinaje(contenedorRenderizado){
obtenerLinajes()
//Chequear que existan (Más para usarse si es con una API)
.then(response => {
    if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`)
    //Devolver el json
    } return response.json();
}
)
//Llamar el JSON aceptado DISTINTO al parámetro
.then(datosLinaje=>{
    //Un bucle para trabajar con cada item del array en el json.
    datosLinaje.forEach(linaje => {
        //Crear una constante con el HTML a insertar. ¡¡Acordarse de rodearlo con los contraacentos ` !!!!! Para que se tome como HTML y no texto literal.
        const cartaLinaje =`
        <div class="carta">
            <img src="${linaje.imagen}" alt="${linaje.nombre}"></img>
            <h3>${linaje.nombre}</h3>
            <p>${linaje.descripcion}</p>
        </div>`;
        //"Sumar" el HTML de la constante del contenedor con la carta
        contenedorRenderizado.innerHTML += cartaLinaje;
    }
    )
}
)
}
//Para chequear los atributos
function mostrarAtributos(contenedorRenderizado){
obtenerLinajes()
//Chequear que existan (Más para usarse si es con una API)
.then(response => {
    if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`)
    //Devolver el json
    } return response.json();
})
//Llamar el JSON aceptado DISTINTO al parámetro
.then(datosLinaje=>{
    //Un bucle para trabajar con cada item del array en el json.
    datosLinaje.forEach(linaje => {
        //Crear una constante con el HTML a insertar. ¡¡Acordarse de rodearlo con los contraacentos ` !!!!! Para que se tome como HTML y no texto literal.
        const linajeAtributos =`
        <div class="cartaLinajeCualidades">
        <p>Los atributos influyen en tus características. Al crear un personaje, por única vez, podés modificarlo aumentando un atributo a elección por 1 punto, a cambio de que otro atributo debe ser reducido por 1 punto.</p>
            <ul class="cartaLinajeCualidades">
                <li>"Fuerza: "${linaje.atributos.fuerza}</li>
                <li>"Agilidad: "${linaje.atributos.agilidad}</li>
                <li>"Intelecto: "${linaje.atributos.intelecto}</li>
                <li>"Voluntad: "${linaje.atributos.voluntad}</li>
            </ul>
            <ul class="linajeCaracterísticas">
                <li>"Vida máxima: "${linaje.caracteristicas.vidaMax}</li>
                <li>"Defensa: "${linaje.caracteristicas.defensa}</li>
                <li>"Percepción: "${linaje.caracteristicas.percepcion}</li>
                <li>"Insanidad Máxima: "${linaje.caracteristicas.insanidadMax}</li>
            </ul>
        </div>`;
        //"Sumar" el HTML de la constante del contenedor con la carta
        contenedorRenderizado.innerHTML += linajeAtributos;
    }
    )
}
)
}
