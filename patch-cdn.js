const fs = require('fs');
const path = require('path');

const CDN = {
  react: '<script src="https://cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js"></script>',
  reactDom: '<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js"></script>'
};

for (const file of ['index.html', path.join('docs', 'index.html')]) {
  const p = path.join(__dirname, file);
  let html = fs.readFileSync(p, 'utf8');
  html = html.replace(/<script[^>]*unpkg\.com\/react@17[^>]*><\/script>/g, CDN.react);
  html = html.replace(/<script[^>]*unpkg\.com\/react-dom@17[^>]*><\/script>/g, CDN.reactDom);
  html = html.replace(/<script[^>]*crossorigin[^>]*react-dom[^>]*><\/script>/g, CDN.reactDom);
  fs.writeFileSync(p, html);
  console.log('patched', file);
}
