const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const entries = Object.entries(data);
console.log(entries); // Me convierte el objeto en un conjunto de arrays
console.log(entries.length);

const data2 = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}
const values = Object.values(data2);
console.log(values); // un array que ignora las llaves
console.log(values.length);

const string = 'Hello';
console.log(string.padStart(8, 'hi '));
console.log(string.padEnd(12, '-------'));
console.log('food'.padEnd(12, ' --------'));

const obj = {
    name: 'oscar',
}