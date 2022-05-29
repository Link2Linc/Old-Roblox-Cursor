// refurbished and cleanup up windows-compatible script

import os from 'os';
import fs from 'fs';
const homedir = os.homedir(); + "/"
const robloxDir = homedir + "\\AppData\\Local\\Roblox\\Versions" + "\\";

console.log("Roblox version directory is " + robloxDir);

async function delay(time: number) {
    return new Promise(resolve => setTimeout(resolve, time*1000))
};

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
console.log("Latest roblox version installed is " + latestVersion + ". Defulting to this version.");


async function bringBackOldCursorWin(){
    var backupDir = robloxDir + latestVersion + "\\Content\\textures\\oldCursorBackup\\";
    var oldCursorDir = robloxDir + latestVersion + "\\Content\\textures\\ArrowCursor.png";
    var newDir = robloxDir + latestVersion + "\\Content\\textures\\oldCursorBackup\\ArrowCursor.png";
    await delay(1);
    if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir);
    };
    await delay(1);
    fs.rename(oldCursorDir, newDir, function (err) {
        if (err) console.log("Roblox is not installed. Please install Roblox and try again.");
        console.log('Moved ' + oldCursorDir + ' to ' + newDir)
    });
    await delay(1);
    var oldCursorDir = robloxDir + latestVersion + "\\Content\\textures\\ArrowFarCursor.png";
    var newDir = robloxDir + latestVersion + "\\Content\\textures\\oldCursorBackup\\ArrowFarCursor.png";
    await delay(1);
    fs.rename(oldCursorDir, newDir, function (err) {
        if (err) console.log("Roblox is not installed. Please install Roblox and try again.");
        console.log('Moved ' + oldCursorDir + ' to ' + newDir)
    });
    await delay(1);
    var cursorBackup = robloxDir + latestVersion + "\\Content\\textures\\cursorBackup";
    var oldDir = robloxDir + latestVersion + "\\Content\\textures\\Cursors\\KeyboardMouse\\ArrowCursor.png";
    var newDir = robloxDir + latestVersion + "\\Content\\textures\\cursorBackup\\ArrowCursor.png";
    await delay(1);
    if (!fs.existsSync(cursorBackup)) {
        fs.mkdirSync(cursorBackup);
    };
    await delay(2);
    fs.rename(oldDir, newDir, function (err) {
        if (err) console.log("Roblox is not installed. Please install Roblox and try again.");
        console.log('Moved ' + oldDir + ' to ' + newDir)
    });
    await delay(1);
    var oldDir = robloxDir + latestVersion + "\\Content\\textures\\Cursors\\KeyboardMouse\\ArrowFarCursor.png";
    var newDir = robloxDir + latestVersion + "\\Content\\textures\\cursorBackup\\ArrowFarCursor.png";
    await delay(1);
    fs.rename(oldDir, newDir, function (err) {
        if (err) console.log("Roblox is not installed. Please install Roblox and try again.");
        console.log('Moved ' + oldDir + ' to ' + newDir)
    });
    await delay(1);
    var oldDir = robloxDir + latestVersion + "\\Content\\textures\\oldCursorBackup\\ArrowCursor.png";
    var newDir = robloxDir + latestVersion + "\\Content\\textures\\Cursors\\KeyboardMouse\\ArrowCursor.png";
    await delay(1);
    fs.copyFile(oldDir, newDir, function (err) {
        if (err) console.log("Roblox is not installed. Please install Roblox and try again.");
        console.log('Copied ' + oldDir + ' to ' + newDir)
    });
    await delay(1);
    var oldDir = robloxDir + latestVersion + "\\Content\\textures\\oldCursorBackup\\ArrowFarCursor.png";
    var newDir = robloxDir + latestVersion + "\\Content\\textures\\Cursors\\KeyboardMouse\\ArrowFarCursor.png";
    await delay(1);
    fs.copyFile(oldDir, newDir, function (err) {
        if (err) console.log("Roblox is not installed. Please install Roblox and try again.");
        console.log('Copied ' + oldDir + ' to ' + newDir)
    });
    console.log("Successfully completed operation. Please restart your Roblox client.");
}

function revertDefaultCursorWin(){
    var oldCursorDir = robloxDir + latestVersion + "\\Content\\textures\\cursorBackup\\ArrowCursor.png";
    var newDir = robloxDir + latestVersion + "\\Content\\textures\\ArrowCursor.png";
    fs.copyFileSync(oldCursorDir, newDir);
    var oldCursorDir = robloxDir + latestVersion + "\\Content\\textures\\cursorBackup\\ArrowFarCursor.png";
    var newDir = robloxDir + latestVersion + "\\Content\\textures\\ArrowFarCursor.png";
    fs.copyFileSync(oldCursorDir, newDir);
}

if (process.argv[2] && process.platform === 'win32' && process.argv[2] === '--revert') {
    revertDefaultCursorWin();
  } else {
    console.log('No arguments passed, defaulting to new cursor');
    bringBackOldCursorWin();
  }