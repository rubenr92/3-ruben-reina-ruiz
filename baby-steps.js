const arguments = process.argv.toSpliced(0,2).map((i) => new Number(i))
console.log(arguments.reduce((accumulator, current) => accumulator + current))