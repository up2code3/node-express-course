//imports nodes path module
const path = require('path')

//returns backslash
console.log(path.sep)

//returns \content + \subfolder + \test.txt all join togather
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

//pulls and returns the end of the file path, test.txt
const base = path.basename(filePath)
console.log(base)

//takes the segments and puts them in an absolute path, the path starts in the directory containing the code.
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)
