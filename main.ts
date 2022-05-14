import fs from 'fs';
import os from 'os';
if (process.platform !== 'darwin') {
  console.log('This script is for macOS only');
  process.exit(1);
}


function bringBackOldCursorMac() {
    var oldBackupDir = '/Applications/Roblox.app/Contents/Resources/content/textures/oldCursorBackup/';
    var oldCursorDir = '/Applications/Roblox.app/Contents/Resources/content/textures/ArrowCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/oldCursorBackup/ArrowCursor.png';
    if (!fs.existsSync(oldBackupDir)) {
        fs.mkdirSync(oldBackupDir);
    };
    setTimeout(() => {
        fs.rename(oldCursorDir, newDir, function (err) {
            if (err) console.log("Roblox is not installed. Please install Roblox and try again.");
            console.log('Moved ' + oldCursorDir + ' to ' + newDir)
        });
    }, 1000);
    var oldCursorDir = '/Applications/Roblox.app/Contents/Resources/content/textures/ArrowFarCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/oldCursorBackup/ArrowFarCursor.png';
    setTimeout(() => {
        fs.rename(oldCursorDir, newDir, function (err) {
            if (err) console.log("Roblox is not installed. Please install Roblox and try again.");
            console.log('Moved ' + oldCursorDir + ' to ' + newDir)
        });
    }, 1000);
    var cursorBackup = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup';
    var oldDir = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup/ArrowCursor.png';
    setTimeout(() => {
        if (!fs.existsSync(cursorBackup)) {
            fs.mkdirSync(cursorBackup);
        };
    }, 1000);
    setTimeout(() => {
        fs.rename(oldDir, newDir, function (err) {
            if (err) console.log("Roblox is not installed. Please install Roblox and try again.");
            console.log('Moved ' + oldDir + ' to ' + newDir)
        });
    }, 1000);
    var oldDir = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowFarCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup/ArrowFarCursor.png';
    setTimeout(() => {
        fs.rename(oldDir, newDir, function (err) {
            if (err) console.log("Roblox is not installed. Please install Roblox and try again.");
            console.log('Moved ' + oldDir + ' to ' + newDir)
        });
    }, 1000);
    var oldDir = '/Applications/Roblox.app/Contents/Resources/content/textures/oldCursorBackup/ArrowCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowCursor.png';
    setTimeout(() => {
        fs.copyFile(oldDir, newDir, function (err) {
            if (err) console.log("Roblox is not installed. Please install Roblox and try again.");
            console.log('Copied ' + oldDir + ' to ' + newDir)
        });
    }, 1000);

    var oldDir = '/Applications/Roblox.app/Contents/Resources/content/textures/oldCursorBackup/ArrowFarCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowFarCursor.png';
    setTimeout(() => {
        fs.copyFile(oldDir, newDir, function (err) {
            if (err) console.log("Roblox is not installed. Please install Roblox and try again.");
            console.log('Copied ' + oldDir + ' to ' + newDir)
        });
    }, 1000);
}


function revertDefaultCursorMac() {
    var oldCursorDir = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup/ArrowCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowCursor.png';
    fs.copyFileSync(oldCursorDir, newDir);
    var oldCursorDir = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup/ArrowFarCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowFarCursor.png';
    fs.copyFileSync(oldCursorDir, newDir);
}

if (process.argv[2] && process.platform === 'darwin' && process.argv[2] === '--revert') {
    revertDefaultCursorMac();
  } else {
    console.log('No arguments passed, defaulting to new cursor');
    bringBackOldCursorMac();
  }
