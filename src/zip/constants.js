import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);

export const __dirname = path.dirname(__filename);
export const filesDirectoryPath = path.join(__dirname, 'files');

export const fileToCompressPath = path.join(filesDirectoryPath, 'fileToCompress.txt');
export const compressedFilePath = path.join(filesDirectoryPath, 'archive.gz');
