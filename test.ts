import fs from 'fs';

const folderPath = '/Users/lincolnmuller';

const lol = fs.readdirSync(folderPath);

console.log(lol);