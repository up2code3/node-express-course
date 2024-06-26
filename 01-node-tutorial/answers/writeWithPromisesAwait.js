const {writeFile, readFile} = require("fs").promises

const first = 'This is the first line of await\n'
const second = 'This is the second line of await\n'
const third = 'this is the third line of await\n'

const writer = async () => {
    try{
        await writeFile('./temporary/temp.txt',`${first}`)
        await writeFile('./temporary/temp.txt',`${second}`,{flag:'a'})
        await writeFile('./temporary/temp.txt',`${third}`,{flag:'a'})
        console.log('writing complete')
    }catch (error){
        console.log('Writing incomplete', error)
    }    
}

// const writer = async () => {
//     try{
//         await writeFile(
//             './temporary/temp.txt',
//         `${first}${second}${third}`)
//         console.log('writing complete')
//     }catch (error){
//         console.log('Writing incomplete', error)
//     }    
// }

const reader = async () => {
    try{
        const data = await readFile('./temporary/temp.txt','utf8');
        console.log(data)
    } catch (error) {
        console.log('Incomplete read', error)
    }
}

const readWrite = async () => {
    await writer();
    await reader();
};

readWrite()
