//-------- Dinamic import => Importamos un elemento de forma dinamica para poder llamar piezas de codigo que haran que nuestor proyecto funcione mejor
// Como podemos llamar a un archivo dentro de una pieza de codigo

const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hello();
});

//-----------------

const aBigNumber = 9007199254740991n; //Este era el valor maximo permitido por JS hasta la version es10. A partir de es11 cambio
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

//------------------ Promise all settle
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

//------------- global this
console.log(window);
console.log(globalThis);

//------------- operador null
const fooo = null ?? 'default string';
console.log(fooo);

//------------- optional chaining
const user = {};
//console.log(user.profile.email); => prints error because not exists
console.log(user?.profile?.email);

if (user?.profile?.email) {
    console.log('email');
} else {
    console.log('fail');
}