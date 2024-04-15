module.exports = function (dirName, ext, callback){
    const fs = require('fs')
    const path = require('path')
    let extension = '.' + ext
    fs.readdir(dirName,(err,list)=>{
        if (err){return callback(err,[])};

        const filteredFiles = list.filter((file)=>path.extname(file) == extension)
        callback(err,filteredFiles)
    });

}