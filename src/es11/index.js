//-------- Dinamic import => Importamos un elemento de forma dinamica para poder llamar piezas de codigo que haran que nuestor proyecto funcione mejor
// Como podemos llamar a un archivo dentro de una pieza de codigo

const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hello();
});