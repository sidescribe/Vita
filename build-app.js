const fs = require('fs');
const path = require('path');
const babel = require('@babel/standalone');

const htmlPath = path.join(__dirname, 'app.source.jsx');
const source = fs.readFileSync(htmlPath, 'utf8');

const { code } = babel.transform(source, {
  presets: [
    ['env', { modules: false }],
    'react'
  ],
  filename: 'app.jsx'
});

const banner = '/* Auto-generated from app.source.jsx — run: node build-app.js */\n';
fs.writeFileSync(path.join(__dirname, 'app.js'), banner + code, 'utf8');
console.log('Wrote app.js (' + (banner.length + code.length) + ' bytes)');

require('child_process').execSync('node sync-docs.js', { cwd: __dirname, stdio: 'inherit' });
