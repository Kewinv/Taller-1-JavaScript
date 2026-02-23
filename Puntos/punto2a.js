//Punto 2, Parte a

//Punto 2.7
function clasificarNota(nota) { //Creacion de la función para clasificar las notas
    let letra;
    let aprobacion;
    let estado;
    let mensaje;

    switch (true) { //Utilizamos un switch case para mayor efeciciencia de los casos

        case (nota >= 4.5 && nota <= 5.0) :
          letra =  "A";
          break;

        case ( nota >= 4.0 && nota < 4.5 ):
            letra =  "B";
            break;
        case (nota >= 3.5 && nota < 4.0):
            letra =  "C";
            break;
        case (nota >= 3.0 && nota < 3.5):
            letra =  "D";
            break;
        case (nota < 3.0):
            letra =  "E";
            break;

    }

    // Punto 2.8
    // if lo usamos para Evaluar el estado de aprobación de la materia
    if (nota >= 3){
        estado = true;
        aprobacion = "Aprobado";
    }else {
        estado = false;
        aprobacion = "Reprobado";
    }
    // Usamos otro if para evaluar el estado e imprimir un mensaje

    if (estado == true){
        mensaje = "Amigo felicidades, lo estás haciendo bien"

    }else {
        mensaje = "Te faltó un poco más de esfuerzo, ¡Sigue intentando!";
    }

    //
    return {
        letra: letra,
        estado: aprobacion,
        mensaje: mensaje,
        puntos: nota,



    }
}

//Punto 2.9
// Creamos un arreglo de notas para llamar la función

let notasArray = [0, 2.3, 4.6, 3.4, 3.2,5.0, 2.9, 4.3, 1.7 ]
let promedio;
let aprobados
let reprobados;
let alta = 0;
let baja = 100;
let suma = 0;

for (let i = 0; i < notasArray.length; i++) {
    console.log("Iteración: "+ i + "\n Valor: "+ notasArray[i]);
    console.table(clasificarNota(notasArray[i]));
    // Aqui evaluamos las notas y definimos la cantidad de aprobados y reprobados
    if(notasArray[i] >= 3.0 ){
        aprobados++ ;
    }else{
        reprobados++;
    }
     // Hacemos uso de otro if para iterar dentro del for y saber cual fue la nota más alta y más baja
    if (notasArray[i] > alta){
        alta = notasArray[i]
    }

    if(notasArray[i]<baja){
        baja = notasArray[i]
    }
    
    suma += notasArray[i];
    
}

promedio = suma/notasArray.length;

console.log("EL promedio del grupo es: " + promedio + " y la nota más baja es: "+ baja +"\n La mejor nota fue de: "+ alta);