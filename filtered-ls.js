const fs = require('fs')
const path = require('path')
const dir = process.argv[2]
const extension = '.' + process.argv[3]

fs.readdir(dir,(err,list)=>console.log(list.filter((file)=>path.extname(file) == extension).join('\n')))
