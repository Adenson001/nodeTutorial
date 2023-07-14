const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our homePage");
    return;
  }
  if (req.url === "/about") {
    res.end("welcome to our about page");
    return;
  }
  // res.write("Welcome to our home Page");

  res.end(`
  <h1>Oops</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href='/'>back home</a>
  `);
});

server.listen(5000);
