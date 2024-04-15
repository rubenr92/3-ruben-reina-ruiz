const http = require('http')
const url = require('url')

const server = http.createServer((request,response)=>{
                    let url = new URL(request.url, 'http://example.com')
                    let date = new Date(url.searchParams.get('iso'))
                    response.writeHead(200, { 'Content-Type': 'application/json' })

                    if (url.pathname == '/api/parsetime'){
                        response.end(JSON.stringify({hour:date.getHours(), minute:date.getMinutes(), second:date.getSeconds()}))
                    } else if(url.pathname == '/api/unixtime'){
                        response.end(JSON.stringify({unixtime:date.getTime()}))
                    }          

})
server.listen(process.argv[2])



