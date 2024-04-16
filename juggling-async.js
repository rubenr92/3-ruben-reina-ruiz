const http = require('http')

function server(nr){
    http.get(process.argv[nr], function (response) {
    response.setEncoding('utf8')
    let result = []
    response.on('data',(data)=>result.push(data))
    response.on('end', ()=>{result = result.join('');console.log(result)})
    response.on('error', console.error)
  })
}
server(2)
setTimeout(()=>server(3),1000)
setTimeout(()=>server(4),2000)
