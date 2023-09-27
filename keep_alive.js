var http = require('http'),
  httpProxy = require('http-proxy');

httpProxy.createProxyServer({ target: 'http://localhost:9000' }).listen(8000);

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/json' });
  res.write(`What you're looking at is not here.`);
  res.end();
}).listen(9000);