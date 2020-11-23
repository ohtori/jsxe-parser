"use strict";
var writeFiles;
(function (writeFiles_1) {
    const fs = require('fs');
    function writeFiles(filePath, data) {
        const writePath = filePath.replace(/\bsrc\b/i, 'dist');
        fs.mkdir(writePath.replace(/\/[^/]+?\.jsxe/i, ''), { recursive: true }, (err) => {
            if (err) {
                return console.error(err.message);
            }
            fs.writeFile(filePath.replace(/\bsrc\b/i, 'dist').replace(/\.jsxe/, '\.js'), data, (err) => {
                if (err) {
                    console.log(err.message);
                }
            });
        });
    }
    module.exports = writeFiles;
})(writeFiles || (writeFiles = {}));
