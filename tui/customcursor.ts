import readline from 'readline';
import fs from 'fs';
import os from 'os';
var rl = readline.createInterface(
    process.stdin, process.stdout);


const custompath = async function {
    await rl.question('Please enter custom cursor path. Note: only .png files are supported. Just drag the file from file explorer into the terminal.\n', async (path: any) => {
        console.log('Custom cursor path is ' + path);
        rl.close();
        return path;
        });
      }

fs.open(custompath());