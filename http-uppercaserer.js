const http = require('http')
//const map = require('through2-map')

const server = http.createServer((request,response) => {request.map((chunk)=> chunk.toString().toUpperCase()).pipe(response)})
server.listen(process.argv[2])


/*    'use strict'
    const http = require('http')
    const map = require('through2-map')

    const server = http.createServer(function (req, res) {
      if (req.method !== 'POST') {
        return res.end('send me a POST\n')
      }

      req.pipe(map(function (chunk) {
      })).pipe(res)
    })

    server.listen(Number(process.argv[2]))*/


//Modificar para que solo acepte peticiones post