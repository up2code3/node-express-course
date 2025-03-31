const path = require('path')
console.log(path.sep)

const filePath = path.join('contetrwetgwnt','test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const abs = path.resolve(__dirname, 'content',' sub' , 'test.txt')
console.log(abs)