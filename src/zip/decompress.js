import fs from 'node:fs';
import zlib from 'node:zlib';
import { fileToCompressPath, compressedFilePath } from './constants.js';

const { rm } = fs.promises;

const decompress = async () => {
    const readStream = fs.createReadStream(compressedFilePath);

    const writeStream = fs.createWriteStream(fileToCompressPath);

    const unzip = zlib.createGunzip();

    readStream.pipe(unzip).pipe(writeStream);

    writeStream.on('finish', async () => {
        try {
            await rm(compressedFilePath);
        } catch (error) {
            throw new Error(error);
        }
    });
};

await decompress();
