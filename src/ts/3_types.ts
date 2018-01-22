/** types */
import {defaultCoreCipherList} from "constants";

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;


//Plantillas de stringify()
let lyrics = 'Never gonna give you up'; // entre comillas simples
let html = `<div>${lyrics}</div>`; // entre tilde inversa


// Arrays
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];




/** Tuplas */

let x: [string, number];
// Inicialización correcta
x = ["hello", 10]; // OK

// Inicialización incorrecta
// x = [10, "hello"]; // Error

console.log(x[0].substr(1));
//console.log(x[1].substr(1)); // Error, Un tipo 'number' no tiene la función 'substr'




/** String literal type **/

//type literalString = 'Hello';
let literalString = 'Hello';
literalString = 'Bye'; // Error: "Bye" is not assignable to type "Hello"

type CardinalDirection =
    "North"
    | "East"
    | "South"
    | "West";

function move(distance: number, direction: CardinalDirection) {
// ...
}

move(1,"North"); // Okay
//move(1,"Nurth"); // Error!





/** Enum */

enum Direction {
    Up = 1,     // Si se le asigna un valor numerico primero, los siguientes valores empiezan desde el número especificado
    Left = "asdasd".length,
    Right = 1 << 1 // También admiten operadores binarios
}

let a = Direction.Up;
console.log(Direction.Left);


//enum Color {Red, Green, Blue}
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green; // 1
console.log(c);

let colorName: string = Color[3];
console.log(colorName);



/** var, let, const */

var foo1 = 123;
if (true) {
    var foo1 = 456;
}
console.log(foo1); // 456


let foo2 = 123;
if (true) {
    let foo2 = 456;
}
console.log(foo2); // 123

const foo3 = { bar: 123 };
foo3.bar = 456; // Permitido
console.log(foo3); // { bar: 456 }



function padLeft(value: string, padding: string | number) {
    if(typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }

    if(typeof padding === "string") {
        return Array(padding.length + 1).join(" ") + value;
    }

    // Si existiera Any tendriamos que controlar la excepción
    // Como buenas practicas y ya que este código al fin y al cabo
    // será javascript y es vulnerable a inyeción siempre está bien
    // realizar el control de las posibles excepciones
    throw new Error(`Expected String or number, got '${padding}' `);
}

console.log(padLeft("hello", "aaa")); // Ejemplo de función con texto -> Funciona
console.log(padLeft("hello", 5)); // Ejemplo de función con número -> Funciona
//console.log(padLeft("hello", true)); // Error, Ejemplo de función con boolean -> NO FUNCIONA



let xx = () => ({name: 'Alice'});
let yy = () => ({name: 'Alice', location: 'Seattle'});

xx = yy; // OK
//yy = xx; // Error porque x()nmo tiene la propiedad location





/** Genericos */

function echo<T>(arg :T) :T {
    return arg;
}

let aa = echo<number>(1); // El typeof es Number
let bb = echo<String>("Hola mundo"); // El typeof es String


class Generic<T> {
    add: (x :T, y :T) => T;
}

let myGeneric = new Generic<number>();
console.log(myGeneric.add = function (v1,v2) {return v1 + v2});
console.log(myGeneric.add(3,4));




// Interfaz que asegura que el parametro tenga el metodo length
interface withLength {
    length: number;
}

// El parametro hereda de la interfaz la cual fuerza al parametro tenga el método length
// Ojo, se usa "extends" y no "implements".
function echo2<T extends withLength>(arg: T): T {
    console.log(arg.length);
    return arg;
}
// Esto funcionará
let aaa = echo2("aaa");
let ttt = echo2({length: 2, name: "aa"});

// Esto no
// let bbb = echo(1);
