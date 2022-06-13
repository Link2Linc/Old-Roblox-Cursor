import readline from 'readline';
import fs from 'fs';
import os from 'os';
var rl = readline.createInterface(
    process.stdin, process.stdout);

const custompath = rl.question('Please enter custom cursor path. Note: only .png files are supported. Just drag the file from file explorer into the terminal.\n', (path: any) => {
    console.log('Custom cursor path is ' + path);
    rl.close();
    return path;
});

console.log(custompath);

fs.open(custompath, 'r', (err: any, fd: any) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Custom cursor file opened successfully');
});