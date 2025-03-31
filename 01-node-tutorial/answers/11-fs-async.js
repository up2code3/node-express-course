const {readFile, writeFile} = require('fs')

console.log('start')

readFile('./content/first.txt','utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return 
    }
    const first = result;
    console.log('1')
    readFile('./content/second.txt','utf-8', (err,result) => {
        if (err) {
            console.log(err)
            return
        }
    const second = result;
    console.log('2')
        readFile('./content/third.txt','utf-8', (err,result) => {
            if (err) {
                console.log(err)
                return
            }
        const third = result;
        console.log('3')
    writeFile(
        './temporary/fileB.txt',
        `\n ${first} \n ${second} \n ${third}`,
            (err,result) => {
            if(err){
                console.log(err)
                return
            }
            console.log('done with this task')
        }
    )
    })
})
})
console.log('starting next task')