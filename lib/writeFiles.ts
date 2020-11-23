namespace writeFiles {

const fs = require('fs');

function writeFiles (filePath: string, data: Buffer) {
  const writePath = filePath.replace(/\bsrc\b/i, 'dist');

  fs.mkdir(writePath.replace(/\/[^/]+?\.jsxe/i, ''), { recursive: true }, (err: NodeJS.ErrnoException) => {
    if (err) {
      return console.error(err.message);
    }

    fs.writeFile(filePath.replace(/\bsrc\b/i, 'dist').replace(/\.jsxe/, '\.js'), data, (err: NodeJS.ErrnoException) => {
      if (err) {
        console.log(err.message);
      }
    });
  });
}

module.exports = writeFiles;

}