const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require('./Middleware/notFound')
const errorHandler = require('./Middleware/errorHandler')
//Middleware
app.use(express.static('./'));
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);

app.use(notFound)
app.use(errorHandler)

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`YO! Server listen on ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
// app.listen(port,console.log("Yo Server on 3000..."))
