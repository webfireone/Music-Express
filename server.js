const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = {
  'html': 'text/html;charset=utf-8',
  'css': 'text/css',
  'js': 'application/javascript',
  'png': 'image/png',
  'json': 'application/json',
  'svg': 'image/svg+xml'
};
const root = __dirname;
http.createServer((req, res) => {
  let f = req.url === '/' ? 'index.html' : req.url.split('?')[0];
  f = path.join(root, f);
  if (!fs.existsSync(f)) {
    res.writeHead(404);
    res.end('404');
    return;
  }
  const ext = path.extname(f).slice(1);
  res.writeHead(200, { 'Content-Type': mime[ext] || 'text/plain' });
  fs.createReadStream(f).pipe(res);
}).listen(8080, () => console.log('Server on http://localhost:8080'));
