import fs from 'node:fs';
import path from 'node:path';
import { filesDirectoryPath } from './constants.js';

const fileToReadPath = path.join(filesDirectoryPath, 'fileToRead.txt');

const read = async () => {
    const stream = fs.createReadStream(fileToReadPath);

    stream.on('data', function (chunk) {
        process.stdout.write(chunk);
    });
};

await read();
