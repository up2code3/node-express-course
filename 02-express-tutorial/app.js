const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")
const people = require('./routes/people')
const logger = require('./logger')
const auth = require('./authorize')
const authRoutes= require('./routes/auth')
// const auth = require('./routes/auth')
//importing data
//static assets
app.use(express.static("./methods-public"));
//parse from data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());
app.use(cookieParser())

app.use('/',logger)

app.use('/api/people',people)
app.use('/', authRoutes)



app.get('/test', auth, (req, res) => {
  res.status(200).json({ message: `Welcome, ${req.user}` })
})

app.listen(5000, () => {
  console.log("listen on 5000...");
});
