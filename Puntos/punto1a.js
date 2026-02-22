//Parte A:

// Punto 1.1
let texto = 'Hola mundo taller 1';
let numero = 123;
let bool = true;
let nulo = null;
let indefinido = undefined;
let big = 900719925474099112345n; // bigint es un numero entero grande
let sym = Symbol("id"); //Un Symbol es un identificador unico e irrepetible.

//Punto 1.2
function analizarTipo(valor){
    // Creamos 2 variables de apoyo ya que necesitamos hacer verificaciones y operaciones.
    let tipoDato = typeof valor;
    let descripcion;

    switch(tipoDato){ //Utilizamos switch ya que es mas eficiente que un if al comparar muchas condiciones
        case "string":
            descripcion = "Cadena de texto";
            break;
        case "number":
            descripcion = "Numero";
            break;
        case "boolean":
            descripcion = "Booleano";
            break;
        case "undefined":
            descripcion = "Indefinido";
            break;
        case "object":
            descripcion = "Valor nulo";
            break;
        case "bigint":
            descripcion = "BigInt";
            break;
        case "symbol":
            descripcion = "Symbol";
            break;
        default:
            descripcion = "Tipo desconocido";
    }

    //En esta parte ya se devuelve el objeto con todo lo requerido
    return {
        valor: valor,
        tipo: tipoDato,
        esNulo: valor === null || valor === undefined, //Metodo para utilizar un if de manera no explicita
        descripcion: descripcion
    };
} // Aca termina la funcion

//Punto 1.3
//Utilizamos las variables ya creadas anteriormente en el punto 1
console.table(analizarTipo(texto));
console.table(analizarTipo(numero));
console.table(analizarTipo(bool));
console.table(analizarTipo(nulo));
console.table(analizarTipo(indefinido));
console.table(analizarTipo(big));