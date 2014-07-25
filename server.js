var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World\n");
  response.write("I am Minh Tue.")
  response.end();
}).listen(8888);