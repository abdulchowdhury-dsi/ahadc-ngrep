'use strict';

const fs = require('fs');
let allLines = [];

let lineBreak = process.platform === 'win32' ? '\r\n' : '\n';
// Accounting for CRLF on Windows platform

fs.readFile(process.argv[2], 'utf8', function(err, data) {
  console.log(data);
  allLines = data.trim().split('\n');
  allLines.forEach(item => console.log(item));
});

