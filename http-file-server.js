const http = require('http')
const fs = require('fs')

const server = http.createServer((request,response)=>{
    let src = fs.createReadStream(process.argv[3])
    src.pipe(response)
})

server.listen(process.argv[2])