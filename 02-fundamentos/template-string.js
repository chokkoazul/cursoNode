let nombre = 'Deadpool';
let real = 'Wade Winston';

console.log(`${ nombre } ${real}`);


let nombreCompleto = `${ nombre } ${real}`;

console.log(nombreCompleto);

function getNombre(){
    return `${ nombre } ${real}`;
}

console.log(`El nombre es ${getNombre()}`);