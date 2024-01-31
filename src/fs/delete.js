import fs from 'node:fs';
import path from 'node:path';
import { filesDirectoryPath, fsErrorMessage } from './constants.js';

const { access, rm } = fs.promises;

const fileToRemovePath = path.join(filesDirectoryPath, 'fileToRemove.txt');

const remove = async () => {
    try {
        await access(fileToRemovePath, fs.constants.F_OK);
    } catch {
        throw new Error(fsErrorMessage);
    }

    try {
        await rm(fileToRemovePath);
    } catch (error) {
        throw new Error(error);
    }
};

await remove();
