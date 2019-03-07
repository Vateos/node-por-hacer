//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let = listado = porHacer.getListado();

        // LISTAR ELEMENTOS DE FORMA RÁPIDA
        console.log(listado);

        // LISTAR ELEMENTOS CON FOR
        // for (let tarea of listado) {
        //     console.log('-------- Tarea por Hacer --------');
        //     console.log(tarea.descripcion);
        //     console.log('Estado: ', tarea.completado);
        // }


        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');

}