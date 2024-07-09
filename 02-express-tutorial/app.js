const { products } = require("./data")
const express = require('express')
const app = express()

app.use(express.static('./public'))

// app.get('/api/v1/test', (req,res) => {
//     res.json({message: "it worked "})
//     console.log('user hit')
// })

app.get('/api/v1/products', (req,res) => {
    res.json(products)
})


app.get('/api/v1/products/:productID',(req,res)=>{
    const idToFind = parseInt(req.params.productID)
    const productByID = products.find((p) => p.id === idToFind)
    
        if(!productByID){
            return res.status(404).send('<h1>No Products Match that ID</h1>')
        }
        return res.json(productByID)
})

app.get('/api/v1/query',(req,res) => {
    console.log(req.query)
    const {search, limit, price} = req.query
    let sortedProducts = [...products]
    
    if(search){
    sortedProducts = sortedProducts.filter((product) => {
    return product.name.startsWith(search)
    })}
    
    if(price){
        sortedProducts = sortedProducts.filter((product) => {
            return product.price < parseFloat(price)
        })
    }
    
    if(limit){
        sortedProducts = sortedProducts.slice(0,parseInt(limit))
    }
    
    res.status(200).json(sortedProducts)
})

app.all('*', (req,res) => {
    res.status(404).send('<h1>Page Not Found')
})

app.listen(3000,() => {
    console.log('server is listening on port 3000')
})