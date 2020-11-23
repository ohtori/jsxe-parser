"use strict";
var parseJsx;
(function (parseJsx_1) {
    const fs = require('fs');
    const writeFiles = require('./writeFiles');
    const replaceForReact = require('./replaceForReact');
    function parseJsx(filePath) {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                return console.error(err.message);
            }
            const stringsForWrite = replaceForReact(data);
            writeFiles(filePath, stringsForWrite);
        });
    }
    module.exports = parseJsx;
})(parseJsx || (parseJsx = {}));
