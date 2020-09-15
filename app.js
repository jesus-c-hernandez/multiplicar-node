const { argv } = require('./config/yargs');
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        // console.log(argv);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`El archivo creado: ${ archivo.green }`))
            .catch(err => console.log(err));
        // console.log(argv);
        break;
    default:
        console.log('Comando no reconocido');
        break;

}