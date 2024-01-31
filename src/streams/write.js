import fs from 'node:fs';
import path from 'node:path';
import { filesDirectoryPath } from './constants.js';

const fileToWritePath = path.join(filesDirectoryPath, 'fileToWrite.txt');

const write = async () => {
    const stream = fs.createWriteStream(fileToWritePath);

    process.stdin.pipe(stream);
};

await write();
