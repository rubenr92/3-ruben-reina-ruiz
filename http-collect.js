const http = require('http')
const bl = require('bl')

//http.get(process.argv[2], (response)=> response.on('data', (data)=>console.log(data.toString())))
http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.pipe(bl(function (err, data) {console.log(data)}))
    response.on('error', console.error)
  }).on('error', console.error)