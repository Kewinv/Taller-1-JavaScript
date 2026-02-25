// Punto bonus - integracion de todos los temas del taller
// usamos los productos del punto 3 y la funcion constructora del punto 4

// productos de la tienda (mismo array del punto 3)
const productos = [
    { nombre: "Laptop HP 15", precio: 1500000, categoria: "computadores", stock: 10, disponible: true },
    { nombre: "Samsung Galaxy S23", precio: 3200000, categoria: "celulares", stock: 10, disponible: true },
    { nombre: "Teclado mecanico", precio: 450000, categoria: "accesorios", stock: 10, disponible: true },
    { nombre: "Audifonos inalambricos", precio: 250000, categoria: "accesorios", stock: 10, disponible: true },
    { nombre: "Laptop Lenovo", precio: 1500000, categoria: "computadores", stock: 10, disponible: true },
    { nombre: "Pc gamer", precio: 2500000, categoria: "computadores", stock: 10, disponible: true },
    { nombre: "Tablet", precio: 800000, categoria: "celulares", stock: 10, disponible: true },
    { nombre: "Iphone 15", precio: 4500000, categoria: "celulares", stock: 10, disponible: true },
    { nombre: "Xiaomi redmi note 10", precio: 950000, categoria: "celulares", stock: 10, disponible: true },
    { nombre: "Reloj smart", precio: 600000, categoria: "accesorios", stock: 0, disponible: false },
];

// funcion constructora del curso (punto 4)
// recibe nombre del curso, codigo y creditos
function Curso(nombre, codigo, creditos) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.creditos = creditos;
    this.inscritos = []; // aqui guardamos los clientes inscritos
}

// inscribe un cliente al array de inscritos
Curso.prototype.inscribirCliente = function (cliente) {
    this.inscritos.push(cliente);
};

// retorna solo los nombres de los inscritos
Curso.prototype.obtenerListado = function () {
    return this.inscritos.map(function (c) {
        return c.nombre;
    });
};

// filtra los que aprobaron con nota mayor o igual a 3.5
Curso.prototype.clientesAprobados = function () {
    return this.inscritos.filter(function (c) {
        return c.nota >= 3.5;
    });
};

// calcula el promedio de notas de todos los inscritos
Curso.prototype.calcularPromedioGrupo = function () {
    let suma = 0;
    for (let i = 0; i < this.inscritos.length; i++) {
        suma += this.inscritos[i].nota;
    }
    return suma / this.inscritos.length;
};

// encuentra el cliente con la nota mas alta
Curso.prototype.clienteDestacado = function () {
    let mejor = this.inscritos[0];
    for (let i = 1; i < this.inscritos.length; i++) {
        if (this.inscritos[i].nota > mejor.nota) {
            mejor = this.inscritos[i];
        }
    }
    return mejor;
};

// clientes que se van a inscribir al curso de capacitacion
// cada uno tiene nombre, nota de la evaluacion y el producto que mas le intereso
const clientes = [
    { nombre: "Juan Jose", nota: 4.5, productoFavorito: "Laptop HP 15" },
    { nombre: "Maria Lopez", nota: 3.2, productoFavorito: "Samsung Galaxy S23" },
    { nombre: "Carlos Meza", nota: 3.8, productoFavorito: "Pc gamer" },
    { nombre: "Laura Gomez", nota: 2.9, productoFavorito: "Audifonos inalambricos" },
    { nombre: "Pedro Suarez", nota: 4.0, productoFavorito: "Iphone 15" },
    { nombre: "Sofia Rios", nota: 3.5, productoFavorito: "Tablet" },
    { nombre: "Andres Diaz", nota: 1.8, productoFavorito: "Teclado mecanico" },
    { nombre: "Valentina Cruz", nota: 4.8, productoFavorito: "Laptop Lenovo" },
];

// creamos el curso de capacitacion
const curso = new Curso("Capacitacion Tienda Tech", "CAP-101", 2);

// inscribimos a todos los clientes con un ciclo for
for (let i = 0; i < clientes.length; i++) {
    curso.inscribirCliente(clientes[i]);
}

// precio promedio del inventario usando reduce
const precioPromedio = productos.reduce(function (acc, p) {
    return acc + p.precio;
}, 0) / productos.length;

// productos que estan disponibles
const disponibles = productos.filter(function (p) {
    return p.disponible;
});

// resultados del curso
const aprobados = curso.clientesAprobados();
const reprobados = curso.inscritos.filter(function (c) {
    return c.nota < 3.5;
});
const promedio = curso.calcularPromedioGrupo();
const destacado = curso.clienteDestacado();

// reporte final con template literals
const reporte = `
=== REPORTE FINAL - ${curso.nombre} | Codigo: ${curso.codigo} ===

Inventario de la tienda:
  Total productos: ${productos.length}
  Disponibles: ${disponibles.length}
  Precio promedio: $${precioPromedio.toLocaleString("es-CO")}

Resultados del curso:
  Inscritos: ${curso.inscritos.length}
  Promedio del grupo: ${promedio.toFixed(2)}

Aprobados (nota >= 3.5): ${aprobados.length}
${aprobados.map(function (c) {
    return `  ${c.nombre} - Nota: ${c.nota} - Le intereso: ${c.productoFavorito}`;
}).join("\n")}

Reprobados: ${reprobados.length}
${reprobados.map(function (c) {
    return `  ${c.nombre} - Nota: ${c.nota}`;
}).join("\n")}

Cliente destacado: ${destacado.nombre} con nota ${destacado.nota}
`;

console.log(reporte);