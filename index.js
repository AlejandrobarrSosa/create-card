function mostrarDatos() {
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const ano = document.getElementById('anoNacimiento').value;
    const profesion = document.getElementById('profesion').value;


    if (nombre == '' || apellidos == '' || ano == '' || profesion == '') {
        alert('Debes llenar todos los campos');
        return;
    }


    const edad = calcularEdad(ano);

    if (validarEdad(edad) == false) {
        document.getElementById('tarjeta').style.display = 'none';
        alert('Debes ser mayor de edad para poder ver tu tarjeta');
        return;
    } else {
        mostrarTarjeta(nombre, apellidos, edad, profesion);
        alert('¡Muy bien! Tu tarjeta ha sido creada');
    }
}

function calcularEdad(anioNacimiento) {
    console.log(anioNacimiento);
    const edad = new Date().getFullYear() - anioNacimiento;
    return edad;
}


function validarEdad(edad) {
    if (edad < 18) {
        return false;
    } else {
        return true;
    }
}

function mostrarTarjeta(nombre, apellidos, edad, profesion) {
    document.getElementById('tarjeta').style.display = 'block';
    document.getElementById('cardNombre').innerHTML = nombre;
    document.getElementById('cardApellidos').innerHTML = apellidos;
    document.getElementById('cardAno').innerHTML = edad;
    document.getElementById('cardProfesion').innerHTML = profesion;
}
