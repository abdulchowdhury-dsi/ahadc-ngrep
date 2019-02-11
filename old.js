'use strict';

const fs = require('fs');
let allLines = [];
let count = 0;

let lineBreak = process.platform === 'win32' ? '\r\n' : '\n';
// Accounting for CRLF on Windows platform

if (process.argv.length < 4) {
  console.log('ERROR: insufficient arguments.');
  console.log('Usage: npm start <string> <fileName>');
} else {
  fs.readFile(process.argv[3], 'utf8', function(err, data) {
    let queryString = process.argv[2];
    let charLen = queryString.length;
    let position = 0;
    allLines = data.trim().split('\n');
    let max = allLines.length;

    // Iteration through lines begins here.
    for (let i = 0; i < max; i++) {
      let rest = allLines[i];
      while (rest.length > charLen) {
        position = rest.indexOf(queryString);
        if (~position) {
          count++;
          console.log(`FOUND: line ${i + 1}, char ${position + 1}`);
          rest = rest.slice(position + charLen);
        } else {
          break; // not found in this line, go to the next line.
        }
      }
    }
    // Iteration through lines ends here.

    if (!count) {
      console.log('NOT FOUND');
    } else {
      console.log(`FOUND in ${count} places.`);
    }
  });
}