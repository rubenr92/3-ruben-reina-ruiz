const http = require('http')
const url = require('url')
//new url sin require?

const server = http.createServer((request,response)=>{
                    let url = new URL(request.url, 'http://example.com')
                    let date = new Date(url.searchParams.get('iso'))
                    response.writeHead(200, { 'Content-Type': 'application/json' })

                    if (url.pathname == '/api/parsetime'){
                        response.write(`{hours:${date.getHours()}, minutes:${date.getMinutes()}, seconds:${date.getSeconds()}}`)
                    } else if(url.pathname == '/api/unixtime'){
                        response.write(Date.parse(date))
                    }
                    

})
server.listen(process.argv[2])