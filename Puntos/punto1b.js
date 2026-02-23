//Punto 1,Parte B:

//Punto 1.4:
//Coercion implicita
console.log("5" + 3); // Cuando hay un string y se usa el operador "+" significa concatenacion, por lo que JavaScript convierte todo a String

console.log("5" - 3); // En este caso el operador "-" no sirve para concatenar, por lo que JavaScript intenta convertir ambos valores a numeros

console.log("5" * "2") // Parecido al anterior caso, el operador "*" tambien obliga a que JavaScript convierta ambos valores a numero

console.log(true + 1) // true significa "1" en valor numerico, por lo que se haria la operacion de 1 + 1

console.log(false + "JS") // Igual al primer caso, hay un string y el operador "+", JavaScript convierte los valores en texto y los concatena

console.log(null + 1) // null en valor numerico es "0", se hace la operacion 0 + 1

//Punto 1.5
function convertirDatos(valor) {
    return {
        numero: Number(valor),
        cadena: String(valor),
        booleano: Boolean(valor),

    }
}

//Ponemos a prueba la funcion
console.log("\nPrueba de la funcion del punto 1.5:")
console.table(convertirDatos("1"));

//Punto 1.6
function compararValores(a,b){

    console.log("Valores ingresados:\n a = " + a + "\n b = " + b); //Esto mostrara en consola los valores que ingreso el usuario

    // Mostraremos en formato boolean que operador fue el que se activo
    console.log("\nResultado con \"===\"");
    console.log(a === b);

    console.log("\nResultado con \"==\"");
    console.log(a == b);

    //Daremos una conclusion final explicando a la vez la diferencia entre "==" y "==="
    console.log("\nComparacion final:")
    if(a === b){
        return "Contienen el mismo valor y ademas el mismo tipo de dato"
    }else if(a == b){
        return "Contienen el mismo valor pero diferente tipo de dato"
    }else{
        return "No son iguales ni en valor ni en tipo"
    }
}

//Ponemos a prueba la funcion
console.log("\nPrueba de la funcion del punto 1.6:")
console.log(compararValores(1,"1"))

