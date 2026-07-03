/*Esta será el script raíz pero de momento será donde esté todo*/

//Fetchear el json de una (en el futuro)
// document.addEventListener('DOMContentLoaded', function(){
//     return let datosLinaje = fetch("../baseDatos/linajes.json");
// })


//=Para crear las cartas dinámicamente
document.addEventListener('DOMContentLoaded', function(){
    //Usar la funcion que que haga el renderizado.
    renderizarLinaje();
});

//Para mostrar atributos
//Cuando se usa un selector de clase en JavaScript, devuelve un HTMLCollection y NO un Array. Hay que convertirlo.
const listaCartas = document.getElementById("contenedor__linajes");
listaCartas.addEventListener(function(event){
    if(event.target. === "carta")
});



//Funcion de renderizado
function renderizarLinaje(contenedor){
//Conectar con el json de los linajes
fetch("/baseDatos/linajes.json")
//Chequear que existan (Más para usarse si es con una API)
.then(response => {
    if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`)
    //Devolver el json
    } return response.json();
}
)
.then(data=>{
    //Guardar el que contenedor en el HTML en una variable en javascript
    const contenedor = document.getElementById("contenedor__linajes");
    //Un bucle para trabajar con cada item del array en el json.
    data.forEach(linaje => {
        //Crear una constante con el HTML a insertar. ¡¡Acordarse de rodearlo con los contraacentos ` !!!!! Para que se tome como HTML y no texto literal.
        const cartaLinaje =`
        <div class="carta">
            <img src="${linaje.imagen}" alt="${linaje.nombre}"></img>
            <h3>${linaje.nombre}</h3>
            <p>${linaje.descripcion}</p>
        </div>`;
        //"Sumar" el HTML de la constante del contenedor con la carta
        contenedor.innerHTML += cartaLinaje;
    }
    )
}
)
}
//Para chequear los atributos
function mostrarAtributos(){
}
