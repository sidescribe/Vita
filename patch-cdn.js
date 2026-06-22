const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, 'index.html');
let html = fs.readFileSync(p, 'utf8');
html = html.replace(
  /<script crossorigin src="https:\/\/unpkg\.com\/react-dom@17\/umd\/react-dom\.production\.min\.js"><\/script>/,
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js"></script>'
);
fs.writeFileSync(p, html);
console.log('patched react-dom script');
