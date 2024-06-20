const {readFile, writeFile} = require('fs')

console.log('1')
readFile('../content/first.txt', 'utf8', (err,result) => {
  if (err) {
    console.log(err)
    return
}
const first = result;
readFile('../content/second.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const second = result
  
  writeFile(
    './temporary/fileB.txt',
    `this is the 1st line\nthis is the 2nd${first}\nthis is the 3rd${second}`,
    {flag:'a'},
    (err,result) => {
        if (err) {
            console.log(err)
            return
        }
        console.log('2')
    })
})
})
console.log('3')