import { Terminal } from 'xterm';
import fs from 'fs';
import os from 'os';
const termdiv = document.getElementById('terminal');

const startbtn = document.getElementById('start-button');
const revertbtn = document.getElementById('revert-button');
var term = new Terminal();
term.open(termdiv);
term.write('When you click start, the output will be shown here.\r\n');

// globally used functions
async function delay(time: number) {
    return new Promise(resolve => setTimeout(resolve, time*1000))
};

let actualConsoleLog = console.log; // real console.log is stored in this variable
console.log = function(text: any) { // overwriting the function
    term.write(text + '\r\n'); // example additon
}
// beginning of mac code
async function bringBackOldCursorMac() {
    var oldBackupDir = '/Applications/Roblox.app/contents/Resources/content/textures/oldCursorBackup/';
    var oldCursorDir = '/Applications/Roblox.app/contents/Resources/content/textures/ArrowCursor.png';
    var newDir = '/Applications/Roblox.app/contents/Resources/content/textures/oldCursorBackup/ArrowCursor.png';
    if (!fs.existsSync(oldBackupDir)) {
        fs.mkdirSync(oldBackupDir);
    };
    console.log("Created backup directory #1");
    await delay(2);
    fs.copyFileSync(oldCursorDir, newDir);
    await delay(1);
    var oldCursorDir = '/Applications/Roblox.app/contents/Resources/content/textures/ArrowFarCursor.png';
    var newDir = '/Applications/Roblox.app/contents/Resources/content/textures/oldCursorBackup/ArrowFarCursor.png';
    await delay(1);
    fs.copyFileSync(oldCursorDir, newDir);
    await delay(1);
    var cursorBackup = '/Applications/Roblox.app/contents/Resources/content/textures/cursorBackup';
    var oldDir = '/Applications/Roblox.app/contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowCursor.png';
    var newDir = '/Applications/Roblox.app/contents/Resources/content/textures/cursorBackup/ArrowCursor.png';
    await delay(1);
    if (!fs.existsSync(cursorBackup)) {
        fs.mkdirSync(cursorBackup);
    };
    console.log("Created backup directory #2");
    await delay(2);
    fs.copyFileSync(oldDir, newDir);
    await delay(1);
    var oldDir = '/Applications/Roblox.app/contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowFarCursor.png';
    var newDir = '/Applications/Roblox.app/contents/Resources/content/textures/cursorBackup/ArrowFarCursor.png';
    await delay(1);
    fs.copyFileSync(oldDir, newDir);
    await delay(1);
    var oldDir = '/Applications/Roblox.app/contents/Resources/content/textures/oldCursorBackup/ArrowCursor.png';
    var newDir = '/Applications/Roblox.app/contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowCursor.png';
    await delay(1);
    fs.copyFile(oldDir, newDir, function (err: any) {
        if (err) console.log(err)
        console.log('Copied ' + oldDir + ' to ' + newDir)
    });
    await delay(1);
    var oldDir = '/Applications/Roblox.app/contents/Resources/content/textures/oldCursorBackup/ArrowFarCursor.png';
    var newDir = '/Applications/Roblox.app/contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowFarCursor.png';
    await delay(1);
    fs.copyFile(oldDir, newDir, function (err: any) {
        if (err) console.log(err)
        console.log('Copied ' + oldDir + ' to ' + newDir)
        console.log("Successfully completed operation. Please restart your Roblox client.");
    });
}

function revertDefaultCursorMac() {
    var oldCursorDir = '/Applications/Roblox.app/contents/Resources/content/textures/cursorBackup/ArrowCursor.png';
    var newDir = '/Applications/Roblox.app/contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowCursor.png';
    fs.copyFileSync(oldCursorDir, newDir);
    var oldCursorDir = '/Applications/Roblox.app/contents/Resources/content/textures/cursorBackup/ArrowFarCursor.png';
    var newDir = '/Applications/Roblox.app/contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowFarCursor.png';
    fs.copyFileSync(oldCursorDir, newDir);
    console.log("Successfully completed operation. Please restart your Roblox client.");
}
// end of mac functions

// start windows functions



const homedir = os.homedir(); + "/"
const robloxDir = homedir + "\\AppData\\Local\\Roblox\\Versions" + "\\";



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


async function bringBackOldCursorWin(){
    const homedir = os.homedir(); + "/"
    const robloxDir = homedir + "\\AppData\\Local\\Roblox\\Versions" + "\\";
    const latestVersion = getLatestRobloxVersion();
    console.log("Roblox version directory is " + robloxDir);
    console.log("Latest roblox version installed is " + latestVersion + ". Defulting to this version.");
    var backupDir = robloxDir + latestVersion + "\\content\\textures\\oldCursorBackup\\";
    var oldCursorDir = robloxDir + latestVersion + "\\content\\textures\\ArrowCursor.png";
    var newDir = robloxDir + latestVersion + "\\content\\textures\\oldCursorBackup\\ArrowCursor.png";
    await delay(1);
    if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir);
    };
    await delay(1);
    fs.copyFileSync(oldCursorDir, newDir);
    await delay(1);
    var oldCursorDir = robloxDir + latestVersion + "\\content\\textures\\ArrowFarCursor.png";
    var newDir = robloxDir + latestVersion + "\\content\\textures\\oldCursorBackup\\ArrowFarCursor.png";
    await delay(1);
    fs.copyFileSync(oldCursorDir, newDir);
    await delay(1);
    var cursorBackup = robloxDir + latestVersion + "\\content\\textures\\cursorBackup";
    var oldDir = robloxDir + latestVersion + "\\content\\textures\\Cursors\\KeyboardMouse\\ArrowCursor.png";
    var newDir = robloxDir + latestVersion + "\\content\\textures\\cursorBackup\\ArrowCursor.png";
    await delay(1);
    if (!fs.existsSync(cursorBackup)) {
        fs.mkdirSync(cursorBackup);
    };
    await delay(2);
    fs.copyFileSync(oldDir, newDir);
    await delay(1);
    var oldDir = robloxDir + latestVersion + "\\content\\textures\\Cursors\\KeyboardMouse\\ArrowFarCursor.png";
    var newDir = robloxDir + latestVersion + "\\content\\textures\\cursorBackup\\ArrowFarCursor.png";
    await delay(1);
    fs.copyFileSync(oldDir, newDir);
    await delay(1);
    var oldDir = robloxDir + latestVersion + "\\content\\textures\\oldCursorBackup\\ArrowCursor.png";
    var newDir = robloxDir + latestVersion + "\\content\\textures\\Cursors\\KeyboardMouse\\ArrowCursor.png";
    await delay(1);
    fs.copyFileSync(oldDir, newDir);
    await delay(1);
    var oldDir = robloxDir + latestVersion + "\\content\\textures\\oldCursorBackup\\ArrowFarCursor.png";
    var newDir = robloxDir + latestVersion + "\\content\\textures\\Cursors\\KeyboardMouse\\ArrowFarCursor.png";
    await delay(1);
    fs.copyFileSync(oldDir, newDir);
    console.log("Successfully completed operation. Please restart your Roblox client.");
}

function revertDefaultCursorWin(){
    const latestVersion = getLatestRobloxVersion();
    var oldCursorDir = robloxDir + latestVersion + "\\content\\textures\\cursorBackup\\ArrowCursor.png";
    var newDir = robloxDir + latestVersion + "\\content\\textures\\ArrowCursor.png";
    fs.copyFileSync(oldCursorDir, newDir);
    var oldCursorDir = robloxDir + latestVersion + "\\content\\textures\\cursorBackup\\ArrowFarCursor.png";
    var newDir = robloxDir + latestVersion + "\\content\\textures\\ArrowFarCursor.png";
    fs.copyFileSync(oldCursorDir, newDir);
}

//end windows functions
startbtn.onclick = function() {
    if (process.platform === "darwin"){
        term.write('Platform detected: MacOS\r\n');
        bringBackOldCursorMac();
    } else if (process.platform === "win32"){
        term.write('Platform detected: Windows\r\n');
        bringBackOldCursorWin();

    }
};
revertbtn.onclick = function() {
    if (process.platform === "darwin"){
        console.log("Platform detected: MacOS")
        revertDefaultCursorMac();
    } else if (process.platform === "win32"){
        console.log("Platform detected: Windows");
        revertDefaultCursorWin();
    }
}