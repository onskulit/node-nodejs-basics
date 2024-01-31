import fs from 'node:fs';
import path from 'node:path';
import { filesDirectoryPath, fsErrorMessage } from './constants.js';

const { access, writeFile } = fs.promises;

const fileToCreatePath = path.join(filesDirectoryPath, 'fresh.txt');

const create = async () => {
    let isTargetFileExists = false;

    try {
        await access(fileToCreatePath, fs.constants.F_OK);
        isTargetFileExists = true;
    } catch {}

    if (isTargetFileExists) {
        throw new Error(fsErrorMessage);
    }

    try {
        await writeFile(fileToCreatePath, 'I am fresh and young');
    } catch (error) {
        throw new Error(error);
    }
};

await create();
