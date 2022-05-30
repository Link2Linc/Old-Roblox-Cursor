"use strict";
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
const fs_1 = __importDefault(require("fs"));
if (process.platform !== 'darwin') {
    console.log('This script is for macOS only, run "tsc && node windows.js" for Windows.');
    process.exit(1);
}
function delay(time) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(resolve => setTimeout(resolve, time * 1000));
    });
}
;
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
function bringBackOldCursorMac() {
    return __awaiter(this, void 0, void 0, function* () {
        var oldBackupDir = '/Applications/Roblox.app/Contents/Resources/content/textures/oldCursorBackup/';
        var oldCursorDir = '/Applications/Roblox.app/Contents/Resources/content/textures/ArrowCursor.png';
        var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/oldCursorBackup/ArrowCursor.png';
        if (!fs_1.default.existsSync(oldBackupDir)) {
            fs_1.default.mkdirSync(oldBackupDir);
        }
        ;
        console.log("Created backup directory #1");
        yield delay(2);
        fs_1.default.copyFileSync(oldCursorDir, newDir);
        yield delay(1);
        var oldCursorDir = '/Applications/Roblox.app/Contents/Resources/content/textures/ArrowFarCursor.png';
        var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/oldCursorBackup/ArrowFarCursor.png';
        yield delay(1);
        fs_1.default.copyFileSync(oldCursorDir, newDir);
        yield delay(1);
        var cursorBackup = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup';
        var oldDir = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowCursor.png';
        var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup/ArrowCursor.png';
        yield delay(1);
        if (!fs_1.default.existsSync(cursorBackup)) {
            fs_1.default.mkdirSync(cursorBackup);
        }
        ;
        console.log("Created backup directory #2");
        yield delay(2);
        fs_1.default.copyFileSync(oldDir, newDir);
        yield delay(1);
        var oldDir = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowFarCursor.png';
        var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup/ArrowFarCursor.png';
        yield delay(1);
        fs_1.default.copyFileSync(oldDir, newDir);
        yield delay(1);
        var oldDir = '/Applications/Roblox.app/Contents/Resources/content/textures/oldCursorBackup/ArrowCursor.png';
        var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowCursor.png';
        yield delay(1);
        fs_1.default.copyFile(oldDir, newDir, function (err) {
            if (err)
                throw err;
            console.log('Copied ' + oldDir + ' to ' + newDir);
        });
        yield delay(1);
        var oldDir = '/Applications/Roblox.app/Contents/Resources/content/textures/oldCursorBackup/ArrowFarCursor.png';
        var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowFarCursor.png';
        yield delay(1);
        fs_1.default.copyFile(oldDir, newDir, function (err) {
            if (err)
                throw err;
            console.log('Copied ' + oldDir + ' to ' + newDir);
            console.log("Successfully completed operation. Please restart your Roblox client.");
        });
    });
}
welcomeMessage();
function revertDefaultCursorMac() {
    var oldCursorDir = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup/ArrowCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowCursor.png';
    fs_1.default.copyFileSync(oldCursorDir, newDir);
    var oldCursorDir = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup/ArrowFarCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowFarCursor.png';
    fs_1.default.copyFileSync(oldCursorDir, newDir);
    console.log("Successfully completed operation. Please restart your Roblox client.");
}
if (process.platform === 'darwin' && process.argv[2] === '--revert') {
    revertDefaultCursorMac();
}
else {
    console.log('No arguments passed, defaulting to new cursor');
    bringBackOldCursorMac();
}
