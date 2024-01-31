import fs from 'node:fs';
import { filesDirectoryPath, fsErrorMessage, __dirname } from './constants.js';

const { access, readdir } = fs.promises;

const list = async () => {
    try {
        await access(filesDirectoryPath, fs.constants.F_OK);
    } catch {
        throw new Error(fsErrorMessage);
    }

    try {
        const files = await readdir(filesDirectoryPath);

        console.log(files);
    } catch (error) {
        throw new Error(error);
    }
};

await list();
