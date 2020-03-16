'use strict';

const http = require('http');

const port = process.env.PORT || 8080;
const redirectURL = "https://raw.githubusercontent.com/basd4g/dotfiles/master/bin/install.sh"

const server = http.createServer((req, res) => {
  res.writeHead(302, {
    'Location' : redirectURL
  });
  res.end();
});

server.listen(port, () => {
  console.log('Listening on ' + port);
});
