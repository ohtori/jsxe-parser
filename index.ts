import { Dirent } from 'fs';
import { IPaths } from './interfaces/IPaths';

const path = require('path');
const fs = require('fs');
const parseJsx = require('./lib/parseJsx');

const FROM = path.join(__dirname, 'src');

function readDirectory(pathName: string) {
  const paths: IPaths = {
    filesPaths: [],
    directoriesPaths: []
  }

  fs.readdir(
    `${pathName ? pathName : FROM}`, 
    { withFileTypes: true }, 
    (err: NodeJS.ErrnoException, items: Dirent[]) => {
      if (err) {
        return console.error(err.message);
      }

      items.forEach(item => {
        if (item.isFile() && path.extname(item.name).match(/\.jsxe/i)) {
          return paths.filesPaths.push(`${pathName ? pathName : FROM}/${item.name}`);
        } else if (item.isDirectory()) {
          return paths.directoriesPaths.push(`${pathName ? pathName : FROM}/${item.name}`);
        }
      });

      paths.filesPaths.forEach(filePath => {
        parseJsx(filePath);
      });

      paths.directoriesPaths.forEach(directoryPath => {
        readDirectory(directoryPath)
      });
    }
  );
}

readDirectory('');
