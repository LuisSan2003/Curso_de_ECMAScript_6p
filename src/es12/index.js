const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.";
const replacedString = string.replace("JavaScript", "Python");

console.log(replacedString);

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

//--------------------------
class Message {
    #show(val) { //Para ponerlo de forma privada usamos #. Si quitamos el # sera publico
        console.log(val);
    };
    get #add(val) {

    }
}

const message = new Message();
message.show('Hola');

//----------- Promise any
const promise1 = new Promise((resolve, reject) => reject('1'));
const promise2 = new Promise((resolve, reject) => resolve('2'));
const promise3 = new Promise((resolve, reject) => resolve('3'));

Promise.any([promise1, promise2, promise3])
    .then(responde => console.log(responde));


//---------------------------------
class AnyClass {
    constructor(element) {
        this.ref = new WeakRef(element);
    }
}

//----------------------------------
let isTrue = true;
let isFalse = false;

console.log(isTrue &&= isFalse);
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);
