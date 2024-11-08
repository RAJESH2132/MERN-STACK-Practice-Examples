const http = require("http");

const port = 8080;

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello From Node server");
  })
  .listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
