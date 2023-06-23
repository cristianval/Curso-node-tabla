const { describe } = require('yargs');

const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type : 'number',
                    demandOption : true,           
                    describe: 'Es la base de la tabla de multiplicar'        
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: false,
                    default: false,
                    describe: 'Lista la tabla en consola'
                    })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Solicita el largo de la tabla'
                    })
                .check((argv, option)=> {
                    if (isNaN(argv.b) && isNaN(argv.h)) {
                        throw 'La base y hasta tiene que ser un número'
                    }
                    return true;
                })
                .argv;

module.exports= argv;