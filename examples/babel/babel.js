import http from "http";

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World!");
  })
  .listen(8080);

const array = [1, 2, 3, 4, 5, 6, 7, 8];
for (const item of array) {
  if (item % 2 === 0) {
    continue;
  }
  console.log(item);
}
