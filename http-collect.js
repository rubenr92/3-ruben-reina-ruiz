const http = require('http')

//http.get(process.argv[2], (response)=> response.on('data', (data)=>console.log(data.toString())))
http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.on('end', console.log)
    response.on('error', console.error)
  }).on('error', console.error)