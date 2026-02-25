//Punto 4, Parte A:

// Punto 4.23: Creamos un objeto con las propiedades del estudiante
const estudiante = {

    // Propiedades del estudiante
    nombre: "Juan",
    apellido: "Ortiz",
    codigo: "20250001",
    programa: "Ingeniería de Software TdeA",
    semestre: 4,

    // Arreglo de notas que contiene objetos con materia y calificacion
    notas: [
        {materia: "Programacion", calificacion: 4.0},
        {materia: "Matematicas", calificacion: 3.5},
        {materia: "Bases de Datos", calificacion: 4.3}
    ],

    activo: true

};

// Punto 4.24: Creamos funciones para trabajar con los datos del estudiante

// Función: calcularPromedio()
// Retorna: Número promedio o 0 si no existen notas
function calcularPromedio() {
    // Verificamos si el arreglo de notas está vacío
    if (estudiante.notas.length === 0) {
        return 0;
    }

    let suma = 0;

    // Usamos un ciclo for para sumar todas las calificaciones
    for (let i = 0; i < estudiante.notas.length; i++) {
        suma = suma + estudiante.notas[i].calificacion;
    }

    // Dividimos la suma total entre la cantidad de notas para obtener el promedio
    let promedio = suma / estudiante.notas.length;

    return promedio;
}

// Función: obtenerNombreCompleto()
// Retorna: String con el nombre y apellido completo
function obtenerNombreCompleto() {
    // Concatenamos el nombre y apellido del estudiante
    return estudiante.nombre + " " + estudiante.apellido;
}

// Función: estaAprobado()
// Retorna: true si el promedio es mayor o igual a 3.0, false en caso contrario
function estaAprobado() {
    // Obtenemos el promedio actual del estudiante
    let promedio = calcularPromedio();

    // Verificamos si el promedio es suficiente para estar aprobado
    return promedio >= 3.0;
}

// Función: agregarNota()
// Agrega una nueva nota al arreglo de notas del estudiante
function agregarNota(materia, calificacion) {
    // Verificamos que la materia sea texto y la calificacion sea un número
    if (typeof materia !== "string" || typeof calificacion !== "number") {
        console.log("Error: datos invalidos al agregar nota.");
        return;
    }

    // Creamos un objeto con la materia y la calificacion
    let nuevaNota = {
        materia: materia,
        calificacion: calificacion
    };

    // Agregamos la nueva nota al arreglo de notas del estudiante
    estudiante.notas.push(nuevaNota);
}

// Función: toString()
// Retorna: String con toda la información del estudiante formateada
function toString() {
    // Creamos una variable para almacenar la información de las notas
    let informacionNotas = "";

    // Usamos un ciclo for para recorrer todas las notas
    for (let i = 0; i < estudiante.notas.length; i++) {
        // Agregamos cada nota a la variable informacionNotas
        informacionNotas +=
            "- " + estudiante.notas[i].materia +
            ": " + estudiante.notas[i].calificacion + "\n";
    }

    // Construimos el texto con toda la información del estudiante
    let texto =
        "INFORMACION DEL ESTUDIANTE \n" +
        "Nombre completo: " + obtenerNombreCompleto() + "\n" +
        "Codigo: " + estudiante.codigo + "\n" +
        "Programa: " + estudiante.programa + "\n" +
        "Semestre: " + estudiante.semestre + "\n" +
        "Activo: " + estudiante.activo + "\n" +
        "Promedio: " + calcularPromedio().toFixed(2) + "\n" +
        "Notas:\n" + informacionNotas;

    return texto;
}

// Punto 4.25: Demostracion de las funciones

// Llamamos a la función para obtener el nombre completo
console.log("Nombre completo:");
console.log(obtenerNombreCompleto());

// Calculamos y mostramos el promedio actual del estudiante
console.log("\nPromedio actual:");
console.log(calcularPromedio());

// Verificamos si el estudiante está aprobado
console.log("\nEsta aprobado?");
console.log(estaAprobado());

// Agregamos una nueva nota a las existentes
console.log("\nAgregar nueva nota");
agregarNota("Física", 2.8);

// Mostramos el nuevo promedio después de agregar la nota
console.log("\nNuevo promedio ");
console.log(calcularPromedio());

// Mostramos toda la información del estudiante
console.log("\nInformacion del estudiante:");
console.log(toString());
