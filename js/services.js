var botonAntes = document.getElementById('ccp_BotonAntes'),
    botonDespues = document.getElementById('ccp_BotonDespues');

var imgAntes = document.getElementById('ccp_imgAntes'),
    imgDespues = document.getElementById('ccp_imgDespues');

function fImgAntes(){
    
        imgAntes.classList.add('ccp_activo');

        imgDespues.classList.remove('ccp_activo');
};

function fImgDespues(){
    
    imgDespues.classList.add('ccp_activo');

    imgAntes.classList.remove('ccp_activo');
};

botonAntes.addEventListener("click", fImgAntes,true);
botonDespues.addEventListener("click", fImgDespues,true);