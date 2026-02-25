//Punto 2

//Parte B

//Creamos la función tabla de multiplicar
//Punto 2.11
function tablaDeMultiplicar (n,limite) {
    let contador = 1;
    while (contador < limite) { //usamos un ciclo while para ir iterando hasta el limite dado
        console.log(n + " x " + contador + " = " + (n*contador));
        contador++; //incrementamos el contador para que no se vuelva un ciclo infinito
    }
    //Punto 2.12
}
function esPrimo(n) {
    if (n <= 1) return false; //usamos esta condición para decir que los números menores o iguales a 1 no son primos
    for (let i = 2; i < n; i++) {
        if (n % i === 0)
            return false; //usamos esta condición para decir que si el número es divisible por algún número entre 2 y n-1, entonces no es primo

    }
    return true;
}
//Punto 2.13

function primosMenoresA(limite) {
    let primos = []; //usamos un array para almacenar los números primos menores al limite dado
    for (let i = 2; i < limite; i++) { //usamos un ciclo for par ir verificando cada número
        if (esPrimo(i)) {
            primos.push(i); //usamos esta condición para agregar los números primos a un array
        }
    }
    return primos;
}

//LLamamos a las funciones

console.log("Tabla del 5 hasta 10:");
tablaDeMultiplicar(2, 11);

console.log("El número 7 primo?");
console.log(esPrimo(7));

console.log("Primos menores a 17:");
console.log(primosMenoresA(20));