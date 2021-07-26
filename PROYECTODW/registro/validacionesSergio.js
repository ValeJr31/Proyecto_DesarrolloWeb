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
        var contraseña2 = document.getElementById("txtContraseña2");
        var terminos = document.getElementById("chkTerminos");
        var celularRegistro = document.getElementById("txtTelefono");
        var cedulaRegistro = document.getElementById("txtCedulaRegistro");
        var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        var clave = /^[a-z 0-9]{8,16}$/gi;
        var clave2 = /^[a-z 0-9]{8,16}$/gi;
        var numero = /^(09)\d{8}$/g;
        var cedula = /^\d{10}$/g;

        limpiarMensajes();

        //validacion de correo
        if (email.value === "") {
            resultado = false;
            mensaje("Email es requerido", email);
        } else if (!correo.test(email.value)) {
            resultado = false;
            mensaje("Email no es correcto", email);
        }   

        //valida clave
        if (contraseña.value === "") {
            resultado = false;
            mensaje("Contraseña requerida", contraseña);
        } else if (!clave.test(contraseña.value)) {
            resultado = false;
            mensaje("Mínimo 8 caractéres", contraseña);
        }   

        //valida clave de confirmacion
        if (contraseña2.value === "") {
            resultado = false;
            mensaje("Contraseña requerida", contraseña2);
        } else if (!clave2.test(contraseña2.value)) {
            resultado = false;
            mensaje("Mínimo 8 caractéres", contraseña2);
        }   

        //verifica que la clave de confirmacion sea la misma que la clave principal
        if ((contraseña.value.length>8) && (contraseña2.value.length>8)) {
            if (contraseña.value != contraseña2.value) {
                mensaje("Las contraseñas no coinciden", contraseña);
            } 
        }

        //debe darle al check de aceptar terminos y condiciones
        if(!terminos.checked){
            mensaje("<br>Debe aceptar los términos y condiciones", terminos);
        }

        //validar celular empezado en 09
        if (celularRegistro.value === "") {
            resultado = false;
            mensaje("<br>Número requerido", celularRegistro);
        } else if (!numero.test(celularRegistro.value)) {
            resultado = false;
            mensaje("<br>No cumple los 10 dígitos", celularRegistro);
        }   

        //valida cedula
        if (cedulaRegistro.value === "") {
            resultado = false;
            mensaje("<br>Cédula requerida", cedulaRegistro);
        } else if (!cedula.test(cedulaRegistro.value)) {
            resultado = false;
            mensaje("<br>No cumple los 10 dígitos o es inválido", cedulaRegistro);
        }   
        
        if(resultado==true){
            alert("¡REGISTRO EXITOSO!");
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


