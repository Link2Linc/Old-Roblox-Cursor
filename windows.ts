// refurbished and cleanup up windows-compatible script

import os from 'os';
import fs from 'fs';
const homedir = os.homedir(); + "/"
const robloxDir = homedir + "\\AppData\\Local\\Roblox\\Versions" + "\\";

console.log("Roblox version directory is " + robloxDir);

// find the newest folder in the robloxDir directory and return it
function getLatestRobloxVersion() {
    let folders = fs.readdirSync(robloxDir);
    let latestVersion = folders[0];
    for (let i = 0; i < folders.length; i++) {
        if (folders[i] > latestVersion) {
            latestVersion = folders[i];
        }
    }
    return latestVersion;
}

const latestVersion = getLatestRobloxVersion();
console.log(latestVersion);
