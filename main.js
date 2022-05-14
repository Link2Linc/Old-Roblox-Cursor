"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
if (process.platform !== 'darwin') {
    console.log('This script is for macOS only');
    process.exit(1);
}
function bringBackOldCursorMac() {
    var oldBackupDir = '/Applications/Roblox.app/Contents/Resources/content/textures/oldCursorBackup/';
    var oldCursorDir = '/Applications/Roblox.app/Contents/Resources/content/textures/ArrowCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/oldCursorBackup/ArrowCursor.png';
    if (!fs_1.default.existsSync(oldBackupDir)) {
        fs_1.default.mkdirSync(oldBackupDir);
    }
    ;
    fs_1.default.rename(oldCursorDir, newDir, function (err) {
        if (err)
            console.log("Roblox is not installed. Please install Roblox and try again.");
        console.log('Moved ' + oldCursorDir + ' to ' + newDir);
    });
    var oldCursorDir = '/Applications/Roblox.app/Contents/Resources/content/textures/ArrowFarCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/oldCursorBackup/ArrowFarCursor.png';
    fs_1.default.rename(oldCursorDir, newDir, function (err) {
        if (err)
            console.log("Roblox is not installed. Please install Roblox and try again.");
        console.log('Moved ' + oldCursorDir + ' to ' + newDir);
    });
    var cursorBackup = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup';
    var oldDir = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup/ArrowCursor.png';
    if (!fs_1.default.existsSync(cursorBackup)) {
        fs_1.default.mkdirSync(cursorBackup);
    }
    ;
    fs_1.default.rename(oldDir, newDir, function (err) {
        if (err)
            console.log("Roblox is not installed. Please install Roblox and try again.");
        console.log('Moved ' + oldDir + ' to ' + newDir);
    });
    var oldDir = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowFarCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup/ArrowFarCursor.png';
    fs_1.default.rename(oldDir, newDir, function (err) {
        if (err)
            console.log("Roblox is not installed. Please install Roblox and try again.");
        console.log('Moved ' + oldDir + ' to ' + newDir);
    });
    var oldDir = '/Applications/Roblox.app/Contents/Resources/content/textures/oldCursorBackup/ArrowCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowCursor.png';
    fs_1.default.copyFile(oldDir, newDir, function (err) {
        if (err)
            console.log("Roblox is not installed. Please install Roblox and try again.");
        console.log('Copied ' + oldDir + ' to ' + newDir);
    });
    var oldDir = '/Applications/Roblox.app/Contents/Resources/content/textures/oldCursorBackup/ArrowFarCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowFarCursor.png';
    fs_1.default.copyFile(oldDir, newDir, function (err) {
        if (err)
            console.log("Roblox is not installed. Please install Roblox and try again.");
        console.log('Copied ' + oldDir + ' to ' + newDir);
    });
}
function revertDefaultCursorMac() {
    var oldCursorDir = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup/ArrowCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowCursor.png';
    fs_1.default.copyFileSync(oldCursorDir, newDir);
    var oldCursorDir = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup/ArrowFarCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowFarCursor.png';
    fs_1.default.copyFileSync(oldCursorDir, newDir);
}
if (process.argv[2] && process.platform === 'darwin' && process.argv[2] === '--revert') {
    revertDefaultCursorMac();
}
else {
    console.log('No arguments passed, defaulting to new cursor');
    bringBackOldCursorMac();
}
