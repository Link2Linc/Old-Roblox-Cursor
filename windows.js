"use strict";
// refurbished and cleanup up windows-compatible script
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
const fs_1 = __importDefault(require("fs"));
const homedir = os_1.default.homedir();
+"/";
const robloxDir = homedir + "\\AppData\\Local\\Roblox\\Versions" + "\\";
console.log("Roblox version directory is " + robloxDir);
// find the newest folder in the robloxDir directory and return it
function getLatestRobloxVersion() {
    let folders = fs_1.default.readdirSync(robloxDir);
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
function bringBackOldCursorWin() {
    var backupDir = robloxDir + latestVersion + "\\Content\\textures\\oldCursorBackup\\";
    var oldCursorDir = robloxDir + latestVersion + "\\Content\\textures\\ArrowCursor.png";
    var newDir = robloxDir + latestVersion + "\\Content\\textures\\oldCursorBackup\\ArrowCursor.png";
    if (!fs_1.default.existsSync(backupDir)) {
        fs_1.default.mkdirSync(backupDir);
    }
    ;
    fs_1.default.rename(oldCursorDir, newDir, function (err) {
        if (err)
            console.log("Roblox is not installed. Please install Roblox and try again.");
        console.log('Moved ' + oldCursorDir + ' to ' + newDir);
    });
    var oldCursorDir = robloxDir + latestVersion + "\\Content\\textures\\ArrowFarCursor.png";
    var newDir = robloxDir + latestVersion + "\\Content\\textures\\oldCursorBackup\\ArrowFarCursor.png";
    fs_1.default.rename(oldCursorDir, newDir, function (err) {
        if (err)
            console.log("Roblox is not installed. Please install Roblox and try again.");
        console.log('Moved ' + oldCursorDir + ' to ' + newDir);
    });
    var cursorBackup = robloxDir + latestVersion + "\\Content\\textures\\cursorBackup";
    var oldDir = robloxDir + latestVersion + "\\Content\\textures\\Cursors\\KeyboardMouse\\ArrowCursor.png";
    var newDir = robloxDir + latestVersion + "\\Content\\textures\\cursorBackup\\ArrowCursor.png";
    if (!fs_1.default.existsSync(cursorBackup)) {
        fs_1.default.mkdirSync(cursorBackup);
    }
    ;
    fs_1.default.rename(oldDir, newDir, function (err) {
        if (err)
            console.log("Roblox is not installed. Please install Roblox and try again.");
        console.log('Moved ' + oldDir + ' to ' + newDir);
    });
    var oldDir = robloxDir + latestVersion + "\\Content\\textures\\Cursors\\KeyboardMouse\\ArrowFarCursor.png";
    var newDir = robloxDir + latestVersion + "\\Content\\textures\\cursorBackup\\ArrowFarCursor.png";
    fs_1.default.rename(oldDir, newDir, function (err) {
        if (err)
            console.log("Roblox is not installed. Please install Roblox and try again.");
        console.log('Moved ' + oldDir + ' to ' + newDir);
    });
    var oldDir = robloxDir + latestVersion + "\\Content\\textures\\oldCursorBackup\\ArrowCursor.png";
    var newDir = robloxDir + latestVersion + "\\Content\\textures\\Cursors\\KeyboardMouse\\ArrowCursor.png";
    fs_1.default.copyFile(oldDir, newDir, function (err) {
        if (err)
            console.log("Roblox is not installed. Please install Roblox and try again.");
        console.log('Copied ' + oldDir + ' to ' + newDir);
    });
    var oldDir = robloxDir + latestVersion + "\\Content\\textures\\oldCursorBackup\\ArrowFarCursor.png";
    var newDir = robloxDir + latestVersion + "\\Content\\textures\\Cursors\\KeyboardMouse\\ArrowFarCursor.png";
    fs_1.default.copyFile(oldDir, newDir, function (err) {
        if (err)
            console.log("Roblox is not installed. Please install Roblox and try again.");
        console.log('Copied ' + oldDir + ' to ' + newDir);
    });
    console.log("Successfully completed operation. Please restart your Roblox client.");
}
