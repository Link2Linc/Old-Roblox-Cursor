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
console.log("Latest roblox version installed is" + latestVersion + ". Defulting to this version.");


function bringBackOldCursorWin(){
    var backupDir = robloxDir + latestVersion + "\\Content\\textures\\oldCursorBackup\\";
    var oldCursorDir = robloxDir + latestVersion + "\\Content\\textures\\ArrowCursor.png";
    var newDir = robloxDir + latestVersion + "\\Content\\textures\\oldCursorBackup\\ArrowCursor.png";
    if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir);
    };
    fs.rename(oldCursorDir, newDir, function (err) {
        if (err) console.log("Roblox is not installed. Please install Roblox and try again.");
        console.log('Moved ' + oldCursorDir + ' to ' + newDir)
    });
    var oldCursorDir = robloxDir + latestVersion + "\\Content\\textures\\ArrowFarCursor.png";
    var newDir = robloxDir + latestVersion + "\\Content\\textures\\oldCursorBackup\\ArrowFarCursor.png";
    fs.rename(oldCursorDir, newDir, function (err) {
        if (err) console.log("Roblox is not installed. Please install Roblox and try again.");
        console.log('Moved ' + oldCursorDir + ' to ' + newDir)
    });
    var cursorBackup = robloxDir + latestVersion + "\\Content\\textures\\cursorBackup";
    var oldDir = robloxDir + latestVersion + "\\Content\\textures\\Cursors\\KeyboardMouse\\ArrowCursor.png";
    var newDir = robloxDir + latestVersion + "\\Content\\textures\\cursorBackup\\ArrowCursor.png";
    if (!fs.existsSync(cursorBackup)) {
        fs.mkdirSync(cursorBackup);
    };
    fs.rename(oldDir, newDir, function (err) {
        if (err) console.log("Roblox is not installed. Please install Roblox and try again.");
        console.log('Moved ' + oldDir + ' to ' + newDir)
    });
    var oldDir = robloxDir + latestVersion + "\\Content\\textures\\Cursors\\KeyboardMouse\\ArrowFarCursor.png";
    var newDir = robloxDir + latestVersion + "\\Content\\textures\\cursorBackup\\ArrowFarCursor.png";
    fs.rename(oldDir, newDir, function (err) {
        if (err) console.log("Roblox is not installed. Please install Roblox and try again.");
        console.log('Moved ' + oldDir + ' to ' + newDir)
    });
    var oldDir = robloxDir + latestVersion + "\\Content\\textures\\oldCursorBackup\\ArrowCursor.png";
    var newDir = robloxDir + latestVersion + "\\Content\\textures\\Cursors\\KeyboardMouse\\ArrowCursor.png";
    fs.copyFile(oldDir, newDir, function (err) {
        if (err) console.log("Roblox is not installed. Please install Roblox and try again.");
        console.log('Copied ' + oldDir + ' to ' + newDir)
    });
    var oldDir = robloxDir + latestVersion + "\\Content\\textures\\oldCursorBackup\\ArrowFarCursor.png";
    var newDir = robloxDir + latestVersion + "\\Content\\textures\\Cursors\\KeyboardMouse\\ArrowFarCursor.png";
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