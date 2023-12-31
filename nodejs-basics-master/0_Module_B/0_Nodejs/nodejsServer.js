const http = require("http");

var courses = [
  { id: 1, name: "JS" },
  { id: 2, name: "node" },
  { id: 3, name: "FLUTTER" },
];

http
  .createServer((request, response) => {
    console.log("Got a Request! ", request.url);

    if (request.url === "/api/courses") {
      response.write(JSON.stringify(courses));
      response.end();
    } else if (request.url === "/api/users") {
      response.write(JSON.stringify(users));
      response.end();
    } else {
      response.write("<h1>Hello World</h1> <h2>" + request.url + "</h2>");
      response.end();
    }
  })
  .listen(9000);
