const opt = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opt)
    .command('actualizar', 'Actualiza el estado completo de una tarea', opt)
    .command('borrar', 'Borra una tarea', opt)
    .help()
    .argv;


module.exports = {
    argv
}