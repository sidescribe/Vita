const fs = require('fs');
const path = require('path');

const root = __dirname;
const docs = path.join(root, 'docs');
const files = ['index.html', 'app.js', 'sw.js', 'manifest.json', 'icon-192.svg', 'icon-512.svg'];

for (const file of files) {
  const src = path.join(root, file);
  const dest = path.join(docs, file);
  if (!fs.existsSync(src)) {
    console.warn('skip missing:', file);
    continue;
  }
  fs.copyFileSync(src, dest);
  console.log('synced', file);
}
