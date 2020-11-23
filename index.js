"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
const fs = require('fs');
const parseJsx = require('./lib/parseJsx');
const FROM = path.join(__dirname, 'src');
function readDirectory(pathName) {
    const paths = {
        filesPaths: [],
        directoriesPaths: []
    };
    fs.readdir(`${pathName ? pathName : FROM}`, { withFileTypes: true }, (err, items) => {
        if (err) {
            return console.error(err.message);
        }
        items.forEach(item => {
            if (item.isFile() && path.extname(item.name).match(/\.jsxe/i)) {
                return paths.filesPaths.push(`${pathName ? pathName : FROM}/${item.name}`);
            }
            else if (item.isDirectory()) {
                return paths.directoriesPaths.push(`${pathName ? pathName : FROM}/${item.name}`);
            }
        });
        paths.filesPaths.forEach(filePath => {
            parseJsx(filePath);
        });
        paths.directoriesPaths.forEach(directoryPath => {
            readDirectory(directoryPath);
        });
    });
}
readDirectory('');
