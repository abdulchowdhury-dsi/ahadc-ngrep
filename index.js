'use strict';

let fs = require('fs');
let rl = require('readline');

if (process.argv.length < 4) {
  console.log('ERROR: insufficient arguments.');
  console.log('USAGE: npm start <string> <fileName>');
  process.exit();
}

let [queryString, fileName] = process.argv.slice(2, 4);

let iLineReader = rl.createInterface({
  input: fs.createReadStream(fileName)
});

iLineReader.on('line', function(line) {
  if (~line.indexOf(queryString)) {
    console.log(line);
  }
});
