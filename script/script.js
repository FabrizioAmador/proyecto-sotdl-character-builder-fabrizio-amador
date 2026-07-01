/*Esta será el script raíz pero de momento será donde esté todo*/


//= Para crear las cartas dinámicamente

document.addEventListener('DOMContentLoaded', function(){
    //Usar la funcion que que haga el renderizado.
    renderizarLinaje();
})

//Funcion de renderizado
function renderizarLinaje(){
//Conectar con el json de los linajes
fetch("/baseDatos/linajes.json")
//Chequear que existan (Más para usarse si es con una API)
.then(response => {
    if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`)
    } return response.json();
}
)
.then(data=>{
    const contenedor = document.getElementById("contenedor__linajes");
    data.forEach(linaje => {
        const cartaLinaje =`
        <div class="carta">
            <img src="${linaje.imagen}" alt="${linaje.nombre}"></img>
            <h3>${linaje.nombre}</h3>
            <p>${linaje.descripcion}</p>
        </div>`;
        contenedor.innerHTML += cartaLinaje;
    })
})
}
