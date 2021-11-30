function newFunction(name, age, country) {
    var name = name || "Luis";
    var age = age || 18;
    var country = country || "ECU";
    console.log(name, age, country);
}

//es6

function newFunction2(name = "Oscar", age = 32, country = "ECU") {
    console.log(name, age, country);
}

newFunction2(); //Aqui me pasaria los valores por defecto
newFunction2("Ricardo", 23, "Colombia");

//-------

let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
// es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//---------

let lorem = "Sé fuerte, sé competitivo. Tu éxito depende de eso.\n"
    + "Hazlo, por ti, por tus sueños, por la humanidad.";

// es6

let lorem2 = `Frase epica
Ahora es otra frase epica`;
console.log(lorem);
console.log(lorem2);

//-------------Desestructuracion de elementos

let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}
console.log(person.name, person.age);
//es6
let { name, age, country } = person;
console.log(name, age, country);
let { name } = person;
console.log(name);


let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];
//es6
let education = ['David', ...team1, ...team2];

console.log(education);

//------------- LET Y CONST
var hola = "Hola"; //Estaba disponible de forma global
// let solo esta disponible dentro del scope del bloque de codigo en el que fue asignado
// const es un valor constante, no se podra modificar

{
    var globalVar = "Globar var";
}

{
    let globalLet = "Global let";
    console.log(`Dentro del bloque del let ${globalLet}`);
}

console.log(globalVar);

const a = 'b';
