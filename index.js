//solo pa' usar while (el alert solo para replicar el meme)
let nombre = prompt("Ingrese su nombre")
console.log (`Ingresó: ${nombre}`)
while (nombre == ""){
    alert("El usuario ingresó un dato invalido")
    nombre = prompt("Ingrese un nombre")
    if (nombre != ""){
        console.log (`Bienvenido ${nombre}`)
        alert(`${nombre} su nombre es Bienvenido`)
    }
}



//Ví tarde como hacer el switch :c
let edad = Number(prompt("Edad"))
if (edad >=11 && edad <= 25){
let personas = Number(prompt("Escriba una cantidad de personas para calcular el estimado de afectados por problemas cardíacos en su mismo rango de edad"))
    let poblacion = Number(personas * 35 / 100)
    let porcentaje = Number(poblacion * 100 / personas)
    console.log (`${porcentaje}% en el rango etario (${poblacion} personas de ${personas})`)
    alert (`${porcentaje}% en el rango etario (${poblacion} personas de ${personas}) son afectados por problemas cardíacos`)
}else if(edad >=26 && edad <= 50){
    let personas = Number(prompt("Escriba una cantidad de personas para calcular el estimado de afectados por problemas cardíacos en su mismo rango de edad"))
        let poblacion = Number(personas * 29 / 100)
        let porcentaje = Number(poblacion * 100 / personas)
        console.log (`${porcentaje}% en el rango etario (${poblacion} personas de ${personas})`)
        alert (`${porcentaje}% en el rango etario (${poblacion} personas de ${personas}) son afectados por problemas cardíacos`)
}else if (edad >=51 && edad <= 99){
    let personas = Number(prompt("Escriba una cantidad de personas para calcular el estimado de afectados por problemas cardíacos en su mismo rango de edad"))
        let poblacion = Number(personas * 20 / 100)
        let porcentaje = Number(poblacion * 100 / personas)
        console.log (`${porcentaje}% en el rango etario (${poblacion} personas de ${personas})`)
        alert (`${porcentaje}% en el rango etario (${poblacion} personas de ${personas}) son afectados por problemas cardíacos`)
}else if (edad >= 1 && edad <= 10){
    alert (`No hay datos para ese rango etario`)
}else {
    alert(`El número ingresado no es valido, vuelva a intentarlo.`)
}


//for para poner algo pq no sabia que ponerle 
let Total = Number(prompt("Escribe un numero del cual quieres sacar los porcentajes de 5% en 5%"))
 for (let j =1; j <= 5; j++){
        let porcentaje = Number(j * 5)
        let resultado = Number(Total * porcentaje / 100)
        console.log(`${Total} * ${porcentaje} / ${100} = ${Total * porcentaje / 100}`)
        alert (`${resultado} es igual al ${porcentaje}% de ${Total}`)
        if (Total == ""){
            alert(`Todos los porcentajes de 0 o nada siguen siendo 0 ¬¬`)
            break
        }
}


function valoracion (a){
    switch (a){
        case '0':
            return 'Sentimos tu mala experiencia. Estamos trabajando para mejorar tu experiencia.';
        case '1':
            return 'Sentimos tu mala experiencia. Estamos trabajando para mejorar tu experiencia.';
        case '2':
            return 'Sentimos tu experiencia. Estamos trabajando para mejorar tu experiencia.';
        case '3':
            return 'Estamos trabajando para mejorar tu experiencia.';
        case '4':
            return '¡Gracias! Estamos trabajando para mejorar tu experiencia.';
        case '5':
            return '¡Muchas gracias!';
        default:
            return 'Caracter invalido';
    }
}

//tuve que meter un if al comienzo porque no me tomaba la funcion si cumplia en el primer intento con la condicion dentro del while
let val = prompt("Por favor deja tu valoración conforme a tu experiencia. (0 al 5)")
if (val <= 5){
    let dev = valoracion (val)
    alert(dev)}
while (val >= 6){
    alert("Por favor ingrese un numero del 0 al 5")
    val = prompt("Por favor deja tu valoración conforme a tu experiencia. (0 al 5)")
    if (val <= 5){
        let dev = valoracion (val)
        alert(dev)}
}console.log(val)