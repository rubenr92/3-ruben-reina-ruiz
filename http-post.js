const http = require('http')

const req = http.request(process.argv[2], {method:'POST'},(response)=> response.on('data', (data)=>console.log(data.toString())))
req.write(process.argv[3])
req.end()