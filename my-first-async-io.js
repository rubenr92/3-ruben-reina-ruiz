const fs = require('fs');
fs.readFile(process.argv[2],'utf-8', (err, string)=> console.log(string.split('\n').length -1))

//dudas: readfile devuelve undefined, deberia devolver promesa
//

/*    const fs = require('fs')
    const file = process.argv[2]

    fs.readFile(file, function (err, contents) {
      if (err) {
        return console.log(err)
      }
      // fs.readFile(file, 'utf8', callback) can also be used
      const lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })*/
    