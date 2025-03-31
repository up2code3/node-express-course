const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the thunder dome");
  }
  if (req.url === "/about") {
    res.end("this is the about page");
  }
  res.end(`
    
    <h1>oops!</h1>
    <p>can not find page </p>
    <a href="/"> Home </a>
    `)
});

server.listen(5000);
