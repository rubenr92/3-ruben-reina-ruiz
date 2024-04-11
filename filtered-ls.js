const fs = require('fs')
const path = require('path')
const dir = process.argv[2]
const extension = '.' + process.argv[3]


fs.readdir(dir,(err,list)=>console.log(list.filter((file)=>path.extname(file) == extension).join('\n')))


/*    'use strict'
    const fs = require('fs')
    const path = require('path')

    const folder = process.argv[2]
    const ext = '.' + process.argv[3]

    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })*/
