import fs from 'node:fs';
import path from 'node:path';
import { filesDirectoryPath, fsErrorMessage, __dirname } from './constants.js';

const { access, mkdir, readdir, copyFile } = fs.promises;

const copyFilesDirectoryPath = path.join(__dirname, 'files_copy');

const copy = async () => {
    try {
        await access(filesDirectoryPath, fs.constants.F_OK);
    } catch {
        throw new Error(fsErrorMessage);
    }

    let isTargetDirectoryExists = false;

    try {
        await access(copyFilesDirectoryPath, fs.constants.F_OK);
        isTargetDirectoryExists = true;
    } catch {}

    if (isTargetDirectoryExists) {
        throw new Error(fsErrorMessage);
    }

    try {
        const files = await readdir(filesDirectoryPath);

        await mkdir(copyFilesDirectoryPath);

        await Promise.all(
            files.map(async (file) => {
                const filePath = path.join(filesDirectoryPath, file);
                const copyFilePath = path.join(copyFilesDirectoryPath, file);

                await copyFile(filePath, copyFilePath);
            })
        );
    } catch (error) {
        throw new Error(error);
    }
};

await copy();
