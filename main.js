"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
// if we are not on MacOS, we exit the script
if (process.platform !== 'darwin') {
    console.log('Currently, this only supports MacOS. Either create a Pull Request or come back later. Exiting script.');
    process.exit();
}
// if we are on MacOS, we need to run the platform specific commands, using process.platform
function oldCursorMacOS() {
    var backupDirectory = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup/';
    var oldPath = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowCursor.png';
    var newPath = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup/ArrowCursor.png';
    if (!fs_1.default.existsSync(backupDirectory)) {
        fs_1.default.mkdirSync(backupDirectory);
    }
    fs_1.default.rename(oldPath, newPath, function (err) {
        if (err)
            throw err;
        console.log('Moved ' + oldPath + ' to ' + newPath);
    });
    console.log("Backed up default cursor to: " + newPath);
    var backupDirectory = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup/';
    var oldPath = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowFarCursor.png';
    var newPath = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup/ArrowFarCursor.png';
    if (!fs_1.default.existsSync(backupDirectory)) {
        fs_1.default.mkdirSync(backupDirectory);
    }
    fs_1.default.rename(oldPath, newPath, function (err) {
        if (err)
            throw err;
        console.log('Moved ' + oldPath + ' to ' + newPath);
    });
    console.log("Backed up default cursor to: " + newPath);
    var oldPath = '/Applications/Roblox.app/Contents/Resources/content/textures/ArrowCursor.png';
    var newPath = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowCursor.png';
    fs_1.default.rename(oldPath, newPath, function (err) {
        if (err)
            throw err;
        console.log('Moved ' + oldPath + ' to ' + newPath);
    });
    var oldPath = '/Applications/Roblox.app/Contents/Resources/content/textures/ArrowFarCursor.png';
    var newPath = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowFarCursor.png';
    fs_1.default.rename(oldPath, newPath, function (err) {
        if (err)
            throw err;
        console.log('Moved ' + oldPath + ' to ' + newPath);
    });
}
function revertDefaultCursorMacOS() {
    console.log("Reverting to default cursor");
    var backupDirectory = '/Applications/Roblox.app/Contents/Resources/content/textures/oldCursorBackup/';
    var oldPath = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowCursor.png';
    var newPath = '/Applications/Roblox.app/Contents/Resources/content/textures/oldCursorBackup/ArrowCursor.png';
    if (!fs_1.default.existsSync(backupDirectory)) {
        fs_1.default.mkdirSync(backupDirectory);
    }
    fs_1.default.rename(oldPath, newPath, function (err) {
        if (err)
            throw err;
        console.log('Moved ' + oldPath + ' to ' + newPath);
    });
    var oldPath = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowFarCursor.png';
    var newPath = '/Applications/Roblox.app/Contents/Resources/content/textures/oldCursorBackup/ArrowFarCursor.png';
    fs_1.default.rename(oldPath, newPath, function (err) {
        if (err)
            throw err;
        console.log('Moved ' + oldPath + ' to ' + newPath);
    });
    var oldPath = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup/ArrowCursor.png';
    var newPath = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowCursor.png';
    fs_1.default.rename(oldPath, newPath, function (err) {
        if (err)
            throw err;
        console.log('Moved ' + oldPath + ' to ' + newPath);
    });
    var oldPath = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup/ArrowFarCursor.png';
    var newPath = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowFarCursor.png';
    fs_1.default.rename(oldPath, newPath, function (err) {
        if (err)
            throw err;
        console.log('Moved ' + oldPath + ' to ' + newPath);
    });
}
if (process.argv[2] && process.platform === 'darwin' && process.argv[2] === '--revert') {
    console.log('Reverting to default cursor');
    revertDefaultCursorMacOS();
}
else {
    console.log('No arguments passed, defaulting to new cursor');
    oldCursorMacOS();
}
