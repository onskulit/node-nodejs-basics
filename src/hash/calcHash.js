import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesDirectoryPath = path.join(__dirname, 'files');
const fileToCalculateHashPath = path.join(filesDirectoryPath, 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const hash = crypto.createHash('sha256');
    const input = fs.createReadStream(fileToCalculateHashPath);

    input.on('data', () => {
        const hexHash = hash.digest('hex');

        console.log(hexHash);
    });
};

await calculateHash();
