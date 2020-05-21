const $botonCalcularAnual = document.querySelector("#botonsueldoanual");
$botonCalcularAnual.onclick = function(){


    let sueldoMensual=document.getElementById("inputsueldomensual").value;
    let sueldoAnual=sueldoMensual*12;
    document.getElementById("showsueldoanual").value= sueldoAnual;
    
    return false;
}

const $botonCalcularMensual = document.querySelector("#botonsueldomensual");
$botonCalcularMensual.onclick = function(){


    let sueldoAnual=document.getElementById("inputsueldomensual").value;
    let sueldoMensual=sueldoAnual/12;
    document.getElementById("showsueldoanual").value= sueldoMensual;
    
    return false;
}

let $Botonuserdata=document.querySelector("#botonuserdata");
$Botonuserdata.onclick = function () {
    let nombreUsuario = document.getElementById("nombreusuario").value;
    let nombreUsuario2 = document.getElementById("segundonombreusuario").value;
    let apellidoUsuario = document.getElementById("apellidousuario").value;
    let edadUsuario= String(document.getElementById("edadusuario").value);
    let sueldoMensualUsuario=String(document.getElementById("showsueldoanual").value);
    document.getElementById("header1").innerHTML="Bienvenid@ " + nombreUsuario + "!";
    
    let userNombre ="Nombres y Apellido: " +  nombreUsuario + " "+ nombreUsuario2 + " " + apellidoUsuario ;
    let userEdad=edadUsuario;
    let userSueldo=sueldoMensualUsuario;
    
    let showUserData = document.createElement("input");
        showUserData.value=userNombre;
        showUserData.className = "input-user-data";
        document.getElementById("userdata").appendChild(showUserData);

    let showUserEdad=document.createElement("input");
        showUserEdad.value="Edad: " + edadUsuario;
        showUserEdad.className="input-user-data";
        document.getElementById("userdata").appendChild(showUserEdad);    

    let showUserSueldo = document.createElement("input");
        showUserSueldo.value="Sueldo: "+ userSueldo;
        showUserSueldo.className="input-user-data";
        document.getElementById("userdata").appendChild(showUserSueldo);    


    let $p  = document.createElement("input");    
    $p.id="input-break";
        document.getElementById("userdata").appendChild($p);
    
   return false;
    

}
