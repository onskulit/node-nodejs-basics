import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);

export const __dirname = path.dirname(__filename);
export const filesDirectoryPath = path.join(__dirname, 'files');

const spawnChildProcess = async (args) => {
    const filePath = path.join(filesDirectoryPath, 'script.js');
    const childProcess = spawn('node', [filePath, ...args]);

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg1', 'arg2']);
