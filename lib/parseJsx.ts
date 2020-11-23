namespace parseJsx {

const fs = require('fs');
const writeFiles = require('./writeFiles');
const replaceForReact = require('./replaceForReact');

function parseJsx(filePath: string) {
  fs.readFile(filePath, (err: NodeJS.ErrnoException, data: Buffer) => {
    if (err) {
      return console.error(err.message);
    }

    const stringsForWrite = replaceForReact(data);
    
    writeFiles(filePath, stringsForWrite);    
  });
}

module.exports = parseJsx;
}