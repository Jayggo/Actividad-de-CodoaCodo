var usuario = document.getElementById('usuario');
var clave = document.getElementById('clave');
var boton = document.getElementById('boton');

boton.addEventListener('click', ()=>{

    if (validarUsuario(usuario) && validarClave(clave)){

        alert('Campo correctamente lleno!');

   }


});



function validarUsuario(usuario){

    if (usuario.value == '' || usuario.value == ' '){

        alert('Debe rellenar el campo usuario');
        return false;
    }else if (!validoArroba(usuario)){

            alert('El campo usuario debe contener un arroba');
        return false;

    }else{

        return true;

    }

}

function validoArroba(usuario){

    let valor = usuario.value;

        for (let i =0; i<=valor.length; i++){

            if (valor.substring(i,i+1) == '@'){

                return true;

            }

        }
    

}

function validarClave(clave){

    if (clave.value == '' || clave.value == ' '){

        alert('Debe rellenar el campo clave');
        return false;
    }else{

        return true;

    }

}