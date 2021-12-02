let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(2)) //.flat recibe como argumento la profundidad. Si no se le pasan argumentos entonces solo mostrara la primera profundidad

let array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(value => [value, value *2])) // Mapea cada uno de los elementos

let hello = '           hello world';
console.log(hello);
console.log(hello.trimStart()); // Elimina espacios al inicio del texto

let hello2 = 'hello World           ';
console.log(hello2);
console.log(hello2.trimEnd());

//------------------------------

try {

} catch {
    error;
}

//-------------------------------

let entries = [["name", "oscar"], ["age", 32]]; //Nos convierte arreglos a objetos clave-valor
console.log(Object.fromEntries(entries));

//-------------------------------

let mySymbol = 'My symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);