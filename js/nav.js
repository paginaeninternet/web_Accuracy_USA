var botonDesplegable = document.getElementById('drop');
var dropdown_menu = document.getElementById('dropdown-menu');


function desplegar(){
    dropdown_menu.classList.add('activar-drop');
}

botonDesplegable.addEventListener('click', desplegar);