var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World\n");
  response.write("I am Minh Tue.\n");
  response.write("Welcome to my world.\n");
  response.end();
}).listen(8881);