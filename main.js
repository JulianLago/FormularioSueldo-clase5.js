const $botonCalcularMensual = document.querySelector("#botonsueldomensual");
$botonCalcularMensual.onclick = function(){


    let sueldoAnual=document.getElementById("inputsueldoanual").value;
    let sueldoMensual=sueldoAnual/12;
    document.getElementById("showsueldomensual").value= sueldoMensual;
    
    return false;
}

const $botonCalcularAnual = document.querySelector("#botonsueldoanual");
$botonCalcularAnual.onclick = function(){


    let sueldoMensual=document.getElementById("inputsueldomensual").value;
    let sueldoAnual=sueldoMensual*12;
    document.getElementById("showsueldoanual").value= sueldoAnual;
    
    return false;
}

let $Botonuserdata=document.querySelector("#botonuserdata");
$Botonuserdata.onclick = function () {
    let nombreUsuario = document.getElementById("nombreusuario").value;
    let nombreUsuario2 = document.getElementById("segundonombreusuario").value;
    let apellidoUsuario = document.getElementById("apellidousuario").value;
    let edadUsuario= String(document.getElementById("edadusuario").value);
    document.getElementById("header1").innerHTML="Bienvenido " + nombreUsuario + "!";
    let userData = nombreUsuario + " "+ nombreUsuario2 + " " + apellidoUsuario + " " + edadUsuario;
    document.getElementById("inputuserdata").value=userData;
    return false;
    

}