import fs from 'node:fs';
import path from 'node:path';
import { filesDirectoryPath, fsErrorMessage } from './constants.js';

const { access, readFile } = fs.promises;

const fileToReadPath = path.join(filesDirectoryPath, 'fileToRead.txt');

const read = async () => {
    try {
        await access(fileToReadPath, fs.constants.F_OK);
    } catch {
        throw new Error(fsErrorMessage);
    }

    try {
        const fileContent = await readFile(fileToReadPath, 'utf-8');

        console.log(fileContent);
    } catch (error) {
        throw new Error(error);
    }
};

await read();
