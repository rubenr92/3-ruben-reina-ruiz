const net = require('net')

function f(socket){
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let hour = today.getHours();
    let minutes = today.getMinutes();


    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;
    if (hour < 10) hour = '0' + hour;
    if (minutes < 10) minutes = '0' + minutes;

    const formattedToday = year + '-' + month + '-' + day + ' ' + hour + ':' + minutes +'\n';
    socket.end(formattedToday)

}

const server = net.createServer(f)
server.listen(process.argv[2])

/*    'use strict'
    const net = require('net')

    function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }

    function now () {
      const d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }

    const server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })

    server.listen(Number(process.argv[2]))*/