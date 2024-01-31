import fs from 'node:fs';
import zlib from 'node:zlib';
import { fileToCompressPath, compressedFilePath } from './constants.js';

const { rm } = fs.promises;

const compress = async () => {
    const readStream = fs.createReadStream(fileToCompressPath);

    const writeStream = fs.createWriteStream(compressedFilePath);

    const compressStream = zlib.createGzip();

    readStream.pipe(compressStream).pipe(writeStream);

    writeStream.on('finish', async () => {
        try {
            await rm(fileToCompressPath);
        } catch (error) {
            throw new Error(error);
        }
    });
};

await compress();
