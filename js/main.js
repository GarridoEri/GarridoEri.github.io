let btnMenu = document.getElementById('btnmenu');
let menu = document.getElementById('menu');
btnMenu.addEventListener('click',function(){
    'use strict';
    menu.classList.toggle('mostrar');
});

function desplegar_menu($menu){
    $('.menu-section').css('display', 'none');
    $('#'+$menu).css('display', 'block');
}
