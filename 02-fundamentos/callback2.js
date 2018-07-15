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


let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if(!empleadoDB){
        callback(`No existe el empleado con id ${id}`);
    }
    else{
        callback(null, empleadoDB);
    }
}

let getSalario = (empleado, callback) => {
    let salarioDB = salario.find(salario => salario.id === empleado.id)

    if(!salarioDB){
        callback(`No se encontro un salario para el empleado ${empleado.nombre}`);
    }
    else{
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        });
    }

}

getEmpleado(2, (err, empleado) => {
    if(err){
        console.log(err);
    }
    else{
        getSalario(empleado, (err, salario) => {
            if(err){
                console.log(err);
            }
            else{
                console.log(salario);
            }
        });
    }
    
});


