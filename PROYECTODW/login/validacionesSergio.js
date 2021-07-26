    var bandera=0;
    
    function mostrarContraseña() {
        var x = document.getElementById("txtContraseña");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }


    function validar(){
        var resultado = true;
        var email = document.getElementById("txtCorreo");
        var contraseña = document.getElementById("txtContraseña");
        var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        var clave = /^[a-z 0-9]{8,16}$/g;

        limpiarMensajes();

        //validacion de correo
        if (email.value === "") {
            resultado = false;
            mensaje("Email es requerido", email);
        } else if (!correo.test(email.value)) {
            resultado = false;
            mensaje("Email no es correcto", email);
        }   

        if (contraseña.value === "") {
            resultado = false;
            mensaje("Contraseña requerida", contraseña);
        } else if (!clave.test(contraseña.value)) {
            resultado = false;
            mensaje("Mínimo 8 caractéres", contraseña);
        }   

        return resultado;
    }

    function validarRecuperacion(){
        var resultado = true;
        var email = document.getElementById("txtCorreoRecuperacion");
        var celular = document.getElementById("txtTelefonoRecuperacion");
        var cedula = document.getElementById("txtCedula");
        var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        var celularRegex= /^[0-9]{10}$/g;
        var cedulaRegex= /^[0-9]{10}$/g;

        limpiarMensajes();

        if (email.value === "") {
            resultado = false;
            mensaje("Email es requerido", email);
        } else if (!emailRegex.test(email.value)) {
            resultado = false;
            mensaje("Email no es correcto", email);
        }   

        if (celular.value === "") {
            resultado = false;
            mensaje("Se necesita un número de celular válido", celular);
        } else if (!celularRegex.test(celular.value)) {
            resultado = false;
            mensaje("Caractéres inválidos o no cumple los 10 dígitos", celular);
        }   

        if (cedula.value === "") {
            resultado = false;
            mensaje("Se necesita una cédula válida", cedula);
        } else if (!cedulaRegex.test(cedula.value)) {
            resultado = false;
            mensaje("Caractéres inválidos o no comple los 10 dígitos", cedula);
        }   

        return resultado;
    }

    function validarBusqueda(){
        var resultado = true;
        var busqueda = document.getElementById("txtBusqueda");
        var categoria = document.getElementById("categoria");
        var busquedaRegex = /[a-z 0-9]/i;

        limpiarMensajes();

        //validacion de busqueda
        if (busqueda.value === "") {
            resultado = false;
            mensaje("Ingrese el dispositivo", busqueda);
        } else if (!busquedaRegex.test(busqueda.value)) {
            resultado = false;
            mensaje("Caractéres incorrectos", busqueda);
        }   

        //validacion de haber escogido una categoria
        if (categoria.value === "value1") {
            resultado = false;
            mensajeCategoria("Por favor, escoja una categoría", categoria);
        }

        return resultado;
    }

    function mensaje(cadenaMensaje, elemento) {
        elemento.focus();
        var nodoPadre = elemento.parentNode;
        var nodoMensaje = document.createElement("span");
        nodoMensaje.innerHTML = cadenaMensaje;
        nodoMensaje.style.color = "red";
        nodoMensaje.display = "block";
        nodoMensaje.setAttribute("class", "mensaje");
    
        nodoPadre.appendChild(nodoMensaje);
    
    }

    function mensajeCategoria(cadenaMensaje, elemento) {
        elemento.focus();
        var nodoPadre = elemento.parentNode;
        var nodoMensaje = document.createElement("span");
        nodoMensaje.innerHTML = cadenaMensaje;
        nodoMensaje.style.color = "red";
        nodoMensaje.display = "block";
        nodoMensaje.setAttribute("class", "mensaje");
        nodoMensaje.style.paddingLeft="29%";
    
        nodoPadre.appendChild(nodoMensaje);
    
    }


    function limpiarMensajes() {
        var mensajes = document.querySelectorAll(".mensaje");
        for (let i = 0; i < mensajes.length; i++) {
            mensajes[i].remove();// remueve o elimina un elemento de mi doc html
        }
    
    }

    function revelar(){
        
        var lblRecuperarContra=document.getElementById("recuperarContraseña");
        var formulario = document.getElementById("formularioRecuperacion");
        if(bandera===0){
            lblRecuperarContra.style.color="black";
            formulario.style.maxHeight="100%";
            formulario.style.position="relative";
            formulario.style.marginTop="1%";
            bandera=1;
        }else{
            lblRecuperarContra.style.color="#f05023";
            formulario.style.maxHeight="0%";
            formulario.style.position="absolute";
            formulario.style.marginTop="0%";
            bandera=0;
        }
        
    }
