//solo pa' usar while (el alert solo para replicar el meme)
let nombre = prompt("ingrese su nombre")
console.log (`ingresó: ${nombre}`)
while (nombre == ""){
    alert("el usuario ingresó un dato invalido")
    nombre = prompt("Ingrese un nombre")
    if (nombre != ""){
        console.log (`Bienvenido ${nombre}`)
        alert(`${nombre} su nombre es Bienvenido`)
    }
}



//Ví tarde como hacer el switch :c
let edad = Number(prompt("edad"))
if (edad >=11 && edad <= 25){
let personas = Number(prompt("Escriba una cantidad de personas para calcular el porcentaje estimado de afectados por problemas cardíacos"))
    let poblacion = Number(personas * 35 / 100)
    let porcentaje = Number(poblacion * 100 / personas)
    console.log (`${porcentaje}% en el rango etario (${poblacion} personas de ${personas})`)
    alert (`${porcentaje}% en el rango etario (${poblacion} personas de ${personas})`)
}else if(edad >=26 && edad <= 50){
    let personas = Number(prompt("Escriba una cantidad de personas para calcular el porcentaje estimado de afectados por problemas cardíacos"))
        let poblacion = Number(personas * 29 / 100)
        let porcentaje = Number(poblacion * 100 / personas)
        console.log (`${porcentaje}% en el rango etario (${poblacion} personas de ${personas})`)
        alert (`${porcentaje}% en el rango etario (${poblacion} personas de ${personas})`)
}else if (edad >=51 && edad <= 99){
    let personas = Number(prompt("Escriba una cantidad de personas para calcular el porcentaje estimado de afectados por problemas cardíacos"))
        let poblacion = Number(personas * 20 / 100)
        let porcentaje = Number(poblacion * 100 / personas)
        console.log (`${porcentaje}% en el rango etario (${poblacion} personas de ${personas})`)
        alert (`${porcentaje}% en el rango etario (${poblacion} personas de ${personas})`)
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
}
