const http = require('http')

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    let result = []
    response.on('data',(data)=>result.push(data))
    response.on('end', ()=>{result = result.join('');console.log(result.length);console.log(result)})
    response.on('error', console.error)
  }).on('error', console.error)