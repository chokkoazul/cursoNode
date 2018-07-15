let empleados = [{
    id: 1,
    nombre: 'Cristian'
},
{
    id: 2,
    nombre: 'Carlos'
},
{
    id: 3,
    nombre: 'Juan'
}];

let salario = [{
    id: 1,
    salario: 1000
},
{
    id: 2,
    salario: 3000
}];


let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)

        if (!empleadoDB) {
            reject(`No existe el empleado con id ${id}`);
        }
        else {
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salario.find(salario => salario.id === empleado.id)

        if (!salarioDB) {
            reject(`No se encontro un salario para el empleado ${empleado.nombre}`);
        }
        else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario
            });
        }
    });
}

getEmpleado(3).then(empleado => {
    console.log('Empleado: ', empleado);
    getSalario(empleado).then(salario => {
        console.log('Salario: ', salario);

    }, (err) => {
        console.log(err);
    });

}, (err) => {
    console.log(err);
});