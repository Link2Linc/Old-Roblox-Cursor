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
const xterm_1 = require("xterm");
const fs_1 = __importDefault(require("fs"));
const os_1 = __importDefault(require("os"));
const termdiv = document.getElementById('terminal');
const startbtn = document.getElementById('start-button');
const revertbtn = document.getElementById('revert-button');
var term = new xterm_1.Terminal();
term.open(termdiv);
term.write('When you click start, the output will be shown here.\r\n');
// globally used functions
function delay(time) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(resolve => setTimeout(resolve, time * 1000));
    });
}
;
let actualConsoleLog = console.log; // real console.log is stored in this variable
console.log = function (text) {
    term.write(text + '\r\n'); // example additon
};
// beginning of mac code
function bringBackOldCursorMac() {
    return __awaiter(this, void 0, void 0, function* () {
        var oldBackupDir = '/Applications/Roblox.app/contents/Resources/content/textures/oldCursorBackup/';
        var oldCursorDir = '/Applications/Roblox.app/contents/Resources/content/textures/ArrowCursor.png';
        var newDir = '/Applications/Roblox.app/contents/Resources/content/textures/oldCursorBackup/ArrowCursor.png';
        if (!fs_1.default.existsSync(oldBackupDir)) {
            fs_1.default.mkdirSync(oldBackupDir);
        }
        ;
        console.log("Created backup directory #1");
        yield delay(2);
        fs_1.default.copyFileSync(oldCursorDir, newDir);
        yield delay(1);
        var oldCursorDir = '/Applications/Roblox.app/contents/Resources/content/textures/ArrowFarCursor.png';
        var newDir = '/Applications/Roblox.app/contents/Resources/content/textures/oldCursorBackup/ArrowFarCursor.png';
        yield delay(1);
        fs_1.default.copyFileSync(oldCursorDir, newDir);
        yield delay(1);
        var cursorBackup = '/Applications/Roblox.app/contents/Resources/content/textures/cursorBackup';
        var oldDir = '/Applications/Roblox.app/contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowCursor.png';
        var newDir = '/Applications/Roblox.app/contents/Resources/content/textures/cursorBackup/ArrowCursor.png';
        yield delay(1);
        if (!fs_1.default.existsSync(cursorBackup)) {
            fs_1.default.mkdirSync(cursorBackup);
        }
        ;
        console.log("Created backup directory #2");
        yield delay(2);
        fs_1.default.copyFileSync(oldDir, newDir);
        yield delay(1);
        var oldDir = '/Applications/Roblox.app/contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowFarCursor.png';
        var newDir = '/Applications/Roblox.app/contents/Resources/content/textures/cursorBackup/ArrowFarCursor.png';
        yield delay(1);
        fs_1.default.copyFileSync(oldDir, newDir);
        yield delay(1);
        var oldDir = '/Applications/Roblox.app/contents/Resources/content/textures/oldCursorBackup/ArrowCursor.png';
        var newDir = '/Applications/Roblox.app/contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowCursor.png';
        yield delay(1);
        fs_1.default.copyFile(oldDir, newDir, function (err) {
            if (err)
                console.log(err);
            console.log('Copied ' + oldDir + ' to ' + newDir);
        });
        yield delay(1);
        var oldDir = '/Applications/Roblox.app/contents/Resources/content/textures/oldCursorBackup/ArrowFarCursor.png';
        var newDir = '/Applications/Roblox.app/contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowFarCursor.png';
        yield delay(1);
        fs_1.default.copyFile(oldDir, newDir, function (err) {
            if (err)
                console.log(err);
            console.log('Copied ' + oldDir + ' to ' + newDir);
            console.log("Successfully completed operation. Please restart your Roblox client.");
        });
    });
}
function revertDefaultCursorMac() {
    var oldCursorDir = '/Applications/Roblox.app/contents/Resources/content/textures/cursorBackup/ArrowCursor.png';
    var newDir = '/Applications/Roblox.app/contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowCursor.png';
    fs_1.default.copyFileSync(oldCursorDir, newDir);
    var oldCursorDir = '/Applications/Roblox.app/contents/Resources/content/textures/cursorBackup/ArrowFarCursor.png';
    var newDir = '/Applications/Roblox.app/contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowFarCursor.png';
    fs_1.default.copyFileSync(oldCursorDir, newDir);
    console.log("Successfully completed operation. Please restart your Roblox client.");
}
// end of mac functions
// start windows functions
const homedir = os_1.default.homedir();
+"/";
const robloxDir = homedir + "\\AppData\\Local\\Roblox\\Versions" + "\\";
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
function bringBackOldCursorWin() {
    return __awaiter(this, void 0, void 0, function* () {
        const homedir = os_1.default.homedir();
        +"/";
        const robloxDir = homedir + "\\AppData\\Local\\Roblox\\Versions" + "\\";
        const latestVersion = getLatestRobloxVersion();
        console.log("Roblox version directory is " + robloxDir);
        console.log("Latest roblox version installed is " + latestVersion + ". Defulting to this version.");
        var backupDir = robloxDir + latestVersion + "\\content\\textures\\oldCursorBackup\\";
        var oldCursorDir = robloxDir + latestVersion + "\\content\\textures\\ArrowCursor.png";
        var newDir = robloxDir + latestVersion + "\\content\\textures\\oldCursorBackup\\ArrowCursor.png";
        yield delay(1);
        if (!fs_1.default.existsSync(backupDir)) {
            fs_1.default.mkdirSync(backupDir);
        }
        ;
        yield delay(1);
        fs_1.default.copyFileSync(oldCursorDir, newDir);
        yield delay(1);
        var oldCursorDir = robloxDir + latestVersion + "\\content\\textures\\ArrowFarCursor.png";
        var newDir = robloxDir + latestVersion + "\\content\\textures\\oldCursorBackup\\ArrowFarCursor.png";
        yield delay(1);
        fs_1.default.copyFileSync(oldCursorDir, newDir);
        yield delay(1);
        var cursorBackup = robloxDir + latestVersion + "\\content\\textures\\cursorBackup";
        var oldDir = robloxDir + latestVersion + "\\content\\textures\\Cursors\\KeyboardMouse\\ArrowCursor.png";
        var newDir = robloxDir + latestVersion + "\\content\\textures\\cursorBackup\\ArrowCursor.png";
        yield delay(1);
        if (!fs_1.default.existsSync(cursorBackup)) {
            fs_1.default.mkdirSync(cursorBackup);
        }
        ;
        yield delay(2);
        fs_1.default.copyFileSync(oldDir, newDir);
        yield delay(1);
        var oldDir = robloxDir + latestVersion + "\\content\\textures\\Cursors\\KeyboardMouse\\ArrowFarCursor.png";
        var newDir = robloxDir + latestVersion + "\\content\\textures\\cursorBackup\\ArrowFarCursor.png";
        yield delay(1);
        fs_1.default.copyFileSync(oldDir, newDir);
        yield delay(1);
        var oldDir = robloxDir + latestVersion + "\\content\\textures\\oldCursorBackup\\ArrowCursor.png";
        var newDir = robloxDir + latestVersion + "\\content\\textures\\Cursors\\KeyboardMouse\\ArrowCursor.png";
        yield delay(1);
        fs_1.default.copyFileSync(oldDir, newDir);
        yield delay(1);
        var oldDir = robloxDir + latestVersion + "\\content\\textures\\oldCursorBackup\\ArrowFarCursor.png";
        var newDir = robloxDir + latestVersion + "\\content\\textures\\Cursors\\KeyboardMouse\\ArrowFarCursor.png";
        yield delay(1);
        fs_1.default.copyFileSync(oldDir, newDir);
        console.log("Successfully completed operation. Please restart your Roblox client.");
    });
}
function revertDefaultCursorWin() {
    const latestVersion = getLatestRobloxVersion();
    var oldCursorDir = robloxDir + latestVersion + "\\content\\textures\\cursorBackup\\ArrowCursor.png";
    var newDir = robloxDir + latestVersion + "\\content\\textures\\ArrowCursor.png";
    fs_1.default.copyFileSync(oldCursorDir, newDir);
    var oldCursorDir = robloxDir + latestVersion + "\\content\\textures\\cursorBackup\\ArrowFarCursor.png";
    var newDir = robloxDir + latestVersion + "\\content\\textures\\ArrowFarCursor.png";
    fs_1.default.copyFileSync(oldCursorDir, newDir);
}
//end windows functions
startbtn.onclick = function () {
    if (process.platform === "darwin") {
        term.write('Platform detected: MacOS\r\n');
        bringBackOldCursorMac();
    }
    else if (process.platform === "win32") {
        term.write('Platform detected: Windows\r\n');
        bringBackOldCursorWin();
    }
};
revertbtn.onclick = function () {
    if (process.platform === "darwin") {
        console.log("Platform detected: MacOS");
        revertDefaultCursorMac();
    }
    else if (process.platform === "win32") {
        console.log("Platform detected: Windows");
        revertDefaultCursorWin();
    }
};
