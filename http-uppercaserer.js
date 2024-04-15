const http = require('http')

const server = http.createServer((request,response) => {if (request.method!== 'POST'){return response.end('only post requests\n')}
                                                      request.map((chunk)=> chunk.toString().toUpperCase()).pipe(response)})

server.listen(process.argv[2])
