var http = require("http");

function say(word) {
  console.log(word);
}

function execute(someFunction, value) {
  someFunction(value);
}

function start() {
  function onRequest(request, response) {
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