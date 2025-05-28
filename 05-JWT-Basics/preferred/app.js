require('dotenv').config()
const express = require('express')
const app = express()

const mainRouter = require('./routes/main')

app.use(express.json())
app.use('/api/v1', mainRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))