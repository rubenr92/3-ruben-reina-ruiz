const http = require('http')

//http.get(process.argv[2], (response)=> response.on('data', (data)=>console.log(data.toString())))
http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    let result = []
    response.on('data',(data)=>result.push(data))
    response.on('end', ()=>{result = result.join('');console.log(result.length);console.log(result)})
    response.on('error', console.error)
  }).on('error', console.error)

  /*    'use strict'
    const http = require('http')
    const bl = require('bl')

    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })*/