//Punto 4, Parte B:

// Punto 4.26: Función constructora Curso con propiedades iniciales
function Curso(nombre, codigo, creditos) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.creditos = creditos;
    this.inscritos = []; // Arreglo que almacena los estudiantes inscritos en el curso
}

// Métodos agregados al prototipo de Curso

// Método: inscribirEstudiante(estudiante)
// Agrega un estudiante al arreglo de inscritos del curso
Curso.prototype.inscribirEstudiante = function(estudiante) {
    // Agregamos el estudiante al arreglo de inscritos
    this.inscritos.push(estudiante);
};

// Método: obtenerListado()
// Retorna: Array con los nombres completos de todos los estudiantes inscritos
Curso.prototype.obtenerListado = function() {
    // Creamos un arreglo vacío para almacenar los nombres completos
    let lista = [];

    // Usamos un ciclo for para recorrer todos los estudiantes inscritos
    for (let i = 0; i < this.inscritos.length; i++) {
        // Agregamos el nombre completo de cada estudiante a la lista
        lista.push(this.inscritos[i].obtenerNombreCompleto());
    }

    return lista;
};

// Método: calcularPromedioGrupo()
// Retorna: Número con el promedio de calificaciones de todos los estudiantes del curso
Curso.prototype.calcularPromedioGrupo = function() {
    // Verificamos si no hay estudiantes inscritos
    if (this.inscritos.length === 0) {
        return 0;
    }

    let suma = 0;

    // Usamos un ciclo for para sumar los promedios de todos los estudiantes
    for (let i = 0; i < this.inscritos.length; i++) {
        suma += this.inscritos[i].calcularPromedio();
    }

    // Dividimos la suma entre la cantidad de estudiantes para obtener el promedio
    return suma / this.inscritos.length;
};

// Método: estudianteDestacado()
// Retorna: Objeto del estudiante con el promedio más alto
Curso.prototype.estudianteDestacado = function() {
    // Verificamos si no hay estudiantes inscritos
    if (this.inscritos.length === 0) {
        return null;
    }

    // Asignamos el primer estudiante como el mejor inicialmente
    let mejor = this.inscritos[0];

    // Usamos un ciclo for para comparar los promedios de todos los estudiantes
    for (let i = 1; i < this.inscritos.length; i++) {
        // Si el estudiante actual tiene un promedio mayor, lo asignamos como el mejor
        if (this.inscritos[i].calcularPromedio() > mejor.calcularPromedio()) {
            mejor = this.inscritos[i];
        }
    }

    return mejor;
};

// Creamos objetos estudiante como ejemplos

// Primer estudiante con sus propiedades y métodos
let estudiante1 = {
    nombre: "Kevin",
    apellido: "Velez",
    universidad: "TdeA",
    // Arreglo de notas con materia y calificación
    notas: [
        { materia: "Programacion", calificacion: 4.7 },
        { materia: "Matematicas", calificacion: 4.2 }
    ],
    // Función para obtener el nombre completo del estudiante
    obtenerNombreCompleto: function() {
        return this.nombre + " " + this.apellido;
    },
    // Función para calcular el promedio de calificaciones del estudiante
    calcularPromedio: function() {
        let suma = 0;
        // Usamos un ciclo for para sumar todas las calificaciones
        for (let i = 0; i < this.notas.length; i++) {
            suma += this.notas[i].calificacion;
        }
        // Dividimos la suma entre la cantidad de notas para obtener el promedio
        return suma / this.notas.length;
    }
};

// Segundo estudiante con sus propiedades y métodos
let estudiante2 = {
    nombre: "Juan",
    apellido: "Ortiz",
    universidad: "TdeA",
    // Arreglo de notas con materia y calificación
    notas: [
        { materia: "Programacion", calificacion: 3.5 },
        { materia: "Matematicas", calificacion: 3.9 }
    ],
    // Función para obtener el nombre completo del estudiante
    obtenerNombreCompleto: function() {
        return this.nombre + " " + this.apellido;
    },
    // Función para calcular el promedio de calificaciones del estudiante
    calcularPromedio: function() {
        let suma = 0;
        // Usamos un ciclo for para sumar todas las calificaciones
        for (let i = 0; i < this.notas.length; i++) {
            suma += this.notas[i].calificacion;
        }
        // Dividimos la suma entre la cantidad de notas para obtener el promedio
        return suma / this.notas.length;
    }
};

// Creamos un curso de ejemplo y demostramos los métodos del prototipo

// Creamos una instancia del curso con su nombre, código y créditos
let curso = new Curso("Estructuras de Datos - TdeA", "ED101", 3);

// Inscribimos los estudiantes al curso utilizando el método del prototipo
curso.inscribirEstudiante(estudiante1);
curso.inscribirEstudiante(estudiante2);

// Mostramos el listado de estudiantes inscritos
console.log("Listado:");
console.log(curso.obtenerListado());

// Calculamos y mostramos el promedio del grupo
console.log("Promedio grupo:");
console.log(curso.calcularPromedioGrupo());

// Mostramos el nombre del estudiante destacado
console.log("Destacado:");
console.log(curso.estudianteDestacado().obtenerNombreCompleto());

// Punto 4.27: Métodos de Object para trabajar con propiedades

// Object.keys: Obtenemos todas las claves (nombres de propiedades) del objeto
console.log("Object.keys:");
let claves = Object.keys(estudiante1);
// Usamos un ciclo for para recorrer todas las claves
for (let i = 0; i < claves.length; i++) {
    // Mostramos la clave y su valor correspondiente
    console.log(claves[i], estudiante1[claves[i]]);
}

// Object.values: Obtenemos todos los valores de las propiedades del objeto
console.log("Object.values:");
let valores = Object.values(estudiante1);
// Usamos un ciclo for para recorrer todos los valores
for (let i = 0; i < valores.length; i++) {
    console.log(valores[i]);
}

// Object.entries: Obtenemos pares clave-valor del objeto
console.log("Object.entries:");
let entradas = Object.entries(estudiante1);
// Usamos un ciclo for para recorrer todas las entradas
for (let i = 0; i < entradas.length; i++) {
    // Cada entrada es un arreglo [clave, valor]
    console.log(entradas[i][0], entradas[i][1]);
}

// Punto 4.28: Copia por referencia y copia por valor

// Copia por referencia: Ambas variables apuntan al mismo objeto
console.log("Copia por referencia:");

let ref = estudiante1;
// Modificamos el nombre a través de la referencia
ref.nombre = "Kevin Modificado";

// Ambas variables muestran el mismo cambio porque apuntan al mismo objeto
console.log("Original:", estudiante1.nombre);
console.log("Referencia:", ref.nombre);


// Copia con Object.assign: Creamos una copia superficial del objeto
console.log("Copia con Object.assign:");

let copia1 = Object.assign({}, estudiante1);
// Modificamos el nombre en la copia
copia1.nombre = "Kevin Assign";

// El original no cambia porque copia1 es un objeto diferente
console.log("Original:", estudiante1.nombre);
console.log("Copia:", copia1.nombre);

// Copia con spread: Creamos una copia usando el operador spread
console.log("Copia con spread:");

let copia2 = { ...estudiante1 };
// Modificamos el nombre en la copia con spread
copia2.nombre = "Kevin Spread";

// El original no cambia porque copia2 es un objeto diferente
console.log("Original:", estudiante1.nombre);
console.log("Copia Spread:", copia2.nombre);