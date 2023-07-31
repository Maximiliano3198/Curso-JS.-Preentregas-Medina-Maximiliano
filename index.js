let personas = [];

class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
}

function presentacion() {
    while (true) {
        let nombre = prompt("Ingresa tu nombre");
        let edad = prompt("Ingresa tu edad");
        let genero = prompt("Ingresa tu género:\nH. Hombre\nM. Mujer");

        if (nombre === "" || edad === "" || genero === "") {
            alert("No ingresaste algún valor");
        } else if (genero.toUpperCase() !== "H" && genero.toUpperCase() !== "M") {
            alert("El valor ingresado para género no es válido. Por favor, ingresa 'H' para Hombre o 'M' para Mujer.");
        } else if (isNaN(edad)) {
            alert("El valor ingresado para edad no es válido. Por favor, ingresa un número.");
        } else {
            let generoTexto = (genero.toUpperCase() === "H") ? "Hombre" : "Mujer";
            let persona = new Persona(nombre, edad, generoTexto);
            alert(`Ingresaste como: ${nombre}`);
            personas.push(persona);
            break;
        }
    }
}

presentacion();

function tmgeneral() {
    alert("la tasa de mortalidad general es de 7 personas en 100 por las diversas causas en un día")
    tablaCont()
}


function tmgenero() {
    let genero = personas[personas.length - 1].genero;
    while (true) {
        if (genero === "Hombre") {
            alert("La tasa de mortalidad masculina es de 4 personas en 100 por las diversas causas en un día");
            tablaCont();
            break;
        } else if (genero === "Mujer") {
            alert("La tasa de mortalidad femenina es de 3 personas en 100 por las diversas causas en un día");
            tablaCont();
            break;
        } else {
            alert("Datos invalidos ");
            break;
        }
    }
}


function tmedad() {
    let edad = personas[personas.length - 1].edad;
    while (true) {
        if (edad >= 11 && edad <= 25) {
            alert(`La tasa de mortalidad en el rango etario de 11-25 años (${personas[personas.length - 1].edad}) es de 12 personas en 100 por las diversas causas en un día`);
            tablaCont();
            break;
        } else if (edad >= 26 && edad <= 50) {
            alert(`La tasa de mortalidad en el rango etario de 26-50 años (${personas[personas.length - 1].edad}) es de 16 personas en 100 por las diversas causas en un día`);
            tablaCont();
            break;
        } else if (edad >= 51 && edad <= 99) {
            alert(`La tasa de mortalidad en el rango etario de 51-99 años (${personas[personas.length - 1].edad}) es de 20 personas en 100 por las diversas causas en un día`);
            tablaCont();
            break;
        } else {
            alert("No tenemos registro para esa edad, lo sentimos.");
            tablaCont();
        }
    }
}

function tmgye() {
    let genero = personas[personas.length - 1].genero;
    let edad = personas[personas.length - 1].edad;

    if (genero === "Hombre") {
        alert("La tasa de mortalidad masculina es de 4 personas en 100 por las diversas causas en un día");
    } else if (genero === "Mujer") {
        alert("La tasa de mortalidad femenina es de 3 personas en 100 por las diversas causas en un día");
    } else {
        alert("Datos inválidos para el género");
        return;
    }

    if (edad >= 11 && edad <= 25) {
        alert(`La tasa de mortalidad en el rango etario de 11-25 años (${personas[personas.length - 1].edad}) es de 12 personas en 100 por las diversas causas en un día`);
    } else if (edad >= 26 && edad <= 50) {
        alert(`La tasa de mortalidad en el rango etario de 26-50 años (${personas[personas.length - 1].edad}) es de 16 personas en 100 por las diversas causas en un día`);
    } else if (edad >= 51 && edad <= 99) {
        alert(`La tasa de mortalidad en el rango etario de 51-99 años (${personas[personas.length - 1].edad}) es de 20 personas en 100 por las diversas causas en un día`);
    } else {
        alert("No tenemos registro para la edad ingresada.");
        return;
    }

    tablaCont();
}


function cambiarPersonas() {
    if (personas.length === 0) {
        alert("No hay personas cargadas");
    } else {
        let listaPersonas = "Personas cargadas:\n";
        for (let i = 0; i < personas.length; i++) {
            listaPersonas += `${i + 1}. Nombre: ${personas[i].nombre}, Edad: ${personas[i].edad}, Género: ${personas[i].genero}\n`;
        }
        listaPersonas += "Seleccione el número de la persona con la que desea ingresar:\n";

        let seleccion = prompt(listaPersonas);
        let indice = parseInt(seleccion) - 1;

        if (isNaN(indice) || indice < 0 || indice >= personas.length) {
            alert("La selección no es válida");
        } else {
            let personaSeleccionada = personas.splice(indice, 1)[0];
            personas.push(personaSeleccionada);
            alert(`${personaSeleccionada.nombre} ha sido seleccionadx.`);
        }
    }

    tablaCont();
}


function realizarFind() {
    let confirmFind = prompt("¿Desea realizar una búsqueda? (s/n)");

    if (confirmFind.toLowerCase() === "s") {
        let letraBuscar = prompt("Ingrese la letra a buscar en el nombre:");
        let personasEncontradas = personas.filter((persona) => persona.nombre.toLowerCase().includes(letraBuscar.toLowerCase()));

        if (personasEncontradas.length > 0) {
            console.log("Se han encontrado coincidencias");
            alert("Se han encontrado coincidencias");

            personasEncontradas.forEach((personaEncontrada, index) => {
                console.log(`[${index}]`, personaEncontrada);
                alert(`[${index}] ${personaEncontrada.nombre}`);
            });

            let indexMover = prompt("Ingrese el número de la persona con la que desea ingresar:");
            indexMover = parseInt(indexMover);

            if (indexMover >= 0 && indexMover < personasEncontradas.length) {
                let personaMover = personasEncontradas.splice(indexMover, 1)[0];
                let personaEncontrada = personas.find((persona) => persona.nombre === personaMover.nombre);

                if (personaEncontrada) {
                    personas = personas.filter((persona) => persona.nombre !== personaMover.nombre);
                    personas.push(personaMover);

                    console.log(`Se ha ingresado con ${personaMover.nombre}.`);
                    alert(`Se ha ingresado con ${personaMover.nombre}.`);
                } else {
                    console.log("No se encontró la persona en la lista general.");
                    alert("No se encontró la persona en la lista general.");
                }
            } else {
                console.log("Caracter ingresado inválido.");
                alert("Caracter ingresado inválido.");
            }
        } else {
            console.log("No se encontraron personas con esa letra en el nombre.");
            alert("No se encontraron personas con esa letra en el nombre.");
        }
    }

    tablaCont();
}

function salir() {
    alert("Hasta la proxima");
}


function ejecutarOpcion(traerFuncion, mensaje) {
    alert(mensaje);
    traerFuncion();
}


function tablaCont() {
    let selectSection = prompt(`¿Qué quieres hacer, ${personas[personas.length - 1].nombre}? \n 1. Ver la tasa de mortalidad general \n 2. Ver la tasa de mortalidad según el género \n 3. Ver la tasa de mortalidad según la edad \n 4. Ver la tasa de mortalidad según género y edad \n 5. Cargar otra persona \n 6. Ver lista y cambiar la persona seleccionada \n 7. Buscar por nombre o letra y cambiar la persona seleccionada \n 8. Salir`);
    switch (selectSection) {
        case "1":
            ejecutarOpcion(tmgeneral, "Abriendo tasa de mortalidad general, presione aceptar para continuar.");
            break;
        case "2":
            ejecutarOpcion(tmgenero, "Abriendo tasa de mortalidad según género, presione aceptar para continuar.");
            break;
        case "3":
            ejecutarOpcion(tmedad, "Abriendo tasa de mortalidad según la edad, presione aceptar para continuar.");
            break;
        case "4":
            ejecutarOpcion(tmgye, "Abriendo tasa de mortalidad según género y edad, presione aceptar para continuar.");
            break;
        case "5":
            presentacion();
            tablaCont();
            break;
        case "6":
            cambiarPersonas();
            break;
         case "7":
            realizarFind();
            break;
        case "8":
            salir();
            break;
        default:
            alert("No has introducido un número válido");
            tablaCont();
            break;
    }
}
tablaCont();