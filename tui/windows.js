"use strict";
// refurbished and cleanup up windows-compatible script
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
const fs_1 = __importDefault(require("fs"));
const homedir = os_1.default.homedir();
+"/";
const robloxDir = homedir + "\\AppData\\Local\\Roblox\\Versions" + "\\";
function waitForKey(keyCode) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(resolve => {
            process.stdin.on('data', function (chunk) {
                if (chunk[0] === keyCode) {
                    resolve();
                    process.stdin.pause();
                }
            });
        });
    });
}
function welcomeMessage() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Welcome to the Roblox cursor backup script!\n This script will backup your current Roblox cursor and replace it with the old 2021 Roblox cursor.\n\n Please make sure you have a Roblox client closed. \n This script is prefixed at /Applications/Roblox.app, if you are non-admin please run the command with the --noadmin flag.\n\n Press enter to continue. \n\n ---------------------------------------------------------");
        // if user presses enter in the terminal, continue 
        yield waitForKey(13);
    });
}
console.log("Roblox version directory is " + robloxDir);
function delay(time) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(resolve => setTimeout(resolve, time * 1000));
    });
}
;
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
console.log("Latest roblox version installed is " + latestVersion + ". Defulting to this version.");
function bringBackOldCursorWin() {
    return __awaiter(this, void 0, void 0, function* () {
        var backupDir = robloxDir + latestVersion + "\\Content\\textures\\oldCursorBackup\\";
        var oldCursorDir = robloxDir + latestVersion + "\\Content\\textures\\ArrowCursor.png";
        var newDir = robloxDir + latestVersion + "\\Content\\textures\\oldCursorBackup\\ArrowCursor.png";
        yield delay(1);
        if (!fs_1.default.existsSync(backupDir)) {
            fs_1.default.mkdirSync(backupDir);
        }
        ;
        yield delay(1);
        fs_1.default.rename(oldCursorDir, newDir, function (err) {
            if (err)
                console.log("Roblox is not installed. Please install Roblox and try again.");
            console.log('Moved ' + oldCursorDir + ' to ' + newDir);
        });
        yield delay(1);
        var oldCursorDir = robloxDir + latestVersion + "\\Content\\textures\\ArrowFarCursor.png";
        var newDir = robloxDir + latestVersion + "\\Content\\textures\\oldCursorBackup\\ArrowFarCursor.png";
        yield delay(1);
        fs_1.default.rename(oldCursorDir, newDir, function (err) {
            if (err)
                console.log("Roblox is not installed. Please install Roblox and try again.");
            console.log('Moved ' + oldCursorDir + ' to ' + newDir);
        });
        yield delay(1);
        var cursorBackup = robloxDir + latestVersion + "\\Content\\textures\\cursorBackup";
        var oldDir = robloxDir + latestVersion + "\\Content\\textures\\Cursors\\KeyboardMouse\\ArrowCursor.png";
        var newDir = robloxDir + latestVersion + "\\Content\\textures\\cursorBackup\\ArrowCursor.png";
        yield delay(1);
        if (!fs_1.default.existsSync(cursorBackup)) {
            fs_1.default.mkdirSync(cursorBackup);
        }
        ;
        yield delay(2);
        fs_1.default.rename(oldDir, newDir, function (err) {
            if (err)
                console.log("Roblox is not installed. Please install Roblox and try again.");
            console.log('Moved ' + oldDir + ' to ' + newDir);
        });
        yield delay(1);
        var oldDir = robloxDir + latestVersion + "\\Content\\textures\\Cursors\\KeyboardMouse\\ArrowFarCursor.png";
        var newDir = robloxDir + latestVersion + "\\Content\\textures\\cursorBackup\\ArrowFarCursor.png";
        yield delay(1);
        fs_1.default.rename(oldDir, newDir, function (err) {
            if (err)
                console.log("Roblox is not installed. Please install Roblox and try again.");
            console.log('Moved ' + oldDir + ' to ' + newDir);
        });
        yield delay(1);
        var oldDir = robloxDir + latestVersion + "\\Content\\textures\\oldCursorBackup\\ArrowCursor.png";
        var newDir = robloxDir + latestVersion + "\\Content\\textures\\Cursors\\KeyboardMouse\\ArrowCursor.png";
        yield delay(1);
        fs_1.default.copyFile(oldDir, newDir, function (err) {
            if (err)
                console.log("Roblox is not installed. Please install Roblox and try again.");
            console.log('Copied ' + oldDir + ' to ' + newDir);
        });
        yield delay(1);
        var oldDir = robloxDir + latestVersion + "\\Content\\textures\\oldCursorBackup\\ArrowFarCursor.png";
        var newDir = robloxDir + latestVersion + "\\Content\\textures\\Cursors\\KeyboardMouse\\ArrowFarCursor.png";
        yield delay(1);
        fs_1.default.copyFile(oldDir, newDir, function (err) {
            if (err)
                console.log("Roblox is not installed. Please install Roblox and try again.");
            console.log('Copied ' + oldDir + ' to ' + newDir);
        });
        console.log("Successfully completed operation. Please restart your Roblox client.");
    });
}
welcomeMessage();
function revertDefaultCursorWin() {
    var oldCursorDir = robloxDir + latestVersion + "\\Content\\textures\\cursorBackup\\ArrowCursor.png";
    var newDir = robloxDir + latestVersion + "\\Content\\textures\\ArrowCursor.png";
    fs_1.default.copyFileSync(oldCursorDir, newDir);
    var oldCursorDir = robloxDir + latestVersion + "\\Content\\textures\\cursorBackup\\ArrowFarCursor.png";
    var newDir = robloxDir + latestVersion + "\\Content\\textures\\ArrowFarCursor.png";
    fs_1.default.copyFileSync(oldCursorDir, newDir);
}
if (process.argv[2] && process.platform === 'win32' && process.argv[2] === '--revert') {
    revertDefaultCursorWin();
}
else {
    console.log('No arguments passed, defaulting to new cursor');
    bringBackOldCursorWin();
}
