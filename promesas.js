
const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
    ];
    
    const salarios = [
        {
            id: 1,
            salario: 1000
        },
        {
            id: 2,
            salario: 1500
        }
    ];

    const getEmpleado = ( id)  =>  {
      
        const promesa = new Promise( (resolve, reject) => {

            const empleado = empleados.find (e => e.id === id)?.nombre;

            if ( empleado ){
            resolve ( empleado );
            } else {
                reject (`No existe empleado con id ${ id}` )
            }
        });
        return promesa;
    }


const id = 4
;
try{
    getEmpleado(id);
} catch (error) {console.error (error);}
    //.then( empleado => console.log ( empleado ) );



