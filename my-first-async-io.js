const fs = require('fs');
fs.readFile(process.argv[2],'utf-8', (err, string)=> {if(err) console.log(err);
                                                    console.log(string.split('\n').length -1)})



    