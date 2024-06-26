const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;
//comment

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
let item = 'pick a color';
let colorX = 'white';

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <body style='background-color: ${colorX}'>
    <p>${item}</p>
    <form method="POST">
      <input name="item"  value='${item}'></input>
      <select name='color' onChange='this.form.submit()'>
        <option value='white' ${colorX === 'white' ? 'selected' : ''}>White</option>
        <option value='green' ${colorX === 'green' ? 'selected' : ''}>Green</option>
        <option value='blue' ${colorX === 'blue' ? 'selected' : ''}>Blue</option>
        <option value='red' ${colorX === 'red' ? 'selected' : ''}>Red</option>
        <option value='yellow' ${colorX === 'yellow' ? 'selected' : ''}>Yellow</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // here, you can add your own logic
      if (body["item"]) {
        item = body["color"];
      } else {
        item = "Nothing was entered.";
      }
      if (body['color']) {
        colorX = body['color']
      }
      // Your code changes would end here
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.on('request', (req) => {
  console.log('event received:', req.method, req.url);
});
server.listen(3000);
console.log("The server is listening on port 3000.");
