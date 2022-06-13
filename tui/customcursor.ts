import fs from 'fs';
import os from 'os';
const homedir = os.homedir();
const platform = os.platform();
console.log(platform);

let customPath;

if (process.argv[2] === '--custom') {
    customPath = process.argv[3];
}

console.log(customPath);

