/*function saludo() {
    alert("Bienvenido al espacio virtual del Consejo Comunal Bicentenario");
}
window.onload=saludo();*/
function descripcion() {
    alert("Complete correctamente todos los campos");
}
/*function descripcion2(){
    
    var registro=document.getElementsByClassName("regi");
    registro.addEventListener("click",descripcion,false);
}
window.onload=descripcion2();*/
//otra ventaja del addEventListener es -> ejemplo: 
function imago(){
    var imago=document.getElementsByClassName("imago4");
    imago.addEventListener("mouseover",crecer,false);
    imago.addEventListener("mouseout",menguar,false);
}
function crecer(){
    imago.width=225;
    imago.height=225;
}
function menguar(){
    imago.width=200;
    imago.height=200;
}
function loguin() {
    var usuario=document.getElementById("user");
    var password=document.getElementById("pass");
    usuario.addEventListener("input",validar,false);
    password.addEventListener("input",validar,false);
    validar();
}
function validar() {
    if (usuario.value=="" && password.value=="") {
        usuario.setCustomValidity("Introduce usuario o apellido");
        usuario.style.background="#FFDDDD";
        password.style.background="#FFDDDD";
    }
    else{
        usuario.setCustomValidity("");
        usuario.style.background="#DDFFFF";
        password.style.background="#DDFFFF";
    }
}
window.addEventListener("load",loguin,false);
function comienzo() {
    document.logueo.addEventListener("invalid",validacion,true);
    document.getElementById("send").addEventListener("click",enviar,false);
    document.logueo.addEventListener("input",validacion2,false);
    document.getElementById("clear").addEventListener("click",limpieza2,false);
}
function validacion() {
    var elemento=e.target;
    elemento.style.background="#FFDDDD";
}
function enviar() {
    var cuadrousuario=document.getElementById("user");
    var cuadropassword=document.getElementById("pass");
    var correcto=document.logueo.checkValidity();
    if (correcto==true) {
        document.logueo.submit();
    }
    else if (cuadrousuario.validity.valueMissing==true && cuadropassword.validity.valueMissing==true){
        alert("El usuario no puede estar vacio y la contraseña no puede estar vacia");
        user.style.background="linear-gradient(30deg, #dc143c,#a0522d,#cd5c5c)";
        pass.style.background="linear-gradient(30deg, #dc143c,#a0522d,#cd5c5c)";
    }
    if (cuadrousuario.validity.valueMissing==true || (cuadrousuario.validity.patternMismatch==true) ) {
        alert("El usuario no puede estar vacio y recuerda que debe tener minimo 8 caracteres");
        user.style.background="linear-gradient(30deg, #dc143c,#a0522d,#cd5c5c)";
    }
    if (cuadropassword.validity.valueMissing==true || cuadropassword.validity.patternMismatch==true) {
        alert("La contraseña no puede estar vacia y recuerda que dbee tener minimo 8 caracteres");
        pass.style.background="linear-gradient(30deg, #dc143c,#a0522d,#cd5c5c)";
    }
} 
function validacion2(e) {
    var elemento2=e.target;
    if (elemento.validity.valid==true) {
        elemento2.style.background="#FFFFFF"
    }
    else{
        elemento2.style.background="#FFFFFF"
    }
}
function limpieza2(){
    alert("El formulario se limpio correctamente");
    user.style.background='none';
    pass.style.background='none';
}
window.addEventListener("load",comienzo,false);
function comienzo2() {
    document.getElementById("enviar").addEventListener("click",enviar2,false);
    document.getElementById("limpiar").addEventListener("click",limpieza,false);
}
function enviar2() {
    var user=document.getElementById("usuario");
    var pass=document.getElementById("contraseña");
    var nombre=document.getElementById("nombre");
    var apellido=document.getElementById("apellido");
    var email=document.getElementById("correo");
    var telefono=document.getElementById("telefono");
    var codigo=document.getElementById("codigo");
    var localidad=document.getElementById("localidad");
    var direccion=document.getElementById("direccion");
    var sexo=document.getElementById("sexo");
    var cedula=document.getElementById("cedula");
    var bdate=document.getElementById("nacimiento");
    var correcto=document.registro.checkValidity();
    if (correcto==true) {
        correcto.registro.submit();
    }
    else{
        if (user.validity.valueMissing==true || pass.validity.valueMissing==true || nombre.validity.valueMissing==true || apellido.validity.valueMissing==true || email.validity.valueMissing==true || telefono.validity.valueMissing==true || codigo.validity.valueMissing==true || localidad.validity.valueMissing==true || direccion.validity.valueMissing==true || sexo.validity.valueMissing==true || cedula.validity.valueMissing==true || bdate.validity.valueMissing==true) {
            if (user.validity.valueMissing==true) {
                alert("El campo del usuario no puede estar vacio");
                usuario.style.background="linear-gradient(30deg, #dc143c,#a0522d,#cd5c5c)";
            }
            else if (user.validity.valueMissing==false){
                alert("");
                usuario.style.background='none';
            }
            if (pass.validity.valueMissing==true) {
                alert("El campo de la contraseña no puede estar vacio");
                contraseña.style.background="linear-gradient(30deg, #dc143c,#a0522d,#cd5c5c)";
            }
            else{
                contraseña.style.background="none";
            }
            if (nombre.validity.valueMissing==true) {
                alert("El campo del nombre no puede estar vacio");
                nombre.style.background="linear-gradient(30deg, #dc143c,#a0522d,#cd5c5c)";
            }
            else{
                nombre.style.background="none";
            }
            if (apellido.validity.valueMissing==true) {
                alert("El campo del apellido no puede estar vacio");
                apellido.style.background="linear-gradient(30deg, #dc143c,#a0522d,#cd5c5c)";
            }
            else{
                apellido.style.background="none";
            }
            if (email.validity.valueMissing==true) {
                alert("El campo del correo electronico no puede estar vacio");
                correo.style.background="linear-gradient(30deg, #dc143c,#a0522d,#cd5c5c)";
            }
            else{
                correo.style.background="none";
            }
            if (telefono.validity.valueMissing==true) {
                alert("El campo del telefono no puede estar vacio");
                telefono.style.background="linear-gradient(30deg, #dc143c,#a0522d,#cd5c5c)";
            }
            else{
                telefono.style.background="none";
            }
            if (codigo.validity.valueMissing==true) {
                alert("El campo del codigo telefonico no puede estar vacio");
                codigo.style.background="linear-gradient(30deg, #dc143c,#a0522d,#cd5c5c)";
            }
            else{
                codigo.style.background="none";
            }
            if (localidad.validity.valueMissing==true) {
                alert("El campo de la localidad no puede estar vacio");
                localidad.style.background="linear-gradient(30deg, #dc143c,#a0522d,#cd5c5c)";
            }
            else{
                localidad.style.background="none";
            }
            if (direccion.validity.valueMissing==true) {
                alert("El campo de la direccion no puede estar vacio");
                direccion.style.background="linear-gradient(30deg, #dc143c,#a0522d,#cd5c5c)";
            }
            else{
                direccion.style.background="none";
            }
            if (sexo.validity.valueMissing==true) {
                alert("El campo del sexo no puede estar vacio");
                sexo.style.background="linear-gradient(30deg, #dc143c,#a0522d,#cd5c5c)";
            }
            else{
                sexo.style.background="none";
            }
            if (cedula.validity.valueMissing==true) {
                alert("El campo de la cedula no puede estar vacio");
                cedula.style.background="linear-gradient(30deg, #dc143c,#a0522d,#cd5c5c)";
            }
            else{
                cedula.style.background="none";
            }
            if (bdate.validity.valueMissing==true) {
                alert("El campo de la fecha de nacimiento no puede estar vacio");
                nacimiento.style.background="linear-gradient(30deg, #dc143c,#a0522d,#cd5c5c)";
            }
            else{
                nacimiento.style.background="none";
            }
        }
        else if(user.validity.valueMissing==false || pass.validity.valueMissing==false || nombre.validity.valueMissing==false || apellido.validity.valueMissing==false || email.validity.valueMissing==false || telefono.validity.valueMissing==false || codigo.validity.valueMissing==false || localidad.validity.valueMissing==false || direccion.validity.valueMissing==false || sexo.validity.valueMissing==false || cedula.validity.valueMissing==false || bdate.validity.valueMissing==false){
            if (user.validity.valueMissing==false) {
                usuario.style.background="none";
                
            }
            if (pass.validity.valueMissing==false) {
                contraseña.style.background="none";
                
            }
            if (nombre.validity.valueMissing==false) {
                nombre.style.background="none";
                
            }
            if (apellido.validity.valueMissing==false) {
                apellido.style.background="none";
                
            }
            if (email.validity.valueMissing==false) {
                correo.style.background="none";
                
            }
            if (telefono.validity.valueMissing==false) {
                telefono.style.background="none";
                
            }
            if (codigo.validity.valueMissing==false) {
                codigo.style.background="none";
                
            }
            if (localidad.validity.valueMissing==false) {
                localidad.style.background="none";
                
            }
            if (direccion.validity.valueMissing==false) {
                direccion.style.background="none";
                
            }
            if (sexo.validity.valueMissing==false) {
                sexo.style.background="none";
                
            }
            if (bdate.validity.valueMissing==false) {
                nacimiento.style.background="none";
                
            }
        }
    }



}
function limpieza(){
    alert("El formulario se limpio exitosamente");
    usuario.style.background='none';
    contraseña.style.background='none';
    nombre.style.background='none';
    apellido.style.background='none';
    correo.style.background='none';
    telefono.style.background='none';
    /*codigo.style.background='none';
    localidad.style.background='none';*/
    direccion.style.background='none';
    sexo.style.background='none';
    cedula.style.background='none';
    nacimiento.style.background='none';

    /*user.value=null;
    pass.value=null;
    nombre.value=null;
    apellido.value=null;
    email.value=null;
    telefono.value=null;
    codigo.value=null;
    localidad.value=null;
    direccion.value=null;
    sexo.value=null;
    cedula.value=null;
    bdate.value=null;*/
}
window.addEventListener("load",comienzo2,false);