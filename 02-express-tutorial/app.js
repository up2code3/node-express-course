const { people, products } = require("./data")
const express = require('express')
const peopleRouter = require('./routes/people')
const app = express()

app.use(express.static('./public'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/v1/people' , peopleRouter)

const logger = (req,res,next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(time,url,method)
    next()
}
app.use(logger)

// app.get('/api/v1/test', (req,res) => {
//     res.json({message: "it worked "})
//     console.log('user hit')
// })

// app.get('/', peopleRouter ) <-- what were these for again? it appears I dont need them for it to function properly
// app.post('/', peopleRouter)
// app.put('/', peopleRouter)
  


// app.get('/api/v1/products/:productID',(req,res)=>{
//     const idToFind = parseInt(req.params.productID)
//     const productByID = products.find((p) => p.id === idToFind)
    
//         if(!productByID){
//             return res.status(404).send('<h1>No Products Match that ID</h1>')
//         }
//         return res.json(productByID)
// })

// app.get('/api/v1/query',(req,res) => {
//     console.log(req.query)
//     const {search, limit, price} = req.query
//     let sortedProducts = [...products]
    
//     if(search){
//     sortedProducts = sortedProducts.filter((product) => {
//     return product.name.startsWith(search)
//     })}
    
//     if(price){
//         sortedProducts = sortedProducts.filter((product) => {
//             return product.price < parseFloat(price)
//         })
//     }
    
//     if(limit){
//         sortedProducts = sortedProducts.slice(0,parseInt(limit))
//     }
    
//     res.status(200).json(sortedProducts)
// })

app.all('*', (req,res) => {
    res.status(404).send('<h1>Page Not Found')
})

app.listen(3000,() => {
    console.log('server is listening on port 3000')
})