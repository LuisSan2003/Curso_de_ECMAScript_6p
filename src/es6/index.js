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