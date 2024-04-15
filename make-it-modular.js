const mymodule = require('./mymodule.js')
const dir = process.argv[2]
let ext = process.argv[3]

function f(err, data){
    if (err){console.log('Error al leer el directorio')};
    console.log(data.join('\n'))
}

mymodule(dir,ext,f)