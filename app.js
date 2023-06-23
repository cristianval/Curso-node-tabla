const {creaArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')


console.clear();


//console.log(argv); muestra coomo funciona yarg a<rgumentos

//const base = 1;

 creaArchivo(argv.b, argv.l, argv.h)
     .then(nombreArchivo =>console.log(nombreArchivo, 'creado'))
     .catch(err=> console.log(err));