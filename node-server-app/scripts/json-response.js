const http = require("http");

const port = 8080;
http
  .createServer((request, response) => {
    response.writeHead(200, { "content-type": "application/json" });
    response.end(
      JSON.stringify([
        { Name: "TV", Price: 23000 },
        { Name: "Mobile", Price: 12000 },
      ])
    );
  })
  .listen(port, () => {
    console.log(`The Server is running on port number: ${port}`);
  });
