var http = require("http");
var url = require("url");

function say(word) {
  console.log(word);
}

function execute(someFunction, value) {
  someFunction(value);
}

function start(route) {
  function onRequest(request, response) {
	  var pathname = url.parse(request.url).pathname;
      console.log("Request for " + pathname + " received.");
      route(pathname);
      response.writeHead(200, {"Content-Type": "text/plain"});
	  response.write("Hello World\n");
	  response.write("I am Minh Tue.\n");
	  response.write("Welcome to my world.\n");
	  response.write("I love NodeJS.\n")
	  response.end();
	  execute(say, "This is done.\n");
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;