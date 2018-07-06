//function sumar (a,b){
//    return a+b;
//}

let sumar = (a,b) => a+b;

//function saludar(){
//    return 'Hola Mundo';
//}

let saludar = () => 'Hola Mundo';

//function saludar2(nombre){
//    return `Hola ${nombre}`;
//}

let saludar2 = nombre => `Hola ${nombre}`;

console.log(sumar(1,4));
console.log(saludar());
console.log(saludar2('Cristian'));


let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {return `${this.nombre} ${this.apellido} - poder : ${this.poder} `}
};

console.log(deadpool.getNombre());

