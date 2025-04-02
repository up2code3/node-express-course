const {writeFile, readFile} = require('fs').promises

const writer = async () => {
    try {
        await writeFile('./temporary/temp.txt',` this is line 1 \n this is line 2 \n this is line 3`);
    } catch (error) {
        console.log (error)
    }
}

const reader = async () => {
    try {
        const result = await readFile('./content/temp.txt', 'utf-8')
        console.log(result)
    } catch (error) {
        console.log (error)
    }
}

const readWrite = async () => {
    await writer(); 
    await reader(); 
};

readWrite();