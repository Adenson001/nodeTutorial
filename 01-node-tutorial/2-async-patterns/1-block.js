const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to home");
    return;
  }
  if (req.url === "/about") {
    //Blocking Code
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end("welcome to about");
    return;
  }
  res.end("Error page");
  return;
});

server.listen(5000, () => {
  console.log("server listening on Port 5000...");
});
