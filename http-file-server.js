const http = require('http')
const fs = require('fs')

const server = http.createServer((request,response)=>{
    let src = fs.createReadStream(process.argv[3])
    src.pipe(response)
})

server.listen(process.argv[2])

/*    'use strict'
    const http = require('http')
    const fs = require('fs')

    const server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })

      fs.createReadStream(process.argv[3]).pipe(res)
    })

    server.listen(Number(process.argv[2]))*/