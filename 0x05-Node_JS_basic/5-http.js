const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  const { method, url } = req;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (method === 'GET') {
    if (url === '/') {
      res.end('Hello Holberton School!\n');
    } else if (url === '/students') {
      countStudents(process.argv[2])
        .then((data) => {
          res.end(`This is the list of our students\n${data}`);
        })
        .catch((error) => {
          res.end(`This is the list of our students\n${error}`);
        });
    } else {
      res.end('Not found\n');
    }
  } else {
    res.end('Invalid request\n');
  }
});

app.listen(1245);

module.exports = app;
