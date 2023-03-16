const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const { url } = req;
  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const html = '<html><body><h1>Hello World!</h1></body></html>';
    res.write(html);
    res.end();
  } else if (url === '/json') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const json = JSON.stringify({ message: 'Hello World!' });
    res.write(json);
    res.end();
  } else if (url === '/xml') {
    res.writeHead(200, { 'Content-Type': 'application/xml' });
    const xml = '<message>Hello World!</message>';
    res.write(xml);
    res.end();
  } else if (url === '/csv') {
    res.writeHead(200, { 'Content-Type': 'text/csv' });
    const csv = 'name,age\nJohn,30\nJane,25\n';
    res.write(csv);
    res.end();
  } else if (url === '/contact') {
    fs.readFile('contact.html', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>404 Not Found</h1>');
        return res.end();
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>404 Not Found</h1>');
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});
