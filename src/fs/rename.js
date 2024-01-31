import fs from 'node:fs';
import path from 'node:path';
import { filesDirectoryPath, fsErrorMessage, __dirname } from './constants.js';

const fileToRenamePath = path.join(filesDirectoryPath, 'wrongFilename.txt');
const renamedFilePath = path.join(filesDirectoryPath, 'properFilename.md');

const { access, rename: fsRename } = fs.promises;

const rename = async () => {
    try {
        await access(fileToRenamePath, fs.constants.F_OK);
    } catch {
        throw new Error(fsErrorMessage);
    }

    let isTargetFileExists = false;

    try {
        await access(renamedFilePath, fs.constants.F_OK);
        isTargetFileExists = true;
    } catch {}

    if (isTargetFileExists) {
        throw new Error(fsErrorMessage);
    }

    try {
        await fsRename(fileToRenamePath, renamedFilePath);
    } catch (error) {
        throw new Error(error);
    }
};

await rename();
